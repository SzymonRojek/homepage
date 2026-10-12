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

  test("shows only the job: education and languages live elsewhere", async ({
    page,
  }) => {
    const experience = page.getByRole("region", { name: "Experience" });

    await expect(experience.getByText("Master of Theology")).toHaveCount(0);
    await expect(experience.getByText("Polish")).toHaveCount(0);
    await expect(experience.getByText("Interests")).toHaveCount(0);
  });
});
