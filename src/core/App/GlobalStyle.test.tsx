import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { describe, expect, it } from "vitest";
import { GlobalStyle } from "./GlobalStyle";
import { themeDark, themeLight } from "./theme";

const css = () =>
  Array.from(document.querySelectorAll("style"))
    .map((tag) => tag.textContent ?? "")
    .join("")
    .toLowerCase();

const rule = (selector: string, declaration: string) =>
  new RegExp(`${selector}\\s*\\{[^}]*${declaration}`);

describe("the window's scrollbar", () => {
  it.each([
    ["light", themeLight],
    ["dark", themeDark],
  ])("takes the %s theme's interactive colour", (_name, theme) => {
    render(
      <ThemeProvider theme={theme}>
        <GlobalStyle />
      </ThemeProvider>,
    );

    const styles = css();
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
    render(
      <ThemeProvider theme={themeLight}>
        <GlobalStyle />
      </ThemeProvider>,
    );

    expect(css()).toMatch(
      rule("::-webkit-scrollbar-track", "background:\\s*transparent"),
    );
  });

  // A width on ::-webkit-scrollbar turns the system's overlay bar into a
  // classic one that never leaves: right on a desktop, clutter on a phone.
  it("only keeps the bar in sight where a pointer can grab it", () => {
    render(
      <ThemeProvider theme={themeLight}>
        <GlobalStyle />
      </ThemeProvider>,
    );

    expect(css()).toMatch(
      /@media\s*\(hover:\s*hover\)\s+and\s+\(pointer:\s*fine\)\s*\{[^@]*::-webkit-scrollbar\s*\{/,
    );
  });
});
