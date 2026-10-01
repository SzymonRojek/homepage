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
