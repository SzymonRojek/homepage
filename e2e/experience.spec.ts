import { test, expect } from "./fixtures";

test.describe("Experience", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("./");
  });

  test("shows the current job and its focus areas", async ({ page }) => {
    const experience = page.getByRole("region", { name: "Experience" });
    await expect(
      experience.getByRole("heading", { name: "Software Test Engineer" }),
    ).toBeVisible();
    await expect(experience.getByText("Sep 2022 – present")).toBeVisible();
    await expect(experience.getByRole("heading", { level: 4 })).toHaveText([
      "Data migration & SQL",
      "Quality process",
      "AI-assisted testing",
    ]);
  });

  test("lists education with school and year", async ({ page }) => {
    const items = page
      .getByRole("region", { name: "Experience" })
      .getByRole("listitem")
      .filter({ hasText: "Master of Theology" });
    await expect(items).toContainText("Nicolaus Copernicus University, Toruń");
    await expect(items).toContainText("2012");
  });

  test("lists the ISTQB certification first, as in progress", async ({
    page,
  }) => {
    const experience = page.getByRole("region", { name: "Experience" });

    await expect(
      experience.getByRole("listitem").filter({ hasText: "ISTQB" }),
    ).toContainText("In progress");
    await expect(
      experience.getByRole("article").last().getByRole("listitem").first(),
    ).toContainText("ISTQB");
  });
});
