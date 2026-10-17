import { describe, expect, it } from "vitest";
import { fadesOverHero, nextBarState } from "./useBarState";

// A window 900px tall.
const viewport = 900;

describe("nextBarState", () => {
  it("is only an outline while the page is at the top", () => {
    expect(nextBarState("raised", 0, 40, viewport)).toBe("top");
  });

  it("slides away from the very first step down, over the hero too", () => {
    expect(nextBarState("top", 20, 0, viewport)).toBe("hidden");
    expect(nextBarState("raised", 300, 290, viewport)).toBe("hidden");
    expect(nextBarState("raised", 1000, 900, viewport)).toBe("hidden");
  });

  it("never lifts off on the way down: a step too small to count keeps the outline", () => {
    expect(nextBarState("top", 3, 0, viewport)).toBe("top");
  });

  it("comes back, raised, as soon as the page scrolls up", () => {
    expect(nextBarState("hidden", 1500, 1600, viewport)).toBe("raised");
    expect(nextBarState("hidden", 200, 300, viewport)).toBe("raised");
  });

  it("ignores a tremble of a few pixels", () => {
    expect(nextBarState("hidden", 1502, 1500, viewport)).toBe("hidden");
    expect(nextBarState("raised", 1498, 1500, viewport)).toBe("raised");
  });

  it("stays in sight after a jump to a section, for the next link", () => {
    expect(nextBarState("raised", 3000, 0, viewport)).toBe("raised");
    expect(nextBarState("hidden", 4000, 2000, viewport)).toBe("raised");
  });

  it("shows raised after a reload halfway down the page", () => {
    expect(nextBarState("top", 2000, 2000, viewport)).toBe("raised");
  });
});

describe("fadesOverHero", () => {
  it("lets the bar fade while it is still over the hero", () => {
    expect(fadesOverHero(10, 600, 80)).toBe(true);
    expect(fadesOverHero(519, 600, 80)).toBe(true);
  });

  it("fills it at once once it reaches the light sections, as after a jump", () => {
    expect(fadesOverHero(520, 600, 80)).toBe(false);
    expect(fadesOverHero(2400, 600, 80)).toBe(false);
  });
});
