import { test, expect } from "./fixtures";

test.describe("Still learning", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("./");
  });

  test("is the last section, with ISTQB as next up", async ({ page }) => {
    await expect(
      page.getByRole("main").getByRole("heading", { level: 2 }).last(),
    ).toHaveText("Still learning");

    const section = page.getByRole("region", { name: "Still learning" });
    await expect(
      section.getByRole("article", {
        name: "ISTQB Certified Tester, Foundation Level",
      }),
    ).toContainText("Next up");
  });

  test("lists the courses newest first, by when they started", async ({
    page,
  }) => {
    const years = page
      .getByRole("region", { name: "Still learning" })
      .getByRole("list", { name: "Courses" })
      .getByRole("listitem");

    await expect(years).toHaveCount(4);
    await expect(years.nth(0)).toContainText("2026");
    await expect(years.nth(1)).toContainText("2025");
    await expect(years.nth(2)).toContainText("2023 – now");
    await expect(years.nth(2)).toContainText("LinkedIn Learning");
    await expect(years.nth(3)).toContainText("2022");
    await expect(years.nth(3)).toContainText("React School");
  });

  test("has courses and certifications only, no degree", async ({ page }) => {
    await expect(
      page
        .getByRole("region", { name: "Still learning" })
        .getByText(/Master of|University, Toruń/),
    ).toHaveCount(0);
  });
});
