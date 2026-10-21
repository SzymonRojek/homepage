import { test, expect } from "./fixtures";

test.describe("Skills & learning", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("./");
  });

  test("groups skills as testing, automation, programming and learning", async ({
    page,
  }) => {
    await expect(
      page
        .getByRole("region", { name: "Skills & learning" })
        .getByRole("heading", { level: 3 }),
    ).toHaveText(["Testing", "Automation", "Programming", "Learning"]);
  });

  test("comes right after Experience, with ISTQB next and the courses newest first", async ({
    page,
  }) => {
    const headings = await page
      .getByRole("main")
      .getByRole("heading", { level: 2 })
      .allTextContents();
    expect(headings.indexOf("Skills & learning")).toBe(
      headings.indexOf("Experience") + 1,
    );

    const courses = page
      .getByRole("region", { name: "Skills & learning" })
      .getByRole("list", { name: "Courses and certifications" })
      .getByRole("listitem");
    await expect(courses).toHaveCount(5);
    await expect(courses.nth(0)).toContainText(
      "ISTQB Certified Tester, Foundation Level",
    );
    await expect(courses.nth(0)).toContainText("Next");
    await expect(courses.nth(1)).toContainText("2026");
    await expect(courses.nth(2)).toContainText("2025");
    await expect(courses.nth(3)).toContainText("2023 – now");
    await expect(courses.nth(3)).toContainText("LinkedIn Learning");
    await expect(courses.nth(4)).toContainText("2022");
    await expect(courses.nth(4)).toContainText("React School");
    // Courses and certifications only, no degree.
    await expect(
      page
        .getByRole("region", { name: "Skills & learning" })
        .getByText(/Master of|University, Toruń/),
    ).toHaveCount(0);
    // "Still learning" is no longer a section of its own.
    await expect(
      page.getByRole("region", { name: "Still learning" }),
    ).toHaveCount(0);
  });

  test("lists testing skills, data and SQL first", async ({ page }) => {
    const skills = page
      .getByRole("region", { name: "Skills & learning" })
      .getByRole("list", { name: "Testing skills" })
      .getByRole("listitem");

    await expect(skills).toHaveCount(5);
    await expect(skills.first()).toHaveText("Data migration & ETL");
    await expect(skills.nth(1)).toHaveText(
      "SQL reconciliation (T-SQL, SQL Server)",
    );
  });

  test("lists automation skills, Playwright first", async ({ page }) => {
    const skills = page
      .getByRole("region", { name: "Skills & learning" })
      .getByRole("list", { name: "Automation skills" })
      .getByRole("listitem");

    await expect(skills).toHaveCount(6);
    await expect(skills.first()).toHaveText("Playwright & TypeScript");
  });

  test("lists self-taught programming skills", async ({ page }) => {
    const skills = page
      .getByRole("region", { name: "Skills & learning" })
      .getByRole("list", { name: "Programming skills" })
      .getByRole("listitem");

    await expect(skills).toHaveCount(3);
    await expect(skills.first()).toHaveText(
      "JavaScript, React, Redux, TypeScript",
    );
  });

  test("lists the languages under the tools", async ({ page }) => {
    await expect(
      page
        .getByRole("region", { name: "Skills & learning" })
        .getByText(/^Languages: Polish/),
    ).toHaveText(
      "Languages: Polish (native) · English (professional working proficiency)",
    );
  });

  test("lists the tools", async ({ page }) => {
    await expect(
      page
        .getByRole("region", { name: "Skills & learning" })
        .getByText(/^Tools:.*Azure DevOps.*· Claude$/),
    ).toBeVisible();
  });
});
