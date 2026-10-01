import { describe, expect, it } from "vitest";
import themeReducer, { selectDarkTheme, toggleTheme } from "./themeSlice";

describe("themeSlice", () => {
  it("starts in light theme when nothing is saved", () => {
    const state = themeReducer(undefined, { type: "@@INIT" });

    expect(state.isDarkTheme).toBe(false);
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
