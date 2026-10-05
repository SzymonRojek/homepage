import { test, expect } from "./fixtures";

test.describe("How this site is tested", () => {
  test("lists the quality gates with the live CI status", async ({ page }) => {
    await page.goto("./");

    const quality = page.getByRole("region", {
      name: "How this site is tested",
    });
    const checks = quality.getByRole("listitem");

    await expect(checks).toHaveCount(5);
    await expect(checks.filter({ hasText: "Lighthouse budgets" })).toHaveCount(
      1,
    );
    await expect(checks.filter({ hasText: "Dependabot" })).toHaveCount(1);
    await expect(
      quality.getByRole("link", { name: "CI status" }),
    ).toHaveAttribute("href", /actions\/workflows\/ci\.yml$/);
  });
});
