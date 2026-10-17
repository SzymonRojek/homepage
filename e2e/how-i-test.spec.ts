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
});
