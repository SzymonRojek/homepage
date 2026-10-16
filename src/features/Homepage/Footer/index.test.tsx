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
  it("offers email in the letter and LinkedIn below, without the address", () => {
    renderFooter();

    expect(
      screen.getByRole("link", { name: "Send me an email" }),
    ).toHaveAttribute("href", expect.stringMatching(/^mailto:/));
    expect(screen.getByRole("link", { name: "LinkedIn" })).toHaveAttribute(
      "href",
      profile.linkedinUrl,
    );
    expect(screen.queryByText(/@/)).not.toBeInTheDocument();
  });

  it("reads like a letter: thanks, a note about teamwork, one invite", () => {
    renderFooter();

    expect(
      screen.getByRole("heading", { name: "Thanks for reading this far." }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "If that sounds like your team, I'd like to hear from you.",
      ),
    ).toBeInTheDocument();
    expect(screen.getAllByRole("link", { name: /LinkedIn/ })).toHaveLength(1);
  });

  it("keeps to words: no photo, the hero shows it", () => {
    const { container } = renderFooter();

    expect(container.querySelector("img")).toBeNull();
    // The full name stays in the © line only, and that line is just the
    // name and the year: no "All rights reserved".
    expect(screen.getAllByText(/Szymon Rojek/)).toHaveLength(1);
    expect(screen.getByText(/Szymon Rojek/)).toHaveTextContent(
      /^Szymon Rojek © \d{4}$/,
    );
  });

  it("has a personal note about teamwork", () => {
    renderFooter();

    expect(
      screen.getByText(/communication matters most in a team/),
    ).toHaveTextContent("mutual respect");
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
