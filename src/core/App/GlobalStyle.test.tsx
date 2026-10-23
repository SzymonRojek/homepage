import { renderToStaticMarkup } from "react-dom/server";
import type { DefaultTheme } from "styled-components";
import { ServerStyleSheet, ThemeProvider } from "styled-components";
import { describe, expect, it } from "vitest";
import { GlobalStyle } from "./GlobalStyle";
import { themeDark, themeLight } from "./theme";

// styled-components writes its rules into the document's own stylesheet rather
// than into the text of a <style> tag, so reading that text back gives nothing.
// The CSS is collected as text instead, the way the build does it for the
// static page (src/entry-server.tsx).
const css = (theme: DefaultTheme) => {
  const sheet = new ServerStyleSheet();

  try {
    renderToStaticMarkup(
      sheet.collectStyles(
        <ThemeProvider theme={theme}>
          <GlobalStyle />
        </ThemeProvider>,
      ),
    );

    return sheet.getStyleTags().toLowerCase();
  } finally {
    sheet.seal();
  }
};

const rule = (selector: string, declaration: string) =>
  new RegExp(`${selector}\\s*\\{[^}]*${declaration}`);

describe("the window's scrollbar", () => {
  it.each<[string, DefaultTheme]>([
    ["light", themeLight],
    ["dark", themeDark],
  ])("takes the %s theme's interactive colour", (_name, theme) => {
    const styles = css(theme);

    expect(styles).toMatch(
      rule(
        "::-webkit-scrollbar-thumb",
        `background-color:\\s*${theme.colors.primary.toLowerCase()}`,
      ),
    );
    expect(styles).toMatch(
      rule(
        "::-webkit-scrollbar-thumb:hover",
        `background-color:\\s*${theme.colors.primaryHover.toLowerCase()}`,
      ),
    );
    // Firefox, and Safari from 26.2, have no pseudo-element and take the
    // standard property instead.
    expect(styles).toMatch(
      rule(
        "html",
        `scrollbar-color:\\s*${theme.colors.primary.toLowerCase()} transparent`,
      ),
    );
  });

  it("leaves the lane the page's colour, so no stripe runs beside the dark bands", () => {
    expect(css(themeLight)).toMatch(
      rule("::-webkit-scrollbar-track", "background:\\s*transparent"),
    );
  });

  // A width on ::-webkit-scrollbar turns the system's overlay bar into a
  // classic one that never leaves: right on a desktop, clutter on a phone.
  it("only keeps the bar in sight where a pointer can grab it", () => {
    expect(css(themeLight)).toMatch(
      /@media\s*\(hover:\s*hover\)\s+and\s+\(pointer:\s*fine\)\s*\{[^@]*::-webkit-scrollbar\s*\{/,
    );
  });
});
