import { afterEach, describe, expect, it, vi } from "vitest";
import themeReducer, {
  getInitialDarkTheme,
  loadThemeState,
  selectDarkTheme,
  selectHasUserChoice,
  systemThemeChanged,
  toggleTheme,
} from "./themeSlice";

const mockColorScheme = (isDark: boolean) =>
  vi.stubGlobal(
    "matchMedia",
    vi.fn((query: string) => ({
      matches: isDark && query === "(prefers-color-scheme: dark)",
    })),
  );

// Safari's private windows, "block all cookies" and some embedded pages make
// every storage read throw rather than return nothing.
const blockStorage = () =>
  vi.spyOn(Storage.prototype, "getItem").mockImplementation(() => {
    throw new DOMException("The operation is insecure.", "SecurityError");
  });

describe("themeSlice", () => {
  afterEach(() => {
    vi.unstubAllGlobals();
    vi.restoreAllMocks();
  });

  it("follows the OS dark preference when nothing is saved", () => {
    mockColorScheme(true);

    expect(getInitialDarkTheme()).toBe(true);
  });

  it("follows the OS light preference when nothing is saved", () => {
    mockColorScheme(false);

    expect(getInitialDarkTheme()).toBe(false);
  });

  it("prefers the saved choice over the OS preference", () => {
    mockColorScheme(true);
    localStorage.setItem("dark", "false");

    expect(getInitialDarkTheme()).toBe(false);
  });

  // Found by mutation testing: without this case, always returning false for a
  // saved choice still passed.
  it("prefers a saved dark choice over a light OS preference", () => {
    mockColorScheme(false);
    localStorage.setItem("dark", "true");

    expect(getInitialDarkTheme()).toBe(true);
  });

  // This read is the app's first act (index.tsx), so a throw here used to
  // leave the visitor with a page that never came alive.
  it("follows the OS theme when storage is blocked", () => {
    mockColorScheme(true);
    blockStorage();

    expect(getInitialDarkTheme()).toBe(true);
    expect(loadThemeState()).toEqual({
      isDarkTheme: true,
      hasUserChoice: false,
    });
  });

  it("falls back to light theme when matchMedia is unavailable", () => {
    vi.stubGlobal("matchMedia", undefined);

    expect(getInitialDarkTheme()).toBe(false);
  });

  it("toggles away from the OS theme and marks it as the visitor's choice", () => {
    const dark = themeReducer(
      { isDarkTheme: false, hasUserChoice: false },
      toggleTheme(false),
    );

    expect(dark).toEqual({ isDarkTheme: true, hasUserChoice: true });
  });

  it("toggling back to the OS theme follows the OS again", () => {
    const light = themeReducer(
      { isDarkTheme: true, hasUserChoice: true },
      toggleTheme(false),
    );

    expect(light).toEqual({ isDarkTheme: false, hasUserChoice: false });
  });

  it("follows OS theme changes until the visitor chooses", () => {
    const state = themeReducer(
      { isDarkTheme: false, hasUserChoice: false },
      systemThemeChanged(true),
    );

    expect(state).toEqual({ isDarkTheme: true, hasUserChoice: false });
  });

  it("ignores OS theme changes after the visitor chooses", () => {
    const state = themeReducer(
      { isDarkTheme: false, hasUserChoice: true },
      systemThemeChanged(true),
    );

    expect(state.isDarkTheme).toBe(false);
  });

  it("selects the theme flags", () => {
    const state = { theme: { isDarkTheme: true, hasUserChoice: false } };

    expect(selectDarkTheme(state)).toBe(true);
    expect(selectHasUserChoice(state)).toBe(false);
  });

  // Found by mutation testing: no test checked the state a page load starts
  // from, because the other tests pass a state in themselves.
  describe("state on page load", () => {
    it("starts from a saved choice and marks it as the visitor's", () => {
      mockColorScheme(false);
      localStorage.setItem("dark", "true");

      expect(loadThemeState()).toEqual({
        isDarkTheme: true,
        hasUserChoice: true,
      });
    });

    it("starts from the OS theme with no visitor choice", () => {
      mockColorScheme(true);

      expect(loadThemeState()).toEqual({
        isDarkTheme: true,
        hasUserChoice: false,
      });
    });

    it("starts light without asking the browser, as the build's static page", () => {
      mockColorScheme(true);
      localStorage.setItem("dark", "true");

      expect(themeReducer(undefined, { type: "@@INIT" })).toEqual({
        isDarkTheme: false,
        hasUserChoice: false,
      });
    });
  });
});
