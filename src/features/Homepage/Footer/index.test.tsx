import { render, screen, within } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { afterEach, describe, expect, it } from "vitest";
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
  const { cvFile } = profile;

  afterEach(() => {
    profile.cvFile = cvFile;
  });

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

  it("offers the CV when one is set", () => {
    profile.cvFile = "cv.pdf";
    renderFooter();

    expect(screen.getByRole("link", { name: "Download CV" })).toHaveAttribute(
      "download",
    );
  });

  it("hides the CV button when no CV is set", () => {
    profile.cvFile = null;
    renderFooter();

    expect(
      screen.queryByRole("link", { name: "Download CV" }),
    ).not.toBeInTheDocument();
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
