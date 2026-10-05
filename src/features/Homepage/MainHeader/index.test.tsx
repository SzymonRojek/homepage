import { render, screen, within } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { describe, expect, it } from "vitest";
import { themeLight } from "../../../core/App/theme";
import { MainHeader } from ".";

const renderHeader = () =>
  render(
    <ThemeProvider theme={themeLight}>
      <MainHeader />
    </ThemeProvider>,
  );

describe("MainHeader", () => {
  it("shows who I am, the roles I want and where I can work", () => {
    renderHeader();

    expect(
      screen.getByRole("heading", { level: 1, name: "Szymon Rojek" }),
    ).toBeInTheDocument();
    expect(
      screen.getByText("Open to QA Engineer & Data/ETL Test Analyst roles"),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "Based in Hove, UK · Full right to work in the UK · Open to relocation",
      ),
    ).toBeInTheDocument();
  });

  it("lists the key skills", () => {
    renderHeader();

    const skills = screen.getByRole("list", { name: "Key skills" });
    expect(within(skills).getAllByRole("listitem")).toHaveLength(4);
  });

  it("links to email and LinkedIn only", () => {
    renderHeader();

    expect(screen.getByRole("link", { name: "Email me" })).toHaveAttribute(
      "href",
      expect.stringMatching(/^mailto:/),
    );
    const linkedin = screen.getByRole("link", { name: "LinkedIn" });
    expect(linkedin).toHaveAttribute("href", expect.stringMatching(/linkedin/));
    expect(linkedin).toHaveAttribute("target", "_blank");
    expect(linkedin).toHaveAttribute("rel", "noreferrer");
    expect(screen.getAllByRole("link")).toHaveLength(2);
  });
});
