import { describe, expect, it } from "vitest";
import indexHtml from "../../../index.html?raw";
import { themeDark, themeLight } from "./theme";

describe("index.html first-paint theme", () => {
  const html = indexHtml.toLowerCase();

  it("uses the light theme background before the app loads", () => {
    expect(html).toMatch(
      new RegExp(
        `html \\{\\s*background: ${themeLight.colors.site.background.toLowerCase()};`,
      ),
    );
  });

  it("uses the dark theme background before the app loads", () => {
    expect(html).toMatch(
      new RegExp(
        `html\\[data-theme="dark"\\] \\{\\s*background: ${themeDark.colors.site.background.toLowerCase()};`,
      ),
    );
  });
});

describe("the How I test and How I use AI bands", () => {
  // The sticky top bar floats over both as the page scrolls, the first
  // section under the hero above all (How I test since 2026-11-27, How I use
  // AI before). Before 2026-10-19 the first band used each theme's own bar
  // colour, so the bar disappeared into it at 1.00:1.
  it.each([
    ["light", themeLight],
    ["dark", themeDark],
  ])("are never the %s theme's top bar colour", (_name, theme) => {
    expect(theme.colors.storyBand).not.toBe(theme.colors.topBar);
    expect(theme.colors.aiBand).not.toBe(theme.colors.topBar);
  });

  it("change with the theme, like every section between hero and footer", () => {
    expect(themeLight.colors.storyBand).not.toBe(themeDark.colors.storyBand);
    expect(themeLight.colors.aiBand).not.toBe(themeDark.colors.aiBand);
  });

  it("differ from each other, where they meet edge to edge", () => {
    expect(themeLight.colors.aiBand).not.toBe(themeLight.colors.storyBand);
    expect(themeDark.colors.aiBand).not.toBe(themeDark.colors.storyBand);
  });

  it("keep the light page alternating: sand first, then white", () => {
    // Projects, the third section, is on the page's sand, so the band
    // before it has to be white and the first one sand.
    expect(themeLight.colors.storyBand).toBe(themeLight.colors.site.background);
    expect(themeLight.colors.aiBand).not.toBe(
      themeLight.colors.site.background,
    );
  });
});
