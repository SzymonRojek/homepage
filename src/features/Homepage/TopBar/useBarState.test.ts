import { act, fireEvent, renderHook } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { fadesOverHero, nextBarState, useBarState } from "./useBarState";

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

  it("shows raised on a page that opens part way down, at a section", () => {
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

describe("useBarState", () => {
  const scrollTo = (y: number) =>
    act(() => {
      Object.defineProperty(window, "scrollY", {
        value: y,
        configurable: true,
      });
      fireEvent.scroll(window);
    });

  afterEach(() => {
    delete document.documentElement.dataset.restoringScroll;
    Object.defineProperty(window, "scrollY", { value: 0, configurable: true });
  });

  it("is only an outline on a page that opens at the top", () => {
    const { result } = renderHook(() => useBarState());

    expect(result.current.state).toBe("top");
  });

  it("stays hidden while a reload goes back down the page (#25)", () => {
    // index.html marks <html> and jumps before React runs.
    document.documentElement.dataset.restoringScroll = "";
    Object.defineProperty(window, "scrollY", {
      value: 2000,
      configurable: true,
    });

    const { result } = renderHook(() => useBarState());
    expect(result.current.state).toBe("hidden");

    // The fonts arrive and the page moves a little, up or down.
    scrollTo(1960);
    expect(result.current.state).toBe("hidden");
    scrollTo(2000);
    expect(result.current.state).toBe("hidden");
  });

  it("comes back once the visitor scrolls up after the reload", () => {
    document.documentElement.dataset.restoringScroll = "";
    Object.defineProperty(window, "scrollY", {
      value: 2000,
      configurable: true,
    });
    const { result } = renderHook(() => useBarState());

    delete document.documentElement.dataset.restoringScroll;
    scrollTo(1900);

    expect(result.current.state).toBe("raised");
  });
});
