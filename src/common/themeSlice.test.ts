import { afterEach, describe, expect, it, vi } from "vitest";
import themeReducer, {
  getInitialDarkTheme,
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

describe("themeSlice", () => {
  afterEach(() => {
    vi.unstubAllGlobals();
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

  it("falls back to light theme when matchMedia is unavailable", () => {
    vi.stubGlobal("matchMedia", undefined);

    expect(getInitialDarkTheme()).toBe(false);
  });

  it("toggles the theme and marks it as the visitor's choice", () => {
    const dark = themeReducer(
      { isDarkTheme: false, hasUserChoice: false },
      toggleTheme(),
    );
    const light = themeReducer(dark, toggleTheme());

    expect(dark).toEqual({ isDarkTheme: true, hasUserChoice: true });
    expect(light.isDarkTheme).toBe(false);
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
  describe("initial state on page load", () => {
    const loadReducer = async () => {
      vi.resetModules();
      const { default: reducer } = await import("./themeSlice");
      return reducer;
    };

    it("starts from a saved choice and marks it as the visitor's", async () => {
      mockColorScheme(false);
      localStorage.setItem("dark", "true");

      const reducer = await loadReducer();

      expect(reducer(undefined, { type: "@@INIT" })).toEqual({
        isDarkTheme: true,
        hasUserChoice: true,
      });
    });

    it("starts from the OS theme with no visitor choice", async () => {
      mockColorScheme(true);

      const reducer = await loadReducer();

      expect(reducer(undefined, { type: "@@INIT" })).toEqual({
        isDarkTheme: true,
        hasUserChoice: false,
      });
    });
  });
});
