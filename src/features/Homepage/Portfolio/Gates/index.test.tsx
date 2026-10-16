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

// A browser where the list starts below the screen and IntersectionObserver
// reports when it comes into view.
const belowTheScreen = ({ reducedMotion = false } = {}) => {
  let report: (entries: { isIntersecting: boolean }[]) => void = () => {};
  vi.stubGlobal(
    "IntersectionObserver",
    class {
      constructor(callback: typeof report) {
        report = callback;
      }
      observe() {}
      disconnect() {}
    },
  );
  vi.stubGlobal("matchMedia", (query: string) => ({
    matches: reducedMotion && query.includes("reduce"),
  }));
  vi.spyOn(HTMLElement.prototype, "getBoundingClientRect").mockReturnValue({
    top: 2000,
  } as DOMRect);
  return (isIntersecting: boolean) => act(() => report([{ isIntersecting }]));
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
    belowTheScreen();
    vi.spyOn(HTMLElement.prototype, "getBoundingClientRect").mockReturnValue({
      top: 100,
    } as DOMRect);
    renderGates();

    expect(wrapper()).not.toHaveAttribute("data-state");
  });
});
