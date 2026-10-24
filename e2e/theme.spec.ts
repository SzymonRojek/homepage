import { test, expect } from "./fixtures";

// The switch is in the footer's last line; a click scrolls to it.
const themeSwitch = (page: import("@playwright/test").Page) =>
  page.getByRole("contentinfo").getByRole("button", { name: "Dark mode" });

const clickThemeSwitch = async (page: import("@playwright/test").Page) => {
  await themeSwitch(page).click();
};

test.describe("with a light OS theme", () => {
  test.use({ colorScheme: "light" });

  test("starts light, toggles and remembers the choice @smoke", async ({
    page,
  }) => {
    const lightBackground = await test.step("starts light", async () => {
      await page.goto("./");
      await expect(themeSwitch(page)).toHaveAttribute("aria-pressed", "false");
      return page
        .locator("body")
        .evaluate((body) => getComputedStyle(body).backgroundColor);
    });

    await test.step("switches to dark", async () => {
      await clickThemeSwitch(page);

      await expect(themeSwitch(page)).toHaveAttribute("aria-pressed", "true");
      await expect(page.locator("body")).not.toHaveCSS(
        "background-color",
        lightBackground,
      );
    });

    await test.step("keeps dark after a reload", async () => {
      await page.reload();

      await expect(themeSwitch(page)).toHaveAttribute("aria-pressed", "true");
    });
  });

  test("every section between the hero and the footer changes its background", async ({
    page,
  }) => {
    await page.goto("./");
    const backgrounds = () =>
      page.evaluate(() =>
        Array.from(
          document.querySelectorAll("main section[aria-labelledby]"),
          (section) => {
            const heading = document.getElementById(
              section.getAttribute("aria-labelledby")!,
            );
            // The colour behind the section: its own, else the page's.
            const own = getComputedStyle(section).backgroundColor;
            return {
              name: heading?.tagName === "H2" ? heading.textContent : null,
              color:
                own === "rgba(0, 0, 0, 0)"
                  ? getComputedStyle(document.body).backgroundColor
                  : own,
            };
          },
        ).filter(({ name }) => name),
      );

    const light = await backgrounds();
    await clickThemeSwitch(page);
    await expect(themeSwitch(page)).toHaveAttribute("aria-pressed", "true");
    // Read once the page has finished turning dark, not mid-change.
    await expect(page.locator("body")).toHaveCSS(
      "background-color",
      "rgb(11, 21, 19)",
    );
    const dark = await backgrounds();

    // How I test included: it was the deep green in both themes once.
    expect(light.map(({ name }) => name)).toContain("How I test");
    // The AI band too: the deep green in the light theme, a step lighter in
    // the dark one, so the sixth section still alternates with its
    // neighbours.
    expect(light.map(({ name }) => name)).toContain("How I use AI");
    light.forEach(({ name, color }, index) => {
      expect(dark[index].color, `${name}`).not.toBe(color);
    });
  });
});

test.describe("with a dark OS theme", () => {
  test.use({ colorScheme: "dark" });

  test("starts dark when nothing is saved", async ({ page }) => {
    await page.goto("./");

    await expect(themeSwitch(page)).toHaveAttribute("aria-pressed", "true");
  });

  test("a saved light choice wins over the OS theme", async ({ page }) => {
    await page.addInitScript(() => localStorage.setItem("dark", "false"));
    await page.goto("./");

    await expect(themeSwitch(page)).toHaveAttribute("aria-pressed", "false");
  });
});

test.describe("on reload with a saved dark choice", () => {
  test.use({ colorScheme: "light" });

  test("never paints a light background", async ({ page }) => {
    // Record the visible page background on every frame from the first paint.
    await page.addInitScript(() => {
      localStorage.setItem("dark", "true");
      const frames: string[] = [];
      const transparent = "rgba(0, 0, 0, 0)";
      const record = () => {
        const html = document.documentElement;
        const body = document.body;
        const bodyColor = body && getComputedStyle(body).backgroundColor;
        const htmlColor = html && getComputedStyle(html).backgroundColor;
        frames.push(
          bodyColor && bodyColor !== transparent
            ? bodyColor
            : htmlColor && htmlColor !== transparent
              ? htmlColor
              : "rgb(255, 255, 255)",
        );
        requestAnimationFrame(record);
      };
      requestAnimationFrame(record);
      Object.assign(window, { backgroundFrames: frames });
    });
    // Slow the app script down so the time before React renders is visible.
    await page.route("**/assets/*.js", async (route) => {
      await new Promise((resolve) => setTimeout(resolve, 500));
      await route.continue();
    });

    await page.goto("./");
    await expect(themeSwitch(page)).toHaveAttribute("aria-pressed", "true");
    // eslint-disable-next-line playwright/no-wait-for-timeout -- collects the paint frames over a window, to prove no light flash
    await page.waitForTimeout(500);

    const frames = await page.evaluate(
      () =>
        (window as unknown as { backgroundFrames: string[] }).backgroundFrames,
    );
    const lightFrames = frames.filter((color) => {
      const [red, green, blue] = (color.match(/\d+/g) ?? []).map(Number);
      return red + green + blue > 3 * 128;
    });

    expect(frames.length).toBeGreaterThan(0);
    expect(lightFrames).toEqual([]);
  });
});

test.describe("when the OS theme changes while the page is open", () => {
  test.use({ colorScheme: "light" });

  test("follows it until the visitor chooses", async ({ page }) => {
    await page.goto("./");
    await expect(themeSwitch(page)).toHaveAttribute("aria-pressed", "false");

    await page.emulateMedia({ colorScheme: "dark" });
    await expect(themeSwitch(page)).toHaveAttribute("aria-pressed", "true");

    await page.emulateMedia({ colorScheme: "light" });
    await expect(themeSwitch(page)).toHaveAttribute("aria-pressed", "false");

    const saved = await page.evaluate(() => localStorage.getItem("dark"));
    expect(saved).toBeNull();
  });

  test("is followed again once the visitor switches back to it", async ({
    page,
  }) => {
    await page.goto("./");
    await clickThemeSwitch(page);
    await expect(themeSwitch(page)).toHaveAttribute("aria-pressed", "true");
    // Back to the OS theme (light): the choice is dropped, not pinned.
    await clickThemeSwitch(page);
    await expect(themeSwitch(page)).toHaveAttribute("aria-pressed", "false");
    expect(await page.evaluate(() => localStorage.getItem("dark"))).toBeNull();

    await page.emulateMedia({ colorScheme: "dark" });
    await expect(themeSwitch(page)).toHaveAttribute("aria-pressed", "true");
  });

  test("is ignored after the visitor chooses", async ({ page }) => {
    await page.goto("./");
    await clickThemeSwitch(page);
    await expect(themeSwitch(page)).toHaveAttribute("aria-pressed", "true");

    await page.emulateMedia({ colorScheme: "light" });

    await expect(themeSwitch(page)).toHaveAttribute("aria-pressed", "true");
  });
});
