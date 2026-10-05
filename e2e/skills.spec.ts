import { test, expect } from "./fixtures";

test.describe("Skills", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("./");
  });

  test("lists the eight core skills, data and SQL first", async ({ page }) => {
    const skills = page
      .getByRole("region", { name: "Skills" })
      .getByRole("list", { name: "Core skills" })
      .getByRole("listitem");

    await expect(skills).toHaveCount(8);
    await expect(skills.first()).toHaveText("Data migration & ETL testing");
    await expect(skills.nth(1)).toHaveText(
      "SQL reconciliation (T-SQL, SQL Server)",
    );
  });

  test("lists the tools", async ({ page }) => {
    await expect(
      page
        .getByRole("region", { name: "Skills" })
        .getByText(/^Tools:.*Azure DevOps.*· Claude$/),
    ).toBeVisible();
  });
});
