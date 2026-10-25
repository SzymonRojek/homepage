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
        const { violations } = await new AxeBuilder({ page })
          // Label in Name (WCAG 2.5.3): a control's accessible name has to
          // contain the words on it, so a visitor who says "Contact" reaches
          // the right one. axe calls the rule experimental and leaves it off
          // unless asked for, and it is the rule that would have caught the
          // footer button named "Email me" over an address.
          .options({
            rules: { "label-content-name-mismatch": { enabled: true } },
          })
          .analyze();
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

// target="_blank" is silent, so a screen reader gives no warning that a link
// leaves the page for a new tab. Every external link has to say so itself,
// in its aria-label (src/common/newTab.ts).
test("every external link says that it opens a new tab", async ({ page }) => {
  await page.goto("./");
  await expect(page.getByRole("list", { name: "Case studies" })).toBeVisible();

  // Every link that leaves the page, with the name a screen reader reads: the
  // label where there is one, else the link's own words, hidden ones included.
  const external = () =>
    page.getByRole("link").evaluateAll((links) =>
      links
        .filter((link) => link.getAttribute("target") === "_blank")
        .map((link) => ({
          href: link.getAttribute("href"),
          name: link.getAttribute("aria-label") ?? link.textContent ?? "",
        })),
    );

  // The hrefs of the ones that don't say it, so a failure names them.
  const unannounced = async () => {
    const links = await external();
    expect(links.length).toBeGreaterThan(0);
    return links
      .filter(({ name }) => !name.includes("opens in a new tab"))
      .map(({ href }) => href);
  };

  // The cards and the footer first, then the links inside each case study:
  // only one is open at a time, so each is checked as it opens.
  expect(await unannounced()).toEqual([]);

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
    expect(await unannounced()).toEqual([]);
  }
});
