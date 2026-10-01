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
});
