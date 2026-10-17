import type { Locator, Page } from "@playwright/test";
import { test, expect } from "./fixtures";

const box = async (locator: Locator) => {
  const found = await locator.boundingBox();
  if (!found) throw new Error("Element has no box");
  return found;
};

// The top bar, the hero and the sections share one content column, so their
// left edges line up at the expected gutter and nothing scrolls sideways.
const expectOneEdge = async (page: Page, gutter: number) => {
  const edges = {
    // The floating pill around the wordmark starts on the edge.
    topBar: (
      await box(page.getByRole("link", { name: /^Szymon Rojek/ }).locator(".."))
    ).x,
    hero: (await box(page.getByRole("heading", { level: 1 }))).x,
    footer: (
      await box(
        page.getByRole("heading", {
          name: "Let’s ship something that doesn’t break.",
        }),
      )
    ).x,
    section: (
      await box(
        page.getByText("In the words of the people I’ve worked with", {
          exact: true,
        }),
      )
    ).x,
  };
  for (const [part, x] of Object.entries(edges)) {
    expect(Math.round(x), part).toBe(gutter);
  }
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth - window.innerWidth,
    ),
  ).toBe(0);
};

test.describe("Layout", () => {
  for (const { width, gutter, why } of [
    { width: 1600, gutter: 220, why: "the content stops at 1160px, centred" },
    { width: 1280, gutter: 60, why: "48px gutters around the centred column" },
    { width: 1024, gutter: 32, why: "32px gutters on a tablet" },
  ]) {
    test(`at ${width}px everything starts on one edge: ${why} @desktop`, async ({
      page,
    }) => {
      await page.setViewportSize({ width, height: 900 });
      await page.goto("./");

      await expectOneEdge(page, gutter);
      // The photo ends on the right edge of the same column.
      const photo = await box(page.getByRole("img", { name: "Szymon Rojek" }));
      expect(Math.round(width - (photo.x + photo.width))).toBe(gutter);
    });
  }

  test("on a phone everything starts 16px from the edge @mobile", async ({
    page,
  }) => {
    await page.goto("./");

    await expectOneEdge(page, 16);
    // The text starts on the left edge and the photo ends on the right one.
    const width = page.viewportSize()!.width;
    const photo = await box(page.getByRole("img", { name: "Szymon Rojek" }));
    expect(Math.round(width - (photo.x + photo.width))).toBe(16);
  });

  test("the headline and the photo only shrink as the window narrows @desktop", async ({
    page,
  }) => {
    await page.goto("./");
    const headline = page.getByRole("heading", { level: 1 });
    const photo = page.getByRole("img", { name: "Szymon Rojek" });

    // Either side of each breakpoint, where the sizes used to jump: the
    // headline grew back to 76px when the photo moved under it at 767px.
    let previous = { font: Infinity, photo: Infinity };
    for (const width of [1400, 1200, 1199, 992, 991, 768, 767, 600, 360]) {
      await page.setViewportSize({ width, height: 900 });
      const font = await headline.evaluate((element) =>
        parseFloat(getComputedStyle(element).fontSize),
      );
      const photoWidth = (await box(photo)).width;

      expect(font, `headline at ${width}px`).toBeLessThanOrEqual(previous.font);
      expect(photoWidth, `photo at ${width}px`).toBeLessThanOrEqual(
        previous.photo,
      );
      // Still one line: less than two lines' height.
      expect((await box(headline)).height, `lines at ${width}px`).toBeLessThan(
        font * 2,
      );
      previous = { font, photo: photoWidth };
    }
  });

  test("the rings and the bug stay next to the content however wide the window @desktop", async ({
    page,
  }) => {
    await page.goto("./");

    // Each decoration's distance from the content edge beside it: the hero's
    // ring from the photo's right edge, the footer's ring from its heading's
    // left edge, the bug from the How I test steps' right edge.
    const offsets = async () =>
      page.evaluate(() => {
        const rect = (element: Element | null) => {
          if (!element) throw new Error("Element not found");
          return element.getBoundingClientRect();
        };
        const hero = document.querySelector("#top > div");
        const footer = document.querySelector("footer");
        const howITest = document.querySelector(
          '[aria-labelledby="how-i-test"]',
        );
        return {
          heroRing:
            rect(hero).right -
            parseFloat(getComputedStyle(hero!, "::after").right) -
            rect(document.querySelector('img[alt="Szymon Rojek"]')).right,
          footerRing:
            rect(footer).left +
            parseFloat(getComputedStyle(footer!, "::before").left) -
            rect(footer!.querySelector("h2")).left,
          bug:
            rect(howITest!.querySelector(":scope > svg")).right -
            rect(howITest!.querySelector("ol")).right,
        };
      });

    // From the column's full width (1256px) up the content stops growing,
    // and the decorations must stop moving with it.
    await page.setViewportSize({ width: 1280, height: 900 });
    const atColumnWidth = await offsets();
    for (const width of [1600, 1920, 2560]) {
      await page.setViewportSize({ width, height: 900 });
      const wide = await offsets();
      for (const part of ["heroRing", "footerRing", "bug"] as const) {
        expect(
          Math.abs(wide[part] - atColumnWidth[part]),
          `${part} at ${width}px`,
        ).toBeLessThan(1);
      }
    }
  });

  test("the Email me button sits on the right below desktops, under the note on desktops @desktop", async ({
    page,
  }) => {
    await page.goto("./");
    const button = page.getByRole("link", { name: "Send me an email" });

    for (const { width, gutter } of [
      { width: 1024, gutter: 32 },
      { width: 800, gutter: 32 },
    ]) {
      await page.setViewportSize({ width, height: 900 });
      const found = await box(button);
      expect(Math.round(width - (found.x + found.width)), `${width}px`).toBe(
        gutter,
      );
    }

    // On a desktop it starts under the note, on its left edge.
    await page.setViewportSize({ width: 1280, height: 900 });
    const note = await box(page.getByText(/^Communication matters most to me/));
    expect(Math.round((await box(button)).x)).toBe(Math.round(note.x));
  });

  test("on a phone the Email me button sits on the right @mobile", async ({
    page,
  }) => {
    await page.goto("./");
    const width = page.viewportSize()!.width;
    const found = await box(page.getByRole("link", { name: "Send me an email" }));
    expect(Math.round(width - (found.x + found.width))).toBe(16);
  });
});
