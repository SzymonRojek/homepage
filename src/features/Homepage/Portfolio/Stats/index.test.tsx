import { act, render, screen, within } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { afterEach, describe, expect, it, vi } from "vitest";
import { themeLight } from "../../../../core/App/theme";
import { Stats } from ".";

const stats = [
  { value: "200+", label: "unit tests" },
  { value: "63", label: "Playwright flows" },
];

const renderStats = () =>
  render(
    <ThemeProvider theme={themeLight}>
      <Stats title="Talent Outreach" stats={stats} featured />
    </ThemeProvider>,
  );

const numbers = () =>
  within(screen.getByRole("list", { name: "Talent Outreach: in numbers" }))
    .getAllByRole("listitem")
    .map((item) => item.querySelector("strong") as HTMLElement);

// A browser where IntersectionObserver first reports the list below the
// screen, then when it comes into view.
const belowTheScreen = () => {
  let report: (entries: Partial<IntersectionObserverEntry>[]) => void =
    () => {};
  vi.stubGlobal(
    "IntersectionObserver",
    class {
      constructor(callback: typeof report) {
        report = callback;
      }
      observe() {
        report([
          {
            isIntersecting: false,
            intersectionRatio: 0,
            boundingClientRect: { top: 2000 } as DOMRect,
            rootBounds: { height: 800 } as DOMRect,
          },
        ]);
      }
      disconnect() {}
    },
  );
  vi.stubGlobal("matchMedia", () => ({ matches: false }));
  return () =>
    act(() =>
      report([
        {
          isIntersecting: true,
          intersectionRatio: 1,
          boundingClientRect: { top: 100 } as DOMRect,
          rootBounds: { height: 800 } as DOMRect,
        },
      ]),
    );
};

afterEach(() => {
  vi.useRealTimers();
  vi.unstubAllGlobals();
  vi.restoreAllMocks();
});

describe("Stats", () => {
  it("shows each number with what it counts", () => {
    renderStats();

    expect(
      within(screen.getByRole("list", { name: "Talent Outreach: in numbers" }))
        .getAllByRole("listitem")
        .map(({ textContent }) => textContent),
    ).toEqual(["200+ unit tests", "63 Playwright flows"]);
    // Nothing to count without IntersectionObserver: the numbers as they are.
    expect(numbers()[0]).not.toHaveAttribute("data-shown");
  });

  it("counts up from zero once in view, the real numbers staying in the page", () => {
    vi.useFakeTimers();
    const scrollTo = belowTheScreen();
    renderStats();

    expect(numbers().map((strong) => strong.dataset.shown)).toEqual([
      "0+",
      "0",
    ]);
    scrollTo();
    act(() => vi.advanceTimersByTime(600));
    const [tests, flows] = numbers();
    expect(Number(tests.dataset.shown?.replace("+", ""))).toBeGreaterThan(0);
    expect(Number(tests.dataset.shown?.replace("+", ""))).toBeLessThan(200);
    expect(flows.dataset.shown).not.toBe("63");
    // Screen readers and search engines get the real numbers throughout.
    expect(tests).toHaveTextContent(/^200\+$/);

    // The count lasts 1.8 s; past it, the real numbers alone.
    act(() => vi.advanceTimersByTime(1300));
    for (const strong of numbers()) {
      expect(strong).not.toHaveAttribute("data-shown");
    }
  });
});
