import type { Page } from "@playwright/test";
import { test, expect, themeSwitch } from "./fixtures";

const backToTop = (page: Page) =>
  page.getByRole("link", { name: "Back to top", exact: true });

// Jumps, as the End key does; the page's smooth scrolling is for links.
const scrollTo = (page: Page, share: number) =>
  page.evaluate((part) => {
    const room = document.documentElement.scrollHeight - window.innerHeight;
    window.scrollTo({ top: Math.round(room * part), behavior: "instant" });
  }, share);

// How much of the ring is drawn, from 0 to 100: its length less the offset
// of the circle that carries one. Found by its label, not its role: while
// the button is hidden it has no role to find it by, and the ring already
// follows the page.
const ringFilled = (page: Page) =>
  page.getByLabel("Back to top", { exact: true }).evaluate((link) => {
    const drawn = link.querySelectorAll("circle")[1];
    return 100 - parseFloat(getComputedStyle(drawn).strokeDashoffset);
  });

test.describe("Back to top", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("./");
  });

  test("is hidden at the top and appears once the page has moved", async ({
    page,
  }) => {
    await expect(backToTop(page)).toBeHidden();

    // Still hidden a little way down. The ring has moved by then, which
    // shows the button has read the scroll and chosen to stay away: at the
    // very top "hidden" is also what the page says before its script runs,
    // and a button stuck on passed that check (found on 2026-11-21).
    await page.evaluate(() =>
      window.scrollTo({ top: 200, behavior: "instant" }),
    );
    await expect.poll(() => ringFilled(page)).toBeGreaterThan(0);
    await expect(backToTop(page)).toBeHidden();

    await scrollTo(page, 0.5);
    await expect(backToTop(page)).toBeVisible();
    await expect(backToTop(page)).toHaveAttribute("href", "#top");
  });

  test("sizes itself for the screen, on the right of the window @desktop", async ({
    page,
  }) => {
    // Width of the window, then the button's size and its gap to the edge:
    // a desktop, a tablet and a phone. Never under 44px, a finger's width.
    for (const [width, size, gap] of [
      [1440, 56, 24],
      [1000, 48, 24],
      [600, 44, 16],
    ]) {
      await test.step(`${width}px wide`, async () => {
        await page.setViewportSize({ width, height: 800 });
        await scrollTo(page, 0.5);
        await expect(backToTop(page)).toBeVisible();

        const box = (await backToTop(page).boundingBox())!;
        expect(box.width).toBe(size);
        expect(box.height).toBe(size);
        const windowWidth = await page.evaluate(
          () => document.documentElement.clientWidth,
        );
        expect(windowWidth - (box.x + box.width)).toBe(gap);
      });
    }
  });

  test("fills its ring as the page scrolls", async ({ page }) => {
    await scrollTo(page, 0.25);
    await expect.poll(() => ringFilled(page)).toBeCloseTo(25, 0);

    await scrollTo(page, 0.75);
    await expect.poll(() => ringFilled(page)).toBeCloseTo(75, 0);

    await scrollTo(page, 1);
    await expect.poll(() => ringFilled(page)).toBeCloseTo(100, 0);
  });

  test("goes back to the top, and hides there", async ({ page }) => {
    await scrollTo(page, 0.6);
    await backToTop(page).click();

    await expect.poll(() => page.evaluate(() => window.scrollY)).toBe(0);
    await expect(backToTop(page)).toBeHidden();
  });

  test("rests above the footer at the end of the page", async ({ page }) => {
    await scrollTo(page, 1);
    await expect(backToTop(page)).toBeVisible();

    const footer = page.getByRole("contentinfo");
    await expect
      .poll(async () => {
        const button = (await backToTop(page).boundingBox())!;
        const footerBox = (await footer.boundingBox())!;
        // The gap between the button's bottom edge and the footer's top.
        return Math.round(footerBox.y - (button.y + button.height));
      })
      .toBe(12);
  });

  test("in a short window rests above the footer's last line, never on the icons @desktop", async ({
    page,
  }) => {
    // Too short to show the whole footer with the button over it.
    await page.setViewportSize({ width: 1280, height: 400 });
    await scrollTo(page, 1);
    await expect(backToTop(page)).toBeVisible();

    const footer = page.getByRole("contentinfo");
    await expect
      .poll(async () => {
        const button = (await backToTop(page).boundingBox())!;
        const switchBox = (await themeSwitch(page).boundingBox())!;
        return switchBox.y - (button.y + button.height);
      })
      .toBeGreaterThan(0);
    // Inside the footer now, not above it: over the note, under its top.
    const button = (await backToTop(page).boundingBox())!;
    const footerBox = (await footer.boundingBox())!;
    expect(button.y).toBeGreaterThan(footerBox.y);
    for (const name of [
      "GitHub (opens in a new tab)",
      "LinkedIn (opens in a new tab)",
    ]) {
      const icon = (await footer
        .getByRole("link", { name, exact: true })
        .boundingBox())!;
      expect(icon.y).toBeGreaterThanOrEqual(button.y + button.height);
    }
  });

  test("takes the button colours of each theme", async ({ page }) => {
    await page.emulateMedia({ colorScheme: "light" });
    await page.goto("./");
    await scrollTo(page, 0.5);
    // Light: the deep green with a cream arrow and ring.
    await expect(backToTop(page)).toHaveCSS(
      "background-color",
      "rgb(18, 60, 55)",
    );
    await expect(backToTop(page)).toHaveCSS("color", "rgb(251, 244, 230)");

    await scrollTo(page, 1);
    await themeSwitch(page).click();
    // Dark: the yellow with a deep-green arrow and ring.
    await expect(backToTop(page)).toHaveCSS(
      "background-color",
      "rgb(255, 201, 77)",
    );
    await expect(backToTop(page)).toHaveCSS("color", "rgb(18, 60, 55)");
  });
});
