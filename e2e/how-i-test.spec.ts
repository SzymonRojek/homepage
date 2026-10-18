import { test, expect } from "./fixtures";

test.describe("How I test at work", () => {
  test("shows the migration testing approach before the job", async ({
    page,
  }) => {
    await page.goto("./");

    const section = page.getByRole("region", { name: "How I test at work" });
    // My story opens the section, before the method.
    const story = section.getByRole("article", {
      name: "Beyond the obvious bugs",
    });
    await expect(story).toBeVisible();
    expect((await story.boundingBox())!.y).toBeLessThan(
      (await section
        .getByRole("list", { name: "How I test a data migration" })
        .boundingBox())!.y,
    );
    await expect(
      section
        .getByRole("list", { name: "How I test a data migration" })
        .getByRole("heading", { level: 3 }),
    ).toHaveCount(3);
    await expect(section).toContainText("field-by-field values");
    await expect(section).toContainText("stored procedures");
    // The story in my own words.
    await expect(
      section.getByRole("article", { name: "Beyond the obvious bugs" }),
    ).toContainText("walked through tricky cases with the developer");

    // The first section, right under the hero.
    await expect(
      page.getByRole("main").getByRole("heading", { level: 2 }).first(),
    ).toHaveText("How I test at work");
  });

  test("starts the bug level with the section's label", async ({ page }) => {
    await page.goto("./");

    const { label, bug } = await page
      .getByRole("region", { name: "How I test at work" })
      .evaluate((section) => {
        // The label's line, not its padding.
        const range = document.createRange();
        range.selectNodeContents(section.querySelector("h2")!);
        // The drawing itself, not the empty space of the rotated SVG.
        const ink = Array.from(
          section.querySelectorAll(":scope > svg *"),
          (shape) => shape.getBoundingClientRect(),
        ).filter(({ height }) => height > 0);
        return {
          label: range.getBoundingClientRect().top,
          bug: Math.min(...ink.map(({ top }) => top)),
        };
      });
    expect(Math.abs(bug - label)).toBeLessThan(2);
  });
});

// On phones the title is one line with room to spare at every width. A fixed
// 32px fitted at 412px by 1px, so a system that sets text a little wider
// (Linux, as in PageSpeed) broke it onto two lines once the real font
// arrived, and the page moved.
for (const width of [360, 375, 390, 412, 430, 600, 767]) {
  test.describe(`the How I test title at ${width}px`, () => {
    test.use({ viewport: { width, height: 800 } });

    test("is one line with room to spare", async ({ page }) => {
      await page.goto("./");
      await page.evaluate(() => document.fonts.ready);
      const title = page.getByRole("heading", {
        name: "Beyond the obvious bugs",
      });

      const { size, lines, spare } = await title.evaluate((heading) => {
        const style = getComputedStyle(heading);
        const oneLine = heading.cloneNode(true) as HTMLElement;
        oneLine.removeAttribute("id");
        oneLine.style.cssText =
          "position: absolute; visibility: hidden; white-space: nowrap";
        heading.after(oneLine);
        const needs = oneLine.getBoundingClientRect().width;
        oneLine.remove();
        return {
          size: parseFloat(style.fontSize),
          lines: Math.round(
            heading.getBoundingClientRect().height /
              parseFloat(style.lineHeight),
          ),
          spare: 1 - needs / heading.clientWidth,
        };
      });

      expect(size).toBeLessThanOrEqual(32);
      expect(lines).toBe(1);
      expect(spare).toBeGreaterThan(0.02);
    });
  });
}
