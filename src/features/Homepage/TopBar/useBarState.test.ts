import { describe, expect, it } from "vitest";
import { nextBarState } from "./useBarState";

// The hero ends 800px down the page, in a window 900px tall.
const heroBottom = 800;
const viewport = 900;

describe("nextBarState", () => {
  it("is only an outline while the page is at the top", () => {
    expect(nextBarState("raised", 0, 40, heroBottom, viewport)).toBe("top");
  });

  it("lifts off the page as soon as it scrolls, over the hero too", () => {
    expect(nextBarState("top", 20, 0, heroBottom, viewport)).toBe("raised");
    expect(nextBarState("top", 600, 590, heroBottom, viewport)).toBe("raised");
  });

  it("slides away while scrolling down past the hero", () => {
    expect(nextBarState("raised", 1000, 900, heroBottom, viewport)).toBe(
      "hidden",
    );
  });

  it("comes back as soon as the page scrolls up", () => {
    expect(nextBarState("hidden", 1500, 1600, heroBottom, viewport)).toBe(
      "raised",
    );
  });

  it("ignores a tremble of a few pixels", () => {
    expect(nextBarState("hidden", 1502, 1500, heroBottom, viewport)).toBe(
      "hidden",
    );
    expect(nextBarState("raised", 1498, 1500, heroBottom, viewport)).toBe(
      "raised",
    );
  });

  it("stays in sight after a jump to a section, for the next link", () => {
    expect(nextBarState("raised", 3000, 0, heroBottom, viewport)).toBe(
      "raised",
    );
    expect(nextBarState("hidden", 4000, 2000, heroBottom, viewport)).toBe(
      "raised",
    );
  });

  it("shows raised after a reload halfway down the page", () => {
    expect(nextBarState("top", 2000, 2000, heroBottom, viewport)).toBe(
      "raised",
    );
  });
});
