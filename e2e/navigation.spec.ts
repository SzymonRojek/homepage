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

// Scrolls in small steps, as a wheel or a finger does (one big step counts
// as a jump, after which the top bar stays in sight).
const scrollBy = async (page: Page, distance: number) => {
  const steps = Math.ceil(Math.abs(distance) / 100);
  for (let step = 0; step < steps; step++) {
    await page.evaluate((dy) => window.scrollBy(0, dy), distance / steps);
    await page.waitForTimeout(30);
  }
};

test.describe("Navigation", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("./");
  });

  test("the top bar links to each section", async ({ page, isMobile }) => {
    for (const [link, section] of [
      ["Projects", "Projects"],
      ["Experience", "Experience"],
      ["References", "References"],
      ["How I test", "How I test at work"],
    ]) {
      await test.step(link, async () => {
        await (await sectionLink(page, link, isMobile)).click();
        // The section itself is checked: it starts just under the top bar.
        const region = page.getByRole("region", { name: section });
        await expect(region).toBeInViewport();
        await expect
          .poll(async () => Math.round((await region.boundingBox())!.y))
          .toBeGreaterThanOrEqual(0);
        await expect
          .poll(async () => Math.round((await region.boundingBox())!.y))
          .toBeLessThan(150);
      });
    }
  });

  test("the contact button scrolls to the contact card", async ({
    page,
    isMobile,
  }) => {
    await (await sectionLink(page, "Hire me", isMobile)).click();

    await expect(page).toHaveURL(/#contact$/);
    await expect(
      page.getByRole("link", { name: "Send me an email" }),
    ).toBeInViewport();
    // At the end of the page the jump must not scroll the footer itself,
    // which would cut off the space above its heading (24px on a phone,
    // 40px on a desktop; it was 0 when the footer scrolled).
    const footer = page.getByRole("contentinfo");
    expect(await footer.evaluate((element) => element.scrollTop)).toBe(0);
    const heading = page.getByRole("heading", {
      name: "Need a tester who codes, or a developer who tests?",
    });
    expect((await heading.boundingBox())!.y).toBeGreaterThan(
      (await footer.boundingBox())!.y + 20,
    );
  });

  test("the top bar is an outline at the top, lifts on scroll, hides past the hero and returns on scroll up", async ({
    page,
  }) => {
    // The pill is the wordmark's parent.
    const pill = page
      .getByRole("link", { name: /^Szymon Rojek/ })
      .locator("..");
    const gap = page.viewportSize()!.width <= 767 ? 8 : 12;

    await test.step("at the top: a rounded outline over the hero", async () => {
      expect(
        parseFloat(
          await pill.evaluate((el) => getComputedStyle(el).borderTopLeftRadius),
        ),
      ).toBeGreaterThanOrEqual(24);
      expect(Math.round((await pill.boundingBox())!.y)).toBe(gap);
      expect((await page.getByRole("banner").boundingBox())?.y).toBe(0);
      await expect(pill).toHaveCSS("background-color", "rgba(0, 0, 0, 0)");
      await expect(pill).toHaveCSS("box-shadow", "none");
    });

    await test.step("scrolled within the hero: raised, with a shadow", async () => {
      await scrollBy(page, 200);
      await expect(pill).not.toHaveCSS("background-color", "rgba(0, 0, 0, 0)");
      await expect(pill).not.toHaveCSS("box-shadow", "none");
      await expect(pill).toBeInViewport();
    });

    await test.step("scrolling down past the hero: out of sight", async () => {
      await scrollBy(page, 1500);
      await expect(pill).not.toBeInViewport();
    });

    await test.step("scrolling up: back, raised", async () => {
      await scrollBy(page, -300);
      await expect(pill).toBeInViewport();
      await expect
        .poll(async () => Math.round((await pill.boundingBox())!.y))
        .toBe(gap);
      await expect(pill).not.toHaveCSS("box-shadow", "none");
    });
  });

  test("the top bar stays in sight after each section link, for the next one @desktop", async ({
    page,
  }) => {
    const pill = page
      .getByRole("link", { name: /^Szymon Rojek/ })
      .locator("..");
    const nav = page.getByRole("navigation", { name: "Sections" });

    // The links scroll smoothly, in steps that would otherwise read as
    // scrolling down and hide the bar.
    for (const name of ["Projects", "Experience", "References"]) {
      await nav.getByRole("link", { name }).click();
      await expect(page).toHaveURL(
        new RegExp(
          `#${name === "References" ? "recommendations" : name.toLowerCase()}$`,
        ),
      );
      await page.waitForTimeout(800);
      await expect(pill).toBeInViewport();
    }
    // Once the link's scroll has settled, an ordinary scroll down still
    // hides it.
    await expect
      .poll(async () => {
        const before = await page.evaluate(() => window.scrollY);
        await page.waitForTimeout(500);
        return (await page.evaluate(() => window.scrollY)) - before;
      })
      .toBe(0);
    for (let step = 0; step < 6; step++) {
      await page.mouse.wheel(0, 100);
      await page.waitForTimeout(40);
    }
    await expect(pill).not.toBeInViewport();
  });

  test("after a jump down the page the top bar is solid at once, never mid-fade @desktop", async ({
    page,
  }) => {
    const pill = page
      .getByRole("link", { name: /^Szymon Rojek/ })
      .locator("..");

    // Watch every frame from the click: the first colour after the
    // see-through outline must already be the final green. A fade would show
    // a paler green first, leaving the cream links on the light page.
    const firstChange = pill.evaluate(
      (el) =>
        new Promise<string>((resolve) => {
          const start = getComputedStyle(el).backgroundColor;
          const frame = () => {
            const now = getComputedStyle(el).backgroundColor;
            if (now !== start) resolve(now);
            else requestAnimationFrame(frame);
          };
          requestAnimationFrame(frame);
        }),
    );
    await page
      .getByRole("navigation", { name: "Sections" })
      .getByRole("link", { name: "Experience" })
      .click();
    expect(await firstChange).toBe("rgba(18, 60, 55, 0.94)");
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

    await test.step("Hire me is hidden until it opens", async () => {
      const nav = page.getByRole("navigation", { name: "Sections" });
      await expect(nav.getByRole("link", { name: "Hire me" })).toBeHidden();

      await menu.click();
      await expect(nav.getByRole("link", { name: "Hire me" })).toBeVisible();
      // The theme switch is in the footer, not the menu.
      await expect(nav.getByRole("button", { name: "Dark mode" })).toHaveCount(
        0,
      );
      await page.keyboard.press("Escape");
    });

    await test.step("opens, then closes after a link is chosen", async () => {
      await menu.click();
      await expect(menu).toHaveAttribute("aria-expanded", "true");
      await expect(projects).toBeVisible();

      await projects.click();
      await expect(projects).toBeHidden();
      // The section's small heading, then its big line under it.
      await expect(
        page.getByText("Built in my own time.", { exact: true }),
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
    await page.getByRole("button", { name: "Case study" }).first().click();
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
    // saved place, never through the page in between. Small moves near it are
    // allowed: as each font arrives (two families, five files), Chrome's
    // scroll anchoring shifts the position so the same content stays in view,
    // sometimes in the same frame as the jump.
    const positions = [...new Set(frames)].filter((y) => y !== 0);
    const seen = `saved place ${place}, positions ${positions.join(", ")}`;
    expect(positions.length, seen).toBeGreaterThan(0);
    for (const y of positions) {
      expect(Math.abs(y - place), seen).toBeLessThan(200);
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
