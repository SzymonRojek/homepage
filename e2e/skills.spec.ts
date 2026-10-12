import { test, expect } from "./fixtures";

test.describe("Skills", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("./");
  });

  test("groups skills as testing, automation and programming", async ({
    page,
  }) => {
    await expect(
      page
        .getByRole("region", { name: "Skills" })
        .getByRole("heading", { level: 3 }),
    ).toHaveText(["Testing & data", "Test automation", "Programming"]);
  });

  test("lists testing skills, data and SQL first", async ({ page }) => {
    const skills = page
      .getByRole("region", { name: "Skills" })
      .getByRole("list", { name: "Testing & data skills" })
      .getByRole("listitem");

    await expect(skills).toHaveCount(6);
    await expect(skills.first()).toHaveText("Data migration & ETL testing");
    await expect(skills.nth(1)).toHaveText(
      "SQL reconciliation (T-SQL, SQL Server)",
    );
  });

  test("lists automation skills, Playwright first", async ({ page }) => {
    const skills = page
      .getByRole("region", { name: "Skills" })
      .getByRole("list", { name: "Test automation skills" })
      .getByRole("listitem");

    await expect(skills).toHaveCount(7);
    await expect(skills.first()).toHaveText("Playwright & TypeScript");
  });

  test("lists self-taught programming skills", async ({ page }) => {
    const skills = page
      .getByRole("region", { name: "Skills" })
      .getByRole("list", { name: "Programming skills" })
      .getByRole("listitem");

    await expect(skills).toHaveCount(7);
    await expect(skills.first()).toHaveText("TypeScript & React");
  });

  test("lists the languages under the tools", async ({ page }) => {
    await expect(
      page
        .getByRole("region", { name: "Skills" })
        .getByText(/^Languages: Polish/),
    ).toHaveText(
      "Languages: Polish (native) · English (professional working proficiency)",
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
