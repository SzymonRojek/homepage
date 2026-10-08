import AxeBuilder from "@axe-core/playwright";
import { test, expect } from "./fixtures";

for (const colorScheme of ["light", "dark"] as const) {
  test.describe(`${colorScheme} theme`, () => {
    test.use({ colorScheme });

    test("has no serious accessibility violations", async ({ page }) => {
      await page.goto("./");
      await expect(
        page.getByRole("article", {
          name: "This portfolio, tested end to end",
        }),
      ).toBeVisible();

      // Scan the full case studies too, not only what is visible by default.
      await page
        .locator("details")
        .evaluateAll((elements) =>
          elements.forEach((element) => element.setAttribute("open", "")),
        );

      const { violations } = await new AxeBuilder({ page }).analyze();
      const serious = violations
        .filter(({ impact }) => impact === "serious" || impact === "critical")
        .map(({ id, help, nodes }) => ({
          id,
          help,
          targets: nodes.map(({ target }) => target.join(" ")),
        }));

      expect(serious).toEqual([]);
    });
  });
}
