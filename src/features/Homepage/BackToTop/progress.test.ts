import { describe, expect, it } from "vitest";
import {
  floorGap,
  floorHeight,
  restsAboveFooter,
  scrollProgress,
} from "./progress";

describe("scrollProgress", () => {
  it("runs from 0 at the top to 1 at the very end of the page", () => {
    // A 3000px page in a 1000px window has 2000px to scroll.
    expect(scrollProgress(0, 3000, 1000)).toBe(0);
    expect(scrollProgress(500, 3000, 1000)).toBe(0.25);
    expect(scrollProgress(2000, 3000, 1000)).toBe(1);
  });

  it("stays within 0 and 1 when the browser overscrolls", () => {
    // A phone's rubber band reports positions past both ends.
    expect(scrollProgress(-80, 3000, 1000)).toBe(0);
    expect(scrollProgress(2080, 3000, 1000)).toBe(1);
  });

  it("is 0 for a page with nowhere to scroll", () => {
    expect(scrollProgress(0, 800, 1000)).toBe(0);
    expect(scrollProgress(0, 1000, 1000)).toBe(0);
  });
});

describe("floorHeight", () => {
  it("is nothing while the floor is still under the window", () => {
    expect(floorHeight(1200, 1000)).toBe(0);
    expect(floorHeight(1000, 1000)).toBe(0);
  });

  it("is how much of the window lies below the floor's top", () => {
    expect(floorHeight(700, 1000)).toBe(300);
  });
});

describe("restsAboveFooter", () => {
  // The button, its gap and the room kept for the top bar.
  const button = 56;
  const needed = button + floorGap + 96;

  it("rests above the whole footer where the window can show both", () => {
    expect(restsAboveFooter(400, button, 400 + needed)).toBe(true);
    expect(restsAboveFooter(400, button, 1200)).toBe(true);
  });

  it("falls back to the footer's last line in a window too short", () => {
    expect(restsAboveFooter(400, button, 400 + needed - 1)).toBe(false);
    expect(restsAboveFooter(600, button, 500)).toBe(false);
  });

  it("counts the button's own height, which changes with the screen", () => {
    // The same footer and window: a phone's smaller button still fits.
    expect(restsAboveFooter(400, 56, 400 + 44 + floorGap + 96)).toBe(false);
    expect(restsAboveFooter(400, 44, 400 + 44 + floorGap + 96)).toBe(true);
  });
});
