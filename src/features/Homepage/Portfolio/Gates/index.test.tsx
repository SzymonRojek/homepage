import { act, render, screen, within } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { afterEach, describe, expect, it, vi } from "vitest";
import { themeLight } from "../../../../core/App/theme";
import { Gates } from ".";

const gates = {
  checks: ["npm audit", "Production build"],
  result: "Deploy to GitHub Pages",
};

const renderGates = () =>
  render(
    <ThemeProvider theme={themeLight}>
      <Gates title="This website" gates={gates} />
    </ThemeProvider>,
  );

const wrapper = () =>
  screen.getByRole("list", { name: "This website: CI gates, all passing" })
    .parentElement as HTMLElement;

// A browser where IntersectionObserver first reports where the list starts
// (below the screen unless told otherwise), then when it comes into view.
const belowTheScreen = ({ reducedMotion = false, top = 2000 } = {}) => {
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
            boundingClientRect: { top } as DOMRect,
            rootBounds: { height: 800 } as DOMRect,
          },
        ]);
      }
      disconnect() {}
    },
  );
  vi.stubGlobal("matchMedia", (query: string) => ({
    matches: reducedMotion && query.includes("reduce"),
  }));
  return (isIntersecting: boolean) =>
    act(() =>
      report([
        {
          isIntersecting,
          intersectionRatio: isIntersecting ? 1 : 0,
          boundingClientRect: { top: isIntersecting ? 100 : 900 } as DOMRect,
          rootBounds: { height: 800 } as DOMRect,
        },
      ]),
    );
};

afterEach(() => {
  vi.unstubAllGlobals();
  vi.restoreAllMocks();
});

describe("Gates", () => {
  it("lists the gates in order, then the deploy, all passed", () => {
    renderGates();

    expect(
      within(
        screen.getByRole("list", {
          name: "This website: CI gates, all passing",
        }),
      )
        .getAllByRole("listitem")
        .map(({ textContent }) => textContent),
    ).toEqual(["✓npm audit", "✓Production build"]);
    expect(screen.getByText("Deploy to GitHub Pages")).toBeInTheDocument();
    // No IntersectionObserver here, so nothing waits: all have passed.
    expect(wrapper()).not.toHaveAttribute("data-state");
  });

  it("hides the ticks from screen readers", () => {
    renderGates();

    for (const item of screen.getAllByRole("listitem")) {
      expect(item.firstElementChild).toHaveAttribute("aria-hidden", "true");
    }
  });

  it("waits below the screen, then runs once it comes into view", () => {
    const scrollTo = belowTheScreen();
    renderGates();

    expect(wrapper()).toHaveAttribute("data-state", "waiting");
    scrollTo(false);
    expect(wrapper()).toHaveAttribute("data-state", "waiting");
    scrollTo(true);
    expect(wrapper()).toHaveAttribute("data-state", "running");
  });

  it("shows every gate passed at once with reduced motion", () => {
    belowTheScreen({ reducedMotion: true });
    renderGates();

    expect(wrapper()).not.toHaveAttribute("data-state");
  });

  it("doesn't restart in front of the visitor when already on screen", () => {
    belowTheScreen({ top: 100 });
    renderGates();

    expect(wrapper()).not.toHaveAttribute("data-state");
  });
});
