import { render, screen, within } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { describe, expect, it } from "vitest";
import { themeLight } from "../../../../core/App/theme";
import type { Story as StoryData } from "../projectsData";
import { Story } from ".";

const story: StoryData = {
  brief: "A charity needs a newsletter.",
  researchAgainst: "Big platforms",
  research: [{ market: "Charge per contact.", mine: "Free to run." }],
  solution: ["Server-side login."],
  value: ["Costs nothing."],
};

const renderStory = (overrides: Partial<StoryData> = {}) =>
  render(
    <ThemeProvider theme={themeLight}>
      <Story story={{ ...story, ...overrides }} />
    </ThemeProvider>,
  );

describe("Story", () => {
  it("tells the brief, research, solution and value in order", () => {
    renderStory();

    const steps = screen.getByRole("list", { name: "How I solved it" });
    expect(
      within(steps)
        .getAllByRole("heading", { level: 4 })
        .map(({ textContent }) => textContent),
    ).toEqual(["Brief", "Research", "Solution", "Value"]);
    expect(screen.getByText("A charity needs a newsletter.")).toBeVisible();
    expect(screen.getByText("Server-side login.")).toBeVisible();
    expect(screen.getByText("Costs nothing.")).toBeVisible();
  });

  it("compares what exists with my design in a table", () => {
    renderStory();

    const table = screen.getByRole("table");
    expect(
      within(table)
        .getAllByRole("columnheader")
        .map(({ textContent }) => textContent),
    ).toEqual(["Big platforms", "My design"]);
    const [market, mine] = within(table).getAllByRole("cell");
    expect(market).toHaveTextContent("Charge per contact.");
    expect(market).toHaveAttribute("data-label", "Big platforms");
    expect(mine).toHaveTextContent("Free to run.");
    expect(mine).toHaveAttribute("data-label", "My design");
  });

  it("shows the next step only when there is one", () => {
    const { unmount } = renderStory();
    expect(screen.queryByText(/Not built yet/)).not.toBeInTheDocument();

    unmount();
    renderStory({ nextStep: "Not built yet: delivery." });
    expect(screen.getByText("Not built yet: delivery.")).toBeVisible();
  });
});
