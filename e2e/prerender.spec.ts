import type { Page } from "@playwright/test";
import { expect, pageErrors, test } from "./fixtures";

const sections = [
  "How I test",
  "Projects",
  "Experience",
  "Skills & learning",
  "References",
];

// Search engines and AI tools that don't run JavaScript read the page as the
// server sends it; the build writes the whole page into it
// (scripts/prerender.ts).
test.describe("the page without JavaScript", () => {
  test("the HTML from the server holds the content @smoke", async ({
    request,
  }) => {
    const html = await (await request.get("/")).text();

    expect(html).toContain("Szymon Rojek");
    expect(html).toContain("I don’t stop at ");
    for (const section of sections) {
      // The raw HTML writes "&" as "&amp;".
      expect(html).toContain(section.replace("&", "&amp;"));
    }
    expect(html).not.toContain("enable JavaScript");
  });

  test.describe(() => {
    test.use({ javaScriptEnabled: false });

    test("still reads in full, styled, with the photo", async ({ page }) => {
      await page.goto("./");

      await expect(
        page.getByRole("heading", { level: 1 }),
      ).toHaveAccessibleName(
        "Szymon Rojek, Test Engineer: I don’t stop at green.",
      );
      await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
      for (const name of sections) {
        await expect(
          page.getByRole("heading", { level: 2, name }),
        ).toBeVisible();
      }
      // The page's own styles (the sand page), not the browser's defaults.
      await expect(page.locator("body")).toHaveCSS(
        "background-color",
        "rgb(244, 234, 214)",
      );

      const photo = page.getByRole("img", { name: "Szymon Rojek" });
      await expect(photo).toBeVisible();
      expect(
        await photo.evaluate(
          (image) => (image as HTMLImageElement).naturalWidth > 0,
        ),
      ).toBe(true);
    });
  });
});

// Collects console errors, and every image the page removes while it loads.
const watchLoad = async (page: Page) => {
  const errors = pageErrors(page);
  page.on("console", (message) => {
    if (message.type() === "error") {
      errors.push(message.text());
    }
  });
  await page.addInitScript(() => {
    const removedImages: string[] = [];
    new MutationObserver((records) => {
      for (const { removedNodes } of records) {
        removedNodes.forEach((node) => {
          if (
            node instanceof Element &&
            (node.matches("img") || node.querySelector("img"))
          ) {
            removedImages.push(node.nodeName);
          }
        });
      }
    }).observe(document, { childList: true, subtree: true });
    Object.assign(window, { removedImages });
  });

  return errors;
};

const removedImages = (page: Page) =>
  page.evaluate(
    () => (window as unknown as { removedImages: string[] }).removedImages,
  );

// The cleanup runs once the app has the page (usePrerenderCleanup).
const expectAppInCharge = async (page: Page) => {
  await expect(page.locator("body")).not.toHaveAttribute("data-prerendered");
  await expect(page.locator("style[data-prerendered]")).toHaveCount(0);
  await expect(page.getByRole("heading", { level: 1 })).toHaveCount(1);
};

test.describe("the app takes over the static copy", () => {
  test("as it is in the light theme, so the photo is drawn once", async ({
    page,
  }) => {
    const errors = await watchLoad(page);
    await page.goto("./");

    await expectAppInCharge(page);
    expect(await removedImages(page)).toEqual([]);
    // Styled by the app's own CSS now, so its class names match the copy's.
    await expect(
      page.getByRole("button", {
        name: "Copy my email address, sz.rojek@proton.me",
      }),
    ).toHaveCSS("background-color", "rgb(255, 201, 77)");
    expect(errors).toEqual([]);
  });

  test("drawn anew for a case-study address", async ({ page }) => {
    const errors = await watchLoad(page);
    await page.goto("./#case-study-homepage");

    await expectAppInCharge(page);
    await expect(
      page.getByRole("article", {
        name: "This website: built and tested like a real product",
      }),
    ).toBeVisible();
    expect(errors).toEqual([]);
  });

  test.describe("with a dark OS theme", () => {
    test.use({ colorScheme: "dark" });

    test("drawn anew in the dark theme", async ({ page }) => {
      const errors = await watchLoad(page);
      await page.goto("./");

      await expectAppInCharge(page);
      await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
      expect(errors).toEqual([]);
    });
  });
});
