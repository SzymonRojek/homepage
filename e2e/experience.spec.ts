import { test, expect } from "./fixtures";

test.describe("Experience", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("./");
  });

  test("shows the current job in four points", async ({ page }) => {
    const experience = page.getByRole("region", { name: "Experience" });
    await expect(
      experience.getByRole("heading", { name: "Software Test Engineer" }),
    ).toBeVisible();
    await expect(experience.getByText("Sep 2022 – now")).toBeVisible();
    await expect(experience.getByText("Equiniti, Worthing")).toBeVisible();
    await expect(experience.getByRole("listitem")).toHaveCount(4);
  });

  test("doesn't repeat what How I test at work already says", async ({
    page,
  }) => {
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
