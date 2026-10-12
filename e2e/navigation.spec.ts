import type { Page } from "@playwright/test";
import { test, expect } from "./fixtures";

// On phones the section links sit behind the menu button.
const sectionLink = async (page: Page, name: string, isMobile: boolean) => {
  if (isMobile) {
    await page.getByRole("button", { name: "Menu" }).click();
  }
  return page
    .getByRole("navigation", { name: "Sections" })
    .getByRole("link", { name });
};

test.describe("Navigation", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("./");
  });

  test("the top bar links to each section", async ({ page, isMobile }) => {
    for (const [link, heading] of [
      ["Projects", "Projects"],
      ["Experience", "Experience"],
      ["Skills", "Skills"],
      ["Mindset", "Two mindsets, one goal"],
      ["How I test", "How I test at work"],
    ]) {
      await test.step(link, async () => {
        await (await sectionLink(page, link, isMobile)).click();
        await expect(
          page.getByRole("heading", { level: 2, name: heading }),
        ).toBeInViewport();
      });
    }
  });

  test("the contact button scrolls to the contact card", async ({
    page,
    isMobile,
  }) => {
    await (await sectionLink(page, "Contact", isMobile)).click();

    await expect(page).toHaveURL(/#contact$/);
    await expect(
      page.getByRole("link", { name: "Send me an email" }),
    ).toBeInViewport();
  });

  test("the top bar stays visible while scrolling", async ({
    page,
    isMobile,
  }) => {
    await page
      .getByRole("heading", { name: "Skills" })
      .scrollIntoViewIfNeeded();

    await expect(
      page.getByRole("link", { name: "Szymon Rojek, back to top" }),
    ).toBeInViewport();
    // On a phone the switch is in the menu; the menu button stays in the bar.
    await expect(
      page.getByRole("button", { name: isMobile ? "Menu" : "Dark mode" }),
    ).toBeInViewport();
  });

  test("on a phone the links sit behind a menu @mobile", async ({ page }) => {
    const menu = page.getByRole("button", { name: "Menu" });
    const projects = page
      .getByRole("navigation", { name: "Sections" })
      .getByRole("link", { name: "Projects" });

    await test.step("closed: no links, no sideways scroll", async () => {
      await expect(menu).toHaveAttribute("aria-expanded", "false");
      await expect(projects).toBeHidden();
      const overflow = await page.evaluate(
        () => document.documentElement.scrollWidth - window.innerWidth,
      );
      expect(overflow).toBeLessThanOrEqual(0);
    });

    await test.step("Contact and the switch are hidden until it opens", async () => {
      const nav = page.getByRole("navigation", { name: "Sections" });
      await expect(nav.getByRole("link", { name: "Contact" })).toBeHidden();

      await menu.click();
      await expect(nav.getByRole("link", { name: "Contact" })).toBeVisible();
      await expect(
        nav.getByRole("button", { name: "Dark mode" }),
      ).toBeVisible();
      await page.keyboard.press("Escape");
    });

    await test.step("opens, then closes after a link is chosen", async () => {
      await menu.click();
      await expect(menu).toHaveAttribute("aria-expanded", "true");
      await expect(projects).toBeVisible();

      await projects.click();
      await expect(projects).toBeHidden();
      await expect(
        page.getByRole("heading", { level: 2, name: "Projects" }),
      ).toBeInViewport();
    });

    await test.step("Escape closes it and returns focus", async () => {
      await menu.click();
      await page.keyboard.press("Escape");
      await expect(menu).toHaveAttribute("aria-expanded", "false");
      await expect(menu).toBeFocused();
    });
  });

  test("on a desktop the links sit in the bar @desktop", async ({ page }) => {
    await expect(page.getByRole("button", { name: "Menu" })).toBeHidden();
    await expect(
      page
        .getByRole("navigation", { name: "Sections" })
        .getByRole("link", { name: "Projects" }),
    ).toBeVisible();
  });

  test("a reload keeps the place, without scrolling by itself", async ({
    page,
  }) => {
    await page
      .getByRole("button", { name: "Read the case study" })
      .first()
      .click();
    await expect(
      page.getByRole("region", { name: "Projects" }).getByRole("article"),
    ).toBeInViewport();
    // Wait until the smooth scroll to the case study has settled.
    await expect
      .poll(async () => {
        const first = await page.evaluate(() => window.scrollY);
        await page.waitForTimeout(200);
        return (await page.evaluate(() => window.scrollY)) - first;
      })
      .toBe(0);
    const place = await page.evaluate(() => Math.round(window.scrollY));

    // Record the position on every frame of the reload.
    await page.addInitScript(() => {
      const frames: number[] = [];
      Object.assign(window, { scrollFrames: frames });
      const record = () => {
        frames.push(Math.round(window.scrollY));
        requestAnimationFrame(record);
      };
      requestAnimationFrame(record);
    });
    await page.reload();
    await expect(
      page.getByRole("region", { name: "Projects" }).getByRole("article"),
    ).toBeVisible();
    await page.waitForTimeout(500);

    const frames = await page.evaluate(
      () => (window as unknown as { scrollFrames: number[] }).scrollFrames,
    );
    // No animation: the page jumps from the top (before React renders) to the
    // saved place in one go. A second, small jump is allowed: when the font
    // arrives, Chrome's scroll anchoring keeps the same content in view.
    const positions = [...new Set(frames)].filter((y) => y !== 0);
    expect(positions.length).toBeLessThanOrEqual(2);
    for (const y of positions) {
      expect(Math.abs(y - place)).toBeLessThan(200);
    }
  });

  test("keyboard users can skip straight to the content", async ({ page }) => {
    const skip = page.getByRole("link", { name: "Skip to content" });
    // The page renders with JavaScript; a Tab pressed earlier has nothing to focus.
    await expect(skip).toBeAttached();

    await page.keyboard.press("Tab");
    await expect(skip).toBeFocused();
    await expect(skip).toBeInViewport();

    await page.keyboard.press("Enter");

    await expect(page.getByRole("main")).toBeFocused();
  });
});
