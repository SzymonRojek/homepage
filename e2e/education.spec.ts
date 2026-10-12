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

  test("shows ongoing LinkedIn Learning as one item, after ISTQB", async ({
    page,
  }) => {
    const items = page
      .getByRole("region", { name: "Education & certifications" })
      .getByRole("listitem");

    await expect(items.nth(1)).toContainText("LinkedIn Learning courses");
    await expect(items.nth(1)).toContainText(
      "Programming, software testing and AI",
    );
    await expect(items.nth(1)).toContainText("2023 – present");
  });

  test("lists courses and certifications only, no degree", async ({ page }) => {
    const section = page.getByRole("region", {
      name: "Education & certifications",
    });

    await expect(section.getByRole("listitem")).toHaveCount(5);
    await expect(section.getByText(/Master of|University, Toruń/)).toHaveCount(
      0,
    );
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
