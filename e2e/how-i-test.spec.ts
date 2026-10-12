import { test, expect } from "./fixtures";

test.describe("How I test at work", () => {
  test("shows the migration testing approach before the job", async ({
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
