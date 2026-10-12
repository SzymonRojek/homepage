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
    topBar: (await box(page.getByRole("link", { name: /^Szymon Rojek/ }))).x,
    hero: (
      await box(page.getByText("I find what breaks before your users do."))
    ).x,
    section: (
      await box(
        page.getByRole("heading", { level: 2, name: "Two mindsets, one goal" }),
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
  });
});
