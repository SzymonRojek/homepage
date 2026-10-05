import { render, screen, within } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { describe, expect, it } from "vitest";
import { themeLight } from "../../../../core/App/theme";
import { FlowDiagram } from ".";

describe("FlowDiagram", () => {
  it("lists the steps in order under the diagram title", () => {
    render(
      <ThemeProvider theme={themeLight}>
        <FlowDiagram title="Pipeline" steps={["Build", "Test", "Deploy"]} />
      </ThemeProvider>,
    );

    const steps = screen.getByRole("list", { name: "Pipeline" });
    expect(
      within(steps)
        .getAllByRole("listitem")
        .map(({ textContent }) => textContent),
    ).toEqual(["Build", "Test", "Deploy"]);
  });
});
