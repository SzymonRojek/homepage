import { fireEvent, render } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { pageFonts, useInitialScroll } from "./useInitialScroll";

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
    vi.useRealTimers();
    delete document.documentElement.dataset.restoringScroll;
  });

  const scrollAt = (y: number) =>
    Object.defineProperty(window, "scrollY", {
      value: y,
      configurable: true,
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

  it("after a reload, waits for the fonts so the page is as tall as before", async () => {
    // One promise for every face, settled when the "network" delivers them.
    let fontsLoaded = () => {};
    const fonts = new Promise<FontFace[]>((resolve) => {
      fontsLoaded = () => resolve([]);
    });
    const load = vi.fn(() => fonts);
    Object.defineProperty(document, "fonts", {
      value: { load },
      configurable: true,
    });
    navigateAs("reload");
    sessionStorage.setItem("scrollY", "1234");

    render(<Page />);
    expect(load).toHaveBeenCalledWith('400 1em "Bricolage Grotesque"');
    expect(scrollTo).not.toHaveBeenCalled();

    fontsLoaded();
    await vi.waitFor(() =>
      expect(scrollTo).toHaveBeenCalledExactlyOnceWith({
        top: 1234,
        behavior: "instant",
      }),
    );
    Reflect.deleteProperty(document, "fonts");
  });

  it("ignores a saved position on a visit from a link", () => {
    navigateAs("navigate");
    sessionStorage.setItem("scrollY", "1234");
    window.history.replaceState(null, "", "/#projects");

    render(<Page />);

    expect(scrollTo).not.toHaveBeenCalled();
    expect(scrollIntoView).toHaveBeenCalledOnce();
  });

  it("waits for the faces index.html declares", async () => {
    const { readFileSync } = await import("node:fs");
    const html = readFileSync("index.html", "utf8");
    const declared = new Set(
      [...html.matchAll(/font-family: "([^"]+)"/g)].map(([, name]) => name),
    );

    const waitedFor = pageFonts.map((font) =>
      font.replace(/^\d+ 1em /, "").replaceAll('"', ""),
    );

    expect(new Set(waitedFor)).toEqual(declared);
  });

  it("saves the position when the page is left", () => {
    navigateAs("navigate");
    render(<Page />);
    scrollAt(777);

    fireEvent(window, new Event("pagehide"));

    expect(sessionStorage.getItem("scrollY")).toBe("777");
  });

  it("saves the position when the page is hidden", () => {
    navigateAs("navigate");
    render(<Page />);
    scrollAt(555);
    Object.defineProperty(document, "visibilityState", {
      value: "hidden",
      configurable: true,
    });

    fireEvent(document, new Event("visibilitychange"));

    expect(sessionStorage.getItem("scrollY")).toBe("555");
    Reflect.deleteProperty(document, "visibilityState");
  });

  it("saves the position while the page scrolls, so pagehide isn't needed (#26)", () => {
    vi.useFakeTimers();
    navigateAs("navigate");
    sessionStorage.setItem("scrollY", "1500");
    render(<Page />);

    // Back at the top: the old place must not survive a reload.
    scrollAt(0);
    fireEvent.scroll(window);
    vi.advanceTimersByTime(100);

    expect(sessionStorage.getItem("scrollY")).toBe("0");
  });

  it("after a reload, lets the top bar back once the page is in place", async () => {
    navigateAs("reload");
    sessionStorage.setItem("scrollY", "1234");
    // Set by index.html before the first paint.
    document.documentElement.dataset.restoringScroll = "";

    render(<Page />);

    await vi.waitFor(() =>
      expect(document.documentElement).not.toHaveAttribute(
        "data-restoring-scroll",
      ),
    );
    expect(scrollTo).toHaveBeenCalledOnce();
  });

  it("lets the page, not the browser, restore the position", () => {
    navigateAs("navigate");
    render(<Page />);

    expect(history.scrollRestoration).toBe("manual");
  });
});
