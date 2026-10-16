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
    ).toContainText("set up a call with the developer");

    // The job comes straight after how I test there, so they read as one.
    const headings = await page
      .getByRole("main")
      .getByRole("heading", { level: 2 })
      .allTextContents();
    expect(headings.indexOf("Experience")).toBe(
      headings.indexOf("How I test at work") + 1,
    );
  });
});
