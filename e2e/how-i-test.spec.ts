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
    ).toHaveCount(3);
    await expect(section).toContainText("field-by-field values");
    await expect(section).toContainText("stored procedures");
    await expect(
      section.getByRole("heading", { level: 3, name: "Why it matters" }),
    ).toBeVisible();
    await expect(section).toContainText(
      "In financial data, one wrong field can mean a wrong holding or a wrong payment. Reconciliation proves that nothing was lost or changed on the way.",
    );
    // The story in my own words comes first.
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
