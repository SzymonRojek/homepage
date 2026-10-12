import { render, screen, within } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { describe, expect, it } from "vitest";
import { themeLight } from "../../../core/App/theme";
import { Mindset } from ".";

const renderMindset = () =>
  render(
    <ThemeProvider theme={themeLight}>
      <Mindset />
    </ThemeProvider>,
  );

describe("Mindset", () => {
  it("shows the developer and the tester side in a named section", () => {
    renderMindset();

    const section = screen.getByRole("region", {
      name: "Two mindsets, one goal",
    });
    expect(
      within(section)
        .getAllByRole("heading", { level: 3 })
        .map(({ textContent }) => textContent),
    ).toEqual(["Tester mindset", "Developer mindset"]);
  });

  it("backs each side with points and a tool list", () => {
    renderMindset();

    const developer = screen.getByRole("article", {
      name: "Developer mindset",
    });
    const tester = screen.getByRole("article", { name: "Tester mindset" });

    expect(within(developer).getByText("Code", { exact: true })).toBeVisible();
    expect(tester).toHaveTextContent("My profession: 4 years at Equiniti");
    expect(developer).toHaveTextContent("Self-taught: my own projects");
    expect(within(tester).getByText("Test", { exact: true })).toBeVisible();
    expect(tester).toHaveTextContent(/4 years testing financial data/);
    expect(
      within(developer).getByRole("list", { name: "Developer mindset tools" }),
    ).toHaveTextContent("Express");
    expect(
      within(tester).getByRole("list", { name: "Tester mindset tools" }),
    ).toHaveTextContent("Playwright");
  });

  it("has no links in the mindset cards", () => {
    renderMindset();

    expect(
      within(
        screen.getByRole("region", { name: "Two mindsets, one goal" }),
      ).queryAllByRole("link"),
    ).toHaveLength(0);
  });
});
