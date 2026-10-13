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

test("the app replaces the static copy without errors", async ({ page }) => {
  const errors: string[] = [];
  page.on("console", (message) => {
    if (message.type() === "error") {
      errors.push(message.text());
    }
  });
  page.on("pageerror", (error) => errors.push(error.message));

  await page.goto("./");

  // index.tsx clears the marks once the app has rendered.
  await expect(page.locator("body")).not.toHaveAttribute("data-prerendered");
  await expect(page.locator("style[data-prerendered]")).toHaveCount(0);
  await expect(page.getByRole("heading", { level: 1 })).toHaveCount(1);
  expect(errors).toEqual([]);
});
