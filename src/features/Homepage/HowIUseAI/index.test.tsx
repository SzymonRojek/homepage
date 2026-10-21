import { render, screen, within } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { describe, expect, it } from "vitest";
import { themeLight } from "../../../core/App/theme";
import { HowIUseAI } from ".";

const renderHowIUseAI = () =>
  render(
    <ThemeProvider theme={themeLight}>
      <HowIUseAI />
    </ThemeProvider>,
  );

const section = () => screen.getByRole("region", { name: "How I use AI" });

describe("HowIUseAI", () => {
  it("is the first section, named and numbered", () => {
    renderHowIUseAI();

    const heading = screen.getByRole("heading", {
      level: 2,
      name: "How I use AI",
    });
    expect(section()).toBe(heading.closest("section"));
    expect(heading).toHaveAttribute("data-number", "01");
  });

  it("opens on the line that holds the section together", () => {
    renderHowIUseAI();

    expect(section()).toHaveTextContent("The questions are mine.");
    expect(within(section()).getByText("mine").tagName).toBe("EM");
  });

  it("pairs what the agent does with what I do, as a real table", () => {
    renderHowIUseAI();

    const table = within(section()).getByRole("table", {
      name: "What the agent does, and what I do",
    });
    expect(
      within(table)
        .getAllByRole("columnheader")
        .map(({ textContent }) => textContent),
    ).toEqual(["The agent", "Me"]);
    // Four pairs, each a row: the agent's cell, then mine.
    const rows = within(table).getAllByRole("row").slice(1);
    expect(rows).toHaveLength(4);
    rows.forEach((row) => {
      expect(within(row).getAllByRole("cell")).toHaveLength(2);
    });
  });

  it("does not reuse the ticked stages of How I test", () => {
    renderHowIUseAI();

    // How I test skims as stages of ticked points; this one must not, or the
    // two read as the same template. No diagram either: a loop and a flow
    // were both tried and dropped on 2026-10-19.
    expect(within(section()).queryAllByRole("list")).toHaveLength(0);
    expect(section().textContent).not.toContain("✓");
  });

  it("claims only the work I did myself", () => {
    renderHowIUseAI();

    // I built the spec-change check: agent instructions and a pipeline.
    expect(section()).toHaveTextContent(
      "I built it: the agent instructions and the pipeline",
    );
    // The agent pilot was built by other engineers; I tested it and reported
    // the gaps, so nothing here says I wrote or piloted those agents.
    expect(section()).toHaveTextContent(
      "our engineers built and released to us",
    );
    expect(
      within(section()).queryByText(/agentic testing procedures/i),
    ).toBeNull();
    expect(within(section()).queryByText(/^Pilot in-house/i)).toBeNull();
  });

  it("keeps clients, systems and internal tools confidential", () => {
    renderHowIUseAI();

    expect(
      within(section()).queryByText(
        /TestPilot|MCP|Broadridge|SharePoint|\bPBI\b/,
      ),
    ).toBeNull();
  });
});
