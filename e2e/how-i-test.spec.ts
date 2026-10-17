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
