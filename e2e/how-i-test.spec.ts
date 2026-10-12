import { test, expect } from "./fixtures";

test.describe("How I test at work", () => {
  test("shows the migration testing approach before the projects", async ({
    page,
  }) => {
    await page.goto("./");

    const section = page.getByRole("region", { name: "How I test at work" });
    await expect(
      section
        .getByRole("list", { name: "How I test a data migration" })
        .getByRole("heading", { level: 3 }),
    ).toHaveCount(6);
    await expect(section).toContainText("field-by-field values");
    await expect(section).toContainText("stored procedures");
    await expect(section).toContainText("Why it matters:");

    const headings = page.getByRole("main").getByRole("heading", { level: 2 });
    await expect(headings.nth(1)).toHaveText("How I test at work");
    await expect(headings.nth(2)).toHaveText("Projects");
  });
});
