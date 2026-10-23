import type { Page } from "@playwright/test";
import { test, expect } from "./fixtures";

// Up to tabletVerticalMax (991px) the section links sit behind the menu
// button; an iPad on its side is wider and has them in the bar.
const sectionLink = async (page: Page, name: string) => {
  if (page.viewportSize()!.width <= 991) {
    await page.getByRole("button", { name: "Menu" }).click();
  }
  return page
    .getByRole("navigation", { name: "Sections" })
    .getByRole("link", { name });
};

// Scrolls in small steps, as a wheel or a finger does (one big step counts
// as a jump, after which the top bar stays in sight). Each step is instant,
// as a wheel's is: the page's smooth scrolling applies only to scrolls from
// script, and in Safari the steps were still gliding when the test went on.
const scrollBy = async (page: Page, distance: number) => {
  const steps = Math.ceil(Math.abs(distance) / 100);
  for (let step = 0; step < steps; step++) {
    await page.evaluate(
      (dy) => window.scrollBy({ top: dy, behavior: "instant" }),
      distance / steps,
    );
    await page.waitForTimeout(30);
  }
};

test.describe("Navigation", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("./");
  });

  test("the top bar links to each section", async ({ page }) => {
    for (const [link, section] of [
      ["Projects", "Projects"],
      ["Experience", "Experience"],
      ["References", "References"],
      ["How I test", "How I test"],
    ]) {
      await test.step(link, async () => {
        await (await sectionLink(page, link)).click();
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

  test("the contact button scrolls to the contact card", async ({ page }) => {
    await (await sectionLink(page, "Contact")).click();

    await expect(page).toHaveURL(/#contact$/);
    await expect(
      page.getByRole("button", {
        name: "Copy my email address, sz.rojek@proton.me",
      }),
    ).toBeInViewport();
  });

  test("an old #contact link lands above the footer's heading", async ({
    page,
  }) => {
    // Nothing on the page links to #contact any more, but a shared link
    // still can. The jump must not scroll the footer itself, which would cut
    // off the space above its heading (24px on a phone, 40px on a desktop;
    // it was 0 when the footer scrolled).
    await page.goto("./#contact");

    const footer = page.getByRole("contentinfo");
    await expect(footer).toBeVisible();
    expect(await footer.evaluate((element) => element.scrollTop)).toBe(0);
    const heading = page.getByRole("heading", {
      name: "Let’s ship something that doesn’t break.",
    });
    expect((await heading.boundingBox())!.y).toBeGreaterThan(
      (await footer.boundingBox())!.y + 20,
    );
  });

  test("the top bar shows nothing at the top, goes with scrolling down and returns raised on scroll up", async ({
    page,
  }) => {
    // The pill is the wordmark's parent.
    const pill = page
      .getByRole("link", { name: /^Szymon Rojek/ })
      .locator("..");
    const gap = page.viewportSize()!.width <= 767 ? 8 : 12;

    await test.step("at the top: nothing of itself over the hero", async () => {
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

    await test.step("scrolling down, still over the hero: out of sight, never filled", async () => {
      await scrollBy(page, 200);
      await expect(pill).not.toBeInViewport();
      // It left bare, as it was.
      await expect(pill).toHaveCSS("background-color", "rgba(0, 0, 0, 0)");
    });

    await test.step("further down: still out of sight", async () => {
      await scrollBy(page, 1500);
      await expect(pill).not.toBeInViewport();
    });

    await test.step("a slight move up: still out of sight", async () => {
      await scrollBy(page, -10);
      // Longer than the bar's slide, so it would have come back by now.
      await page.waitForTimeout(500);
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

    await test.step("nearing the top: the fill goes before the page stops", async () => {
      await page.evaluate(() =>
        window.scrollTo({ top: 60, behavior: "instant" }),
      );

      await expect(pill).toHaveCSS("background-color", "rgba(0, 0, 0, 0)");
      await expect(pill).toHaveCSS("box-shadow", "none");
      // Still short of the top: the bar gave up its green on the way, not
      // at the moment the scroll ended.
      expect(await page.evaluate(() => window.scrollY)).toBeGreaterThan(0);
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
    // bare bar must already be the final green. A fade would show
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

  test("coming back over the hero, the top bar fills smoothly @desktop", async ({
    page,
  }) => {
    const pill = page
      .getByRole("link", { name: /^Szymon Rojek/ })
      .locator("..");

    // Down a little, then back up, still over the hero.
    await scrollBy(page, 300);
    await scrollBy(page, -100);
    // Raised, and its fill fades in (a jump fills it at once, see above).
    await expect(pill).toHaveCSS("background-color", "rgba(18, 60, 55, 0.94)");
    expect(
      await pill.evaluate((el) => getComputedStyle(el).transitionProperty),
    ).toContain("background-color");
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

    await test.step("Contact is hidden until it opens", async () => {
      const nav = page.getByRole("navigation", { name: "Sections" });
      await expect(nav.getByRole("link", { name: "Contact" })).toBeHidden();

      await menu.click();
      await expect(nav.getByRole("link", { name: "Contact" })).toBeVisible();
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

  test("a link under the pointer only brightens, with no background or line @desktop", async ({
    page,
  }) => {
    const link = page
      .getByRole("navigation", { name: "Sections" })
      .getByRole("link", { name: "Projects" });
    const look = () =>
      link.evaluate((element) => {
        const style = getComputedStyle(element);
        return {
          color: style.color,
          background: style.backgroundColor,
          line: style.textDecorationLine,
        };
      });

    await link.hover();
    // The brand's cream (#FBF4E6), once the fade ends.
    await expect
      .poll(async () => (await look()).color)
      .toBe("rgb(251, 244, 230)");
    // A soft pill behind the link and a yellow line under it were dropped.
    expect(await look()).toMatchObject({
      background: "rgba(0, 0, 0, 0)",
      line: "none",
    });
  });

  test("the menu button brightens under the pointer like the links @mobile", async ({
    page,
  }) => {
    const menu = page.getByRole("button", { name: "Menu" });
    const colour = () => menu.evaluate((el) => getComputedStyle(el).color);

    // The links' muted cream (#B9CEC7), then their cream (#FBF4E6), not yellow.
    expect(await colour()).toBe("rgb(185, 206, 199)");
    await menu.hover();
    await expect.poll(colour).toBe("rgb(251, 244, 230)");
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
    // No animation: the page jumps from the top (before the first paint) to
    // the saved place, never through the page in between. Small moves near it are
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

  test("a reload below the top never shows the top bar, until a scroll up (#25)", async ({
    page,
  }) => {
    const pill = page
      .getByRole("link", { name: /^Szymon Rojek/ })
      .locator("..");
    await scrollBy(page, 1500);
    await expect(pill).not.toBeInViewport();
    const place = await page.evaluate(() => Math.round(window.scrollY));

    // Record, on every frame of the reload, whether the visitor can see the
    // pill: the page is shown and the pill is on screen.
    await page.addInitScript(() => {
      const frames: { y: number; seen: boolean }[] = [];
      Object.assign(window, { barFrames: frames });
      const record = () => {
        const wordmark = document.querySelector('a[href="#top"]');
        const pill = wordmark?.parentElement?.getBoundingClientRect();
        const shown =
          document.body !== null &&
          getComputedStyle(document.body).visibility === "visible";
        frames.push({
          y: Math.round(window.scrollY),
          seen: shown && pill !== undefined && pill.bottom > 1,
        });
        requestAnimationFrame(record);
      };
      requestAnimationFrame(record);
    });
    await page.reload();
    // Within a few lines: scroll anchoring may move it as the fonts arrive.
    await expect
      .poll(() => page.evaluate(() => Math.round(window.scrollY)))
      .toBeGreaterThan(place - 200);
    await page.waitForTimeout(500);

    const frames = await page.evaluate(
      () =>
        (window as unknown as { barFrames: { y: number; seen: boolean }[] })
          .barFrames,
    );
    expect(frames.length).toBeGreaterThan(0);
    expect(
      frames.filter(({ seen }) => seen),
      "frames with the top bar in sight",
    ).toEqual([]);

    await scrollBy(page, -300);
    await expect(pill).toBeInViewport();
  });

  test("a reload at the top stays at the top, even when the browser skips pagehide (#26)", async ({
    page,
  }) => {
    // A reload part way down leaves that place saved.
    await scrollBy(page, 1500);
    await page.reload();
    await expect
      .poll(() => page.evaluate(() => Math.round(window.scrollY)))
      .toBeGreaterThan(1000);

    // From here nothing this page saves on pagehide is kept, as on an iPhone
    // that skips it (window.event is the event being handled).
    await page.evaluate(() => {
      const setItem = Storage.prototype.setItem;
      Storage.prototype.setItem = function (key, value) {
        if (window.event?.type !== "pagehide") {
          setItem.call(this, key, value);
        }
      };
    });
    await scrollBy(page, -2000);
    await expect.poll(() => page.evaluate(() => window.scrollY)).toBe(0);
    await page.waitForTimeout(300);
    await page.reload();
    await page.waitForTimeout(800);

    expect(await page.evaluate(() => window.scrollY)).toBe(0);
    await expect(
      page.getByRole("link", { name: /^Szymon Rojek/ }).locator(".."),
    ).toBeInViewport();
  });

  test("keyboard users can skip straight to the content", async ({
    page,
    browserName,
  }) => {
    const skip = page.getByRole("link", { name: "Skip to content" });
    // The page renders with JavaScript; a Tab pressed earlier has nothing to focus.
    await expect(skip).toBeAttached();

    // Safari's Tab skips links unless "Press Tab to highlight each item" is
    // on in its settings; Option+Tab reaches them.
    await page.keyboard.press(browserName === "webkit" ? "Alt+Tab" : "Tab");
    await expect(skip).toBeFocused();
    await expect(skip).toBeInViewport();

    await page.keyboard.press("Enter");

    await expect(page.getByRole("main")).toBeFocused();
  });
});

test.describe("Navigation in the dark theme", () => {
  test.use({ colorScheme: "dark" });

  test("the raised top bar stands out over the How I test band", async ({
    page,
  }) => {
    await page.goto("./");
    const pill = page
      .getByRole("link", { name: /^Szymon Rojek/ })
      .locator("..");
    // Down, then a little back up: the bar returns, raised.
    await scrollBy(page, 800);
    await scrollBy(page, -150);

    // Both are greens: the bar a step lighter (#1C4D46) than the band
    // (#123C37), which is the deep green in the dark theme.
    await expect(pill).toHaveCSS("background-color", "rgba(28, 77, 70, 0.94)");
    await expect(page.getByRole("region", { name: "How I test" })).toHaveCSS(
      "background-color",
      "rgb(18, 60, 55)",
    );
  });
});

// Windows high contrast (and any other forced-colours mode) replaces the
// page's colours with the system palette: an author's colour is overridden,
// so the three lines drawn with currentColor went the colour of the pill
// behind them and the menu button looked empty.
test.describe("Navigation in forced colours", () => {
  test.use({ forcedColors: "active" });

  test("the menu button's lines stay visible @mobile", async ({ page }) => {
    await page.goto("./");
    const menu = page.getByRole("button", { name: "Menu" });

    const colours = await menu.evaluate((button) => {
      const line = button.querySelector("span > span");

      return {
        line: getComputedStyle(line!).backgroundColor,
        text: getComputedStyle(button).color,
        behind: getComputedStyle(button).backgroundColor,
      };
    });

    // The system's own text colour, whichever palette the visitor has, and
    // never the colour it sits on.
    expect(colours.line).toBe(colours.text);
    expect(colours.line).not.toBe(colours.behind);
  });
});
