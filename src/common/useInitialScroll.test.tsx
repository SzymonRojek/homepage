import { fireEvent, render } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { useInitialScroll } from "./useInitialScroll";

const Page = () => {
  useInitialScroll();
  return <h2 id="projects">Projects</h2>;
};

const navigateAs = (type: "navigate" | "reload") =>
  vi
    .spyOn(performance, "getEntriesByType")
    .mockReturnValue([{ type } as PerformanceNavigationTiming]);

describe("useInitialScroll", () => {
  const scrollIntoView = vi.fn();
  const scrollTo = vi.fn();

  beforeEach(() => {
    // jsdom has no layout, so there is no real scrolling, and no
    // history.scrollRestoration; browsers start it at "auto".
    Element.prototype.scrollIntoView = scrollIntoView;
    window.scrollTo = scrollTo as typeof window.scrollTo;
    Object.defineProperty(history, "scrollRestoration", {
      value: "auto",
      writable: true,
      configurable: true,
    });
  });

  afterEach(() => {
    vi.restoreAllMocks();
    scrollIntoView.mockReset();
    scrollTo.mockReset();
    sessionStorage.clear();
    window.history.replaceState(null, "", "/");
  });

  it("on a visit from a link, jumps to the #section at once", () => {
    navigateAs("navigate");
    window.history.replaceState(null, "", "/#projects");

    const { getByRole } = render(<Page />);

    expect(scrollIntoView).toHaveBeenCalledExactlyOnceWith({
      behavior: "instant",
    });
    expect(scrollIntoView.mock.contexts[0]).toBe(getByRole("heading"));
  });

  it("does nothing without a hash or without a matching section", () => {
    navigateAs("navigate");
    render(<Page />);

    window.history.replaceState(null, "", "/#nowhere");
    render(<Page />);

    expect(scrollIntoView).not.toHaveBeenCalled();
    expect(scrollTo).not.toHaveBeenCalled();
  });

  it("after a reload, goes back to where the visitor was, not to the #section", () => {
    navigateAs("reload");
    sessionStorage.setItem("scrollY", "1234");
    window.history.replaceState(null, "", "/#projects");

    render(<Page />);

    expect(scrollTo).toHaveBeenCalledExactlyOnceWith({
      top: 1234,
      behavior: "instant",
    });
    expect(scrollIntoView).not.toHaveBeenCalled();
  });

  it("ignores a saved position on a visit from a link", () => {
    navigateAs("navigate");
    sessionStorage.setItem("scrollY", "1234");
    window.history.replaceState(null, "", "/#projects");

    render(<Page />);

    expect(scrollTo).not.toHaveBeenCalled();
    expect(scrollIntoView).toHaveBeenCalledOnce();
  });

  it("saves the position when the page is left", () => {
    navigateAs("navigate");
    render(<Page />);
    Object.defineProperty(window, "scrollY", {
      value: 777,
      configurable: true,
    });

    fireEvent(window, new Event("pagehide"));

    expect(sessionStorage.getItem("scrollY")).toBe("777");
  });

  it("lets the page, not the browser, restore the position", () => {
    navigateAs("navigate");
    render(<Page />);

    expect(history.scrollRestoration).toBe("manual");
  });
});
