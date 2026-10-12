import { test, expect } from "./fixtures";

test.describe("Education & certifications", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("./");
  });

  test("is the last section, with the ISTQB certification first", async ({
    page,
  }) => {
    await expect(
      page.getByRole("main").getByRole("heading", { level: 2 }).last(),
    ).toHaveText("Education & certifications");

    const items = page
      .getByRole("region", { name: "Education & certifications" })
      .getByRole("listitem");
    await expect(items.first()).toContainText("ISTQB");
    await expect(items.first()).toContainText("In progress");
  });

  test("lists education with school and year", async ({ page }) => {
    const item = page
      .getByRole("region", { name: "Education & certifications" })
      .getByRole("listitem")
      .filter({ hasText: "Master of Theology" });

    await expect(item).toContainText("Nicolaus Copernicus University, Toruń");
    await expect(item).toContainText("2012");
  });

  test("lists the React course from 2022", async ({ page }) => {
    const item = page
      .getByRole("region", { name: "Education & certifications" })
      .getByRole("listitem")
      .filter({ hasText: "React.js workshops" });

    await expect(item).toContainText("final exam passed");
    await expect(item).toContainText("React School");
    await expect(item).toContainText("2022");
  });
});
