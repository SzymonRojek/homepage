import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { afterEach, describe, expect, it } from "vitest";
import { themeLight } from "../../../core/App/theme";
import { profile } from "../profile";
import { MainHeader } from ".";

const renderHeader = () =>
  render(
    <ThemeProvider theme={themeLight}>
      <MainHeader />
    </ThemeProvider>,
  );

describe("MainHeader", () => {
  const { cvFile } = profile;

  afterEach(() => {
    profile.cvFile = cvFile;
  });

  it("hides the CV button until a CV file is set", () => {
    profile.cvFile = null;
    renderHeader();

    expect(
      screen.queryByRole("link", { name: "Download CV" }),
    ).not.toBeInTheDocument();
  });

  it("offers the CV from the site base path as a download", () => {
    profile.cvFile = "Szymon_Rojek_CV.pdf";
    renderHeader();

    const link = screen.getByRole("link", { name: "Download CV" });
    expect(link).toHaveAttribute(
      "href",
      `${import.meta.env.BASE_URL}Szymon_Rojek_CV.pdf`,
    );
    expect(link).toHaveAttribute("download");
  });

  it("links to email and LinkedIn", () => {
    renderHeader();

    expect(screen.getByRole("link", { name: "Email me" })).toHaveAttribute(
      "href",
      expect.stringMatching(/^mailto:/),
    );
    expect(screen.getByRole("link", { name: "LinkedIn" })).toHaveAttribute(
      "rel",
      "noreferrer",
    );
  });
});
