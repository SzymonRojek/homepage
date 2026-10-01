import { afterEach, describe, expect, it, vi } from "vitest";
import themeReducer, {
  getInitialDarkTheme,
  selectDarkTheme,
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

  it("toggles the theme", () => {
    const dark = themeReducer({ isDarkTheme: false }, toggleTheme());
    const light = themeReducer(dark, toggleTheme());

    expect(dark.isDarkTheme).toBe(true);
    expect(light.isDarkTheme).toBe(false);
  });

  it("selects the dark theme flag", () => {
    expect(selectDarkTheme({ theme: { isDarkTheme: true } })).toBe(true);
  });
});
