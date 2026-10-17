import { test, expect } from "./fixtures";

// On a slow phone the page is drawn before its fonts arrive, in the fallback
// fonts of index.html: system fonts scaled to Geist and Bricolage Grotesque,
// so lines break in the same places and nothing moves when the real fonts
// swap in. With plain sans-serif the swap moved "How I test" up and down
// (layout shift 0.056 in PageSpeed, 2026-10-17).
for (const { screen, viewport } of [
  { screen: "Lighthouse's phone", viewport: { width: 412, height: 823 } },
  { screen: "a small phone", viewport: { width: 360, height: 740 } },
  { screen: "a laptop", viewport: { width: 1440, height: 900 } },
]) {
  test.describe(`fonts arriving late on ${screen}`, () => {
    test.use({ viewport });

    test("swap in without moving the page", async ({ page }) => {
      // As on PageSpeed's slow 4G: the text font first, the headings' later.
      await page.route("**/*.woff2", async (route) => {
        const late = route.request().url().includes("bricolage") ? 1500 : 700;
        await new Promise((resolve) => setTimeout(resolve, late));
        await route.continue();
      });
      await page.addInitScript(() => {
        const shifts: number[] = [];
        Object.assign(window, { shifts });
        new PerformanceObserver((list) => {
          for (const entry of list.getEntries() as (PerformanceEntry & {
            value: number;
            hadRecentInput: boolean;
          })[]) {
            if (!entry.hadRecentInput) shifts.push(entry.value);
          }
        }).observe({ type: "layout-shift", buffered: true });
      });

      await page.goto("./");
      // The real fonts did arrive, after the first paint.
      await expect
        .poll(() =>
          page.evaluate(
            () =>
              document.fonts.check('16px "Geist"') &&
              document.fonts.check('800 32px "Bricolage Grotesque"'),
          ),
        )
        .toBe(true);
      await page.waitForTimeout(500);

      const total = await page.evaluate(() =>
        (window as unknown as { shifts: number[] }).shifts.reduce(
          (sum, value) => sum + value,
          0,
        ),
      );
      expect(total).toBeLessThan(0.01);
    });
  });
}
