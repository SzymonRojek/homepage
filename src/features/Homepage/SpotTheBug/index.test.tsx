import { fireEvent, render, screen, within } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { describe, expect, it, vi } from "vitest";
import { themeLight } from "../../../core/App/theme";
import { SpotTheBug } from ".";

vi.mock("../spotTheBugData", () => ({
  spotTheBug: {
    title: "Spot the bug",
    intro: "One value is wrong.",
    caption: "A made-up record",
    levels: [
      {
        name: "Easy",
        fields: [
          { field: "Name", before: "Ann", after: "Ann", fine: "Name is fine." },
          { field: "Shares", before: "1,250", after: "125" },
        ],
        checks: ["Records: 1 = 1"],
        found: "A digit was lost.",
      },
      {
        name: "Hard",
        fields: [
          { field: "Date", before: "03/04", after: "04-03" },
          {
            field: "Total",
            before: "1,000",
            after: "1000",
            fine: "Same number.",
          },
        ],
        checks: ["Total: 1000 = 1000"],
        found: "The date changed its meaning.",
      },
    ],
  },
}));

const renderGame = () =>
  render(
    <ThemeProvider theme={themeLight}>
      <SpotTheBug />
    </ThemeProvider>,
  );

const pick = (name: RegExp) =>
  fireEvent.click(screen.getByRole("button", { name }));

const level = (name: string) =>
  within(screen.getByRole("group", { name: "Difficulty" })).getByRole(
    "button",
    { name },
  );

describe("SpotTheBug", () => {
  it("starts at level 1 with its record and quick checks", () => {
    renderGame();

    expect(level("Level 1 · Easy")).toHaveAttribute("aria-pressed", "true");
    expect(level("Level 2 · Hard")).toHaveAttribute("aria-pressed", "false");
    const table = screen.getByRole("table", { name: "A made-up record" });
    expect(within(table).getAllByRole("rowheader")).toHaveLength(2);
    expect(
      screen.getByRole("list", { name: "Quick checks that pass" }),
    ).toHaveTextContent("Records: 1 = 1");
    expect(screen.getByRole("status")).toHaveTextContent("");
  });

  it("says why a value that only changed its format is fine", () => {
    renderGame();

    pick(/^Name in the new system/);

    expect(screen.getByRole("status")).toHaveTextContent("Name is fine.");
    expect(screen.getByRole("button", { name: "Show me" })).toBeVisible();
  });

  it("explains the bug once found and offers the next level", () => {
    renderGame();

    pick(/^Shares in the new system/);

    expect(screen.getByRole("status")).toHaveTextContent(
      /^Good catch\. A digit was lost\./,
    );
    expect(screen.queryByRole("button", { name: "Show me" })).toBeNull();

    fireEvent.click(screen.getByRole("button", { name: "Next level →" }));

    expect(level("Level 2 · Hard")).toHaveAttribute("aria-pressed", "true");
    expect(screen.getByRole("status")).toHaveTextContent("");
    expect(
      screen.getByRole("button", { name: /^Date in the new system/ }),
    ).toBeVisible();
  });

  it("lets the visitor choose a level, and starts it fresh", () => {
    renderGame();
    pick(/^Name in the new system/);

    fireEvent.click(level("Level 2 · Hard"));

    expect(screen.getByRole("status")).toHaveTextContent("");
    expect(
      screen.getByRole("list", { name: "Quick checks that pass" }),
    ).toHaveTextContent("Total: 1000 = 1000");
  });

  it("gives the answer on request, and no next level after the last", () => {
    renderGame();
    fireEvent.click(level("Level 2 · Hard"));

    fireEvent.click(screen.getByRole("button", { name: "Show me" }));

    expect(screen.getByRole("status")).toHaveTextContent(
      /^Here it is\. The date changed its meaning\./,
    );
    expect(screen.queryByRole("button", { name: "Next level →" })).toBeNull();
  });
});
