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
      // Each shift with what moved, so a failure says where the lines broke
      // differently (CI runs Linux, where text is set a little differently).
      await page.addInitScript(() => {
        const shifts: { value: number; moved: string[] }[] = [];
        Object.assign(window, { shifts });
        new PerformanceObserver((list) => {
          for (const entry of list.getEntries() as (PerformanceEntry & {
            value: number;
            hadRecentInput: boolean;
            sources: {
              node: Node | null;
              previousRect: DOMRectReadOnly;
              currentRect: DOMRectReadOnly;
            }[];
          })[]) {
            if (entry.hadRecentInput) continue;
            shifts.push({
              value: entry.value,
              moved: entry.sources.map(
                ({ node, previousRect, currentRect }) => {
                  const element =
                    node instanceof Element ? node : node?.parentElement;
                  const text = element?.textContent?.trim().slice(0, 40);
                  const dy = Math.round(currentRect.y - previousRect.y);
                  const dh = Math.round(
                    currentRect.height - previousRect.height,
                  );
                  return `${element?.tagName} "${text}" moved ${dy}px, height ${dh}px`;
                },
              ),
            });
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

      const { shifts, fallbacks } = await page.evaluate(() => ({
        shifts: (
          window as unknown as {
            shifts: { value: number; moved: string[] }[];
          }
        ).shifts,
        // Whether this machine has a system font for each fallback face.
        fallbacks: [...document.fonts]
          .filter(({ family }) => family.includes("Fallback"))
          .map(
            ({ family, weight, status }) => `${family} ${weight}: ${status}`,
          ),
      }));
      const total = shifts.reduce((sum, { value }) => sum + value, 0);
      expect(
        total,
        JSON.stringify({ shifts, fallbacks }, null, 2),
      ).toBeLessThan(0.01);
    });
  });
}
