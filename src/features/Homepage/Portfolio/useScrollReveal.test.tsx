import { act, render } from "@testing-library/react";
import { useRef } from "react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { useScrollReveal } from "./useScrollReveal";

const prepare = vi.fn();
const play = vi.fn();

const Box = () => {
  const ref = useRef<HTMLDivElement>(null);
  useScrollReveal(ref, prepare, play);
  return <div ref={ref} />;
};

// IntersectionObserver that reports what the test tells it, the first report
// as soon as it starts observing, as a browser does.
const observer = (first: Partial<IntersectionObserverEntry>) => {
  let report: (
    entries: Partial<IntersectionObserverEntry>[],
  ) => void = () => {};
  const disconnect = vi.fn();
  vi.stubGlobal(
    "IntersectionObserver",
    class {
      constructor(callback: typeof report) {
        report = callback;
      }
      observe() {
        report([{ rootBounds: { height: 800 } as DOMRect, ...first }]);
      }
      disconnect = disconnect;
    },
  );
  vi.stubGlobal("matchMedia", () => ({ matches: false }));
  return {
    disconnect,
    report: (entry: Partial<IntersectionObserverEntry>) =>
      act(() => report([{ rootBounds: { height: 800 } as DOMRect, ...entry }])),
  };
};

const below = { boundingClientRect: { top: 2000 } as DOMRect };

afterEach(() => {
  vi.unstubAllGlobals();
  vi.restoreAllMocks();
  prepare.mockClear();
  play.mockClear();
});

describe("useScrollReveal", () => {
  it("never reads the layout itself, so it forces no reflow", () => {
    observer(below);
    const measure = vi.spyOn(HTMLElement.prototype, "getBoundingClientRect");
    render(<Box />);

    expect(measure).not.toHaveBeenCalled();
    expect(prepare).toHaveBeenCalledOnce();
  });

  it("waits below the screen and plays once 60% of it is in view", () => {
    const { report, disconnect } = observer(below);
    render(<Box />);

    report({
      isIntersecting: true,
      intersectionRatio: 0.3,
      boundingClientRect: { top: 600 } as DOMRect,
    });
    expect(play).not.toHaveBeenCalled();
    report({
      isIntersecting: true,
      intersectionRatio: 0.6,
      boundingClientRect: { top: 400 } as DOMRect,
    });
    expect(play).toHaveBeenCalledOnce();
    expect(prepare).toHaveBeenCalledOnce();
    expect(disconnect).toHaveBeenCalled();
  });

  it.each([
    ["partly on screen", 700],
    ["above the screen, after a reload further down", -500],
  ])("stays finished when it starts %s", (_, top) => {
    const { report, disconnect } = observer({
      isIntersecting: top > 0,
      intersectionRatio: top > 0 ? 0.2 : 0,
      boundingClientRect: { top } as DOMRect,
    });
    render(<Box />);
    report({
      isIntersecting: true,
      intersectionRatio: 1,
      boundingClientRect: { top: 100 } as DOMRect,
    });

    expect(prepare).not.toHaveBeenCalled();
    expect(play).not.toHaveBeenCalled();
    expect(disconnect).toHaveBeenCalled();
  });
});
