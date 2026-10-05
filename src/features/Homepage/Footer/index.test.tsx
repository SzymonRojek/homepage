import { render, screen, within } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { describe, expect, it } from "vitest";
import { themeLight } from "../../../core/App/theme";
import { profile } from "../profile";
import { Footer } from ".";

const renderFooter = () =>
  render(
    <ThemeProvider theme={themeLight}>
      <Footer />
    </ThemeProvider>,
  );

describe("Footer", () => {
  it("offers email and LinkedIn without showing the address", () => {
    renderFooter();

    expect(
      screen.getByRole("link", { name: "Send me an email" }),
    ).toHaveAttribute("href", expect.stringMatching(/^mailto:/));
    expect(
      screen.getByRole("link", { name: "Message me on LinkedIn" }),
    ).toHaveAttribute("href", profile.linkedinUrl);
    expect(screen.queryByText(/@/)).not.toBeInTheDocument();
  });

  it("links to GitHub and LinkedIn profiles", () => {
    renderFooter();

    const socials = screen.getAllByRole("list").at(-1);
    expect(socials).toBeDefined();
    expect(
      within(socials as HTMLElement)
        .getAllByRole("link")
        .map((link) => link.getAttribute("title")),
    ).toEqual(["GitHub", "LinkedIn"]);
  });
});
