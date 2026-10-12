import AxeBuilder from "@axe-core/playwright";
import { test, expect } from "./fixtures";

for (const colorScheme of ["light", "dark"] as const) {
  test.describe(`${colorScheme} theme`, () => {
    test.use({ colorScheme });

    test("has no serious accessibility violations", async ({ page }) => {
      await page.goto("./");
      await expect(
        page.getByRole("list", { name: "Case studies" }),
      ).toBeVisible();

      const scan = async () => {
        const { violations } = await new AxeBuilder({ page }).analyze();
        return violations
          .filter(({ impact }) => impact === "serious" || impact === "critical")
          .map(({ id, help, nodes }) => ({
            id,
            help,
            targets: nodes.map(({ target }) => target.join(" ")),
          }));
      };

      // The page with every case study closed, then each one opened in full,
      // with every <details>, not only what is visible by default.
      const serious = await scan();
      const cards = page
        .getByRole("list", { name: "Case studies" })
        .getByRole("button", { name: "Read the case study" });

      for (let index = 0; index < (await cards.count()); index++) {
        await cards.nth(index).click();
        await page
          .locator("details")
          .evaluateAll((elements) =>
            elements.forEach((element) => element.setAttribute("open", "")),
          );
        serious.push(...(await scan()));
      }

      expect(serious).toEqual([]);
    });
  });
}
