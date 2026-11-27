import { test, expect } from "./fixtures";

test.describe("Experience", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("./");
  });

  test("shows the current job in six points", async ({ page }) => {
    const experience = page.getByRole("region", { name: "Experience" });
    await expect(
      experience.getByRole("heading", { name: "Test Engineer" }),
    ).toBeVisible();
    await expect(experience.getByText("Nov 2022 – now")).toBeVisible();
    await expect(experience.getByText("Equiniti, Worthing")).toBeVisible();
    // Six: the Power BI point came over from the CV on 2026-11-21, and the
    // regulatory one from the Data QA CV on 2026-11-27.
    await expect(experience.getByRole("listitem")).toHaveCount(6);
    await expect(
      experience
        .getByRole("listitem")
        .filter({ hasText: "data protection requirements" }),
    ).toHaveCount(1);
    await expect(
      experience.getByRole("listitem").filter({ hasText: "Power BI" }),
    ).toHaveCount(1);
    // The section opens on a fact in large type, its key words marked.
    await expect(experience).toContainText(
      "4 years in financial data migration",
    );
    await expect(
      experience.locator("mark").filter({ hasText: "data migration" }),
    ).toBeVisible();
  });

  test("doesn't repeat what How I test already says", async ({ page }) => {
    const experience = page.getByRole("region", { name: "Experience" });

    await expect(
      experience.getByText(/mapping documents and transformation rules/),
    ).toHaveCount(0);
    await expect(experience.getByText(/Trace defects/)).toHaveCount(0);
  });

  test("shows only the job: education and languages live elsewhere", async ({
    page,
  }) => {
    const experience = page.getByRole("region", { name: "Experience" });

    await expect(experience.getByText("ISTQB")).toHaveCount(0);
    await expect(experience.getByText("Polish")).toHaveCount(0);
    await expect(experience.getByText("Interests")).toHaveCount(0);
  });
});
