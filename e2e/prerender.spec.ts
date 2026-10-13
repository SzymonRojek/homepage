import type { Page } from "@playwright/test";
import { expect, test } from "./fixtures";

const sections = [
  "How I test at work",
  "Experience",
  "Projects",
  "Skills",
  "Still learning",
];

// Search engines and AI tools that don't run JavaScript read the page as the
// server sends it; the build writes the whole page into it
// (scripts/prerender.ts).
test.describe("the page without JavaScript", () => {
  test("the HTML from the server holds the content", async ({ request }) => {
    const html = await (await request.get("/")).text();

    expect(html).toContain("Szymon Rojek");
    expect(html).toContain("A number can match and still be ");
    for (const section of sections) {
      expect(html).toContain(section);
    }
    expect(html).not.toContain("enable JavaScript");
  });

  test.describe(() => {
    test.use({ javaScriptEnabled: false });

    test("still reads in full, styled, with the photo", async ({ page }) => {
      await page.goto("./");

      await expect(
        page.getByRole("heading", { level: 1, name: "Szymon Rojek" }),
      ).toBeAttached();
      await expect(
        page.getByText("A number can match and still be wrong.", {
          exact: true,
        }),
      ).toBeVisible();
      for (const name of sections) {
        await expect(
          page.getByRole("heading", { level: 2, name }),
        ).toBeVisible();
      }
      // The page's own styles, not the browser's defaults.
      await expect(page.locator("body")).toHaveCSS(
        "background-color",
        "rgb(251, 244, 230)",
      );

      const photo = page.getByRole("img", { name: "Szymon Rojek" });
      await expect(photo).toBeVisible();
      const loaded = await photo
        .locator("img")
        .evaluateAll((images) =>
          images.map((image) => (image as HTMLImageElement).naturalWidth > 0),
        );
      expect(loaded.length).toBeGreaterThan(0);
      expect(loaded).not.toContain(false);
    });
  });
});

// Collects console errors, and every image the page removes while it loads.
const watchLoad = async (page: Page) => {
  const errors: string[] = [];
  page.on("console", (message) => {
    if (message.type() === "error") {
      errors.push(message.text());
    }
  });
  page.on("pageerror", (error) => errors.push(error.message));
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
      page.getByRole("link", { name: "Send me an email" }),
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
