import { render, screen, within } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { describe, expect, it, vi } from "vitest";
import { themeLight } from "../../../core/App/theme";
import { Experience } from ".";

vi.mock("../experienceData", () => ({
  jobs: [
    {
      role: "Test Engineer",
      company: "Current Co",
      details: "Finance",
      period: "Jan 2024 – now",
      points: ["Write tests."],
    },
    {
      role: "Tester",
      company: "Past Co",
      details: "Retail",
      period: "2020 – 2023",
      points: ["Run tests."],
    },
  ],
}));

const renderExperience = () =>
  render(
    <ThemeProvider theme={themeLight}>
      <Experience />
    </ThemeProvider>,
  );

describe("Experience", () => {
  it("shows each job with its role, company and period", () => {
    renderExperience();

    const section = screen.getByRole("region", { name: "Experience" });
    expect(
      within(section).getByRole("heading", { name: "Test Engineer" }),
    ).toBeInTheDocument();
    expect(within(section).getByText("Current Co")).toBeVisible();
    expect(within(section).getByText("Finance")).toBeVisible();
    expect(within(section).getByText("Jan 2024 – now")).toBeVisible();
    expect(within(section).getByText("2020 – 2023")).toBeVisible();
    expect(within(section).getByText("Write tests.")).toBeVisible();
  });

  it("shows only jobs: education and languages have their own places", () => {
    renderExperience();

    const section = screen.getByRole("region", { name: "Experience" });
    expect(within(section).queryByText(/Education/)).toBeNull();
    expect(within(section).queryByText(/Languages/)).toBeNull();
  });
});
