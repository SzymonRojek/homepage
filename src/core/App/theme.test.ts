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

describe("the How I use AI band", () => {
  // It is the first section under the hero, so the sticky top bar floats
  // over it. Before 2026-10-19 the band used each theme's own bar colour, so
  // the bar disappeared into it at 1.00:1.
  it.each([
    ["light", themeLight],
    ["dark", themeDark],
  ])("is never the %s theme's top bar colour", (_name, theme) => {
    expect(theme.colors.aiBand).not.toBe(theme.colors.topBar);
  });

  it("changes with the theme, like every section between hero and footer", () => {
    expect(themeLight.colors.aiBand).not.toBe(themeDark.colors.aiBand);
  });

  it("differs from the How I test band it sits above", () => {
    expect(themeLight.colors.aiBand).not.toBe(themeLight.colors.storyBand);
    expect(themeDark.colors.aiBand).not.toBe(themeDark.colors.storyBand);
  });
});
