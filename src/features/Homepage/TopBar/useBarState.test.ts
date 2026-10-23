import { act, fireEvent, renderHook } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import {
  clearNear,
  fadesOverHero,
  nextBarState,
  revealAfter,
  useBarState,
} from "./useBarState";

// A window 900px tall.
const viewport = 900;

describe("nextBarState", () => {
  it("stays bare while the page is at the top", () => {
    expect(nextBarState("raised", 0, 40, viewport)).toBe("top");
  });

  it("slides away from the very first step down, over the hero too", () => {
    expect(nextBarState("top", 20, 0, viewport)).toBe("hidden");
    expect(nextBarState("raised", 300, 290, viewport)).toBe("hidden");
    expect(nextBarState("raised", 1000, 900, viewport)).toBe("hidden");
  });

  it("never lifts off on the way down: a step too small to count keeps it bare", () => {
    expect(nextBarState("top", 3, 0, viewport)).toBe("top");
  });

  it("comes back, raised, once the page has scrolled up 16px since it turned", () => {
    expect(revealAfter).toBe(16);
    // Turned at 1600: 10px up is not enough yet, 16px is.
    expect(nextBarState("hidden", 1590, 1600, viewport, 1600)).toBe("hidden");
    expect(nextBarState("hidden", 1584, 1590, viewport, 1600)).toBe("raised");
    expect(nextBarState("hidden", 1500, 1600, viewport, 1600)).toBe("raised");
    expect(nextBarState("hidden", 200, 300, viewport, 300)).toBe("raised");
  });

  // The fill has to go while the page is still moving: at y = 0 alone it
  // vanished just as the scroll stopped, which read as a jolt.
  describe("nearing the top on the way up", () => {
    it("gives up the fill before the page gets there", () => {
      expect(clearNear).toBe(120);
      expect(nextBarState("raised", 120, 300, viewport, 300)).toBe("top");
      expect(nextBarState("hidden", 60, 200, viewport, 200)).toBe("top");
    });

    it("keeps the fill while the top is still further off", () => {
      expect(nextBarState("raised", 121, 300, viewport, 300)).toBe("raised");
    });

    it("lands bare after a jump to the top of the page", () => {
      expect(nextBarState("hidden", 40, 2000, viewport, 2000)).toBe("top");
    });

    // Going down is untouched: the bar leaves from the first step, bare.
    it("still hides from the first step down, near the top too", () => {
      expect(nextBarState("top", 60, 20, viewport)).toBe("hidden");
      expect(nextBarState("raised", 119, 100, viewport)).toBe("hidden");
    });
  });

  it("stays raised while the page keeps scrolling up", () => {
    expect(nextBarState("raised", 1590, 1600, viewport, 1600)).toBe("raised");
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

  // The hook checks the scroll in the next frame: the test runs it.
  let frames: FrameRequestCallback[] = [];
  const nextFrame = () =>
    act(() => frames.splice(0).forEach((frame) => frame(0)));

  beforeEach(() => {
    frames = [];
    vi.stubGlobal("requestAnimationFrame", (frame: FrameRequestCallback) =>
      frames.push(frame),
    );
    vi.stubGlobal("cancelAnimationFrame", () => {});
  });

  afterEach(() => {
    vi.unstubAllGlobals();
    delete document.documentElement.dataset.restoringScroll;
    Object.defineProperty(window, "scrollY", { value: 0, configurable: true });
  });

  it("reads the scroll only in the next frame, so it forces no layout", () => {
    // A page opened part way down, at a section from a link.
    const read = vi.fn(() => 1200);
    Object.defineProperty(window, "scrollY", { get: read, configurable: true });

    const { result } = renderHook(() => useBarState());
    expect(read).not.toHaveBeenCalled();
    expect(result.current.state).toBe("top");

    nextFrame();
    expect(read).toHaveBeenCalled();
    expect(result.current.state).toBe("raised");
  });

  it("stays bare on a page that opens at the top", () => {
    const { result } = renderHook(() => useBarState());
    nextFrame();

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
    nextFrame();
    expect(result.current.state).toBe("hidden");

    // The fonts arrive and the page moves a little, up or down.
    scrollTo(1960);
    expect(result.current.state).toBe("hidden");
    scrollTo(2000);
    expect(result.current.state).toBe("hidden");
  });

  it("comes back only after a little way up, counted from the last turn", () => {
    const { result } = renderHook(() => useBarState());
    nextFrame();

    scrollTo(300);
    scrollTo(600);
    expect(result.current.state).toBe("hidden");
    // 10px up: still hidden, short of the 16px.
    scrollTo(590);
    expect(result.current.state).toBe("hidden");
    // Down again: the count starts over from here (610).
    scrollTo(610);
    scrollTo(600);
    expect(result.current.state).toBe("hidden");
    // 16px up from that turn: back, raised.
    scrollTo(594);
    expect(result.current.state).toBe("raised");
  });

  it("comes back once the visitor scrolls up after the reload", () => {
    document.documentElement.dataset.restoringScroll = "";
    Object.defineProperty(window, "scrollY", {
      value: 2000,
      configurable: true,
    });
    const { result } = renderHook(() => useBarState());
    nextFrame();

    delete document.documentElement.dataset.restoringScroll;
    scrollTo(1900);

    expect(result.current.state).toBe("raised");
  });
});
