import { fireEvent, render, screen, within } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { describe, expect, it, vi } from "vitest";
import { themeLight } from "../../../../core/App/theme";
import { LensSwitch, type ProjectView } from ".";

const renderSwitch = (view: ProjectView) => {
  const onChange = vi.fn();
  render(
    <ThemeProvider theme={themeLight}>
      <LensSwitch view={view} onChange={onChange} />
    </ThemeProvider>,
  );
  return onChange;
};

describe("LensSwitch", () => {
  it("offers both, developer and tester views in a labelled group", () => {
    renderSwitch("both");

    const group = screen.getByRole("group", { name: "View projects as" });
    expect(
      within(group)
        .getAllByRole("button")
        .map(({ textContent }) => textContent),
    ).toEqual(["Both", "Developer", "Tester"]);
  });

  it("marks only the current view as pressed", () => {
    renderSwitch("tester");

    expect(screen.getByRole("button", { name: "Tester" })).toHaveAttribute(
      "aria-pressed",
      "true",
    );
    expect(screen.getByRole("button", { name: "Both" })).toHaveAttribute(
      "aria-pressed",
      "false",
    );
    expect(screen.getByRole("button", { name: "Developer" })).toHaveAttribute(
      "aria-pressed",
      "false",
    );
  });

  it("reports the chosen view", () => {
    const onChange = renderSwitch("both");

    fireEvent.click(screen.getByRole("button", { name: "Developer" }));

    expect(onChange).toHaveBeenCalledWith("developer");
  });
});
