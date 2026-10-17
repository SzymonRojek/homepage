import AxeBuilder from "@axe-core/playwright";
import { test, expect } from "./fixtures";

for (const colorScheme of ["light", "dark"] as const) {
  test.describe(`${colorScheme} theme`, () => {
    test.use({ colorScheme });

    test("has no serious accessibility violations", async ({ page }) => {
      // Three full axe scans (closed, then each case study opened in full):
      // about 15 s alone, past the 30 s limit on a busy machine.
      test.slow();
      await page.goto("./");
      await expect(
        page.getByRole("list", { name: "Case studies" }),
      ).toBeVisible();

      const scan = async () => {
        // Text still fading in (the site's CI gates tick in one by one as they
        // come into view) reads as too faint mid-way; axe checks it once in
        // place. Endless ones, such as the top bar's pulsing dot, are left.
        await page.evaluate(() =>
          Promise.all(
            document
              .getAnimations()
              .filter(
                (animation) =>
                  animation.playState === "running" &&
                  animation.effect?.getTiming().iterations !== Infinity,
              )
              .map((animation) => animation.finished.catch(() => undefined)),
          ),
        );
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
      // The button keeps its "Case study" label once open, so the count
      // stays the same and every case study gets scanned.
      const cards = page
        .getByRole("list", { name: "Case studies" })
        .getByRole("button", { name: "Case study" });

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
