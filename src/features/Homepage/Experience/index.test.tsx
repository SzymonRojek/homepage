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
      period: "Jan 2024 – present",
      groups: [{ title: "Testing", points: ["Write tests."] }],
    },
    {
      role: "Tester",
      company: "Past Co",
      details: "Retail",
      period: "2020 – 2023",
      groups: [{ title: "Manual", points: ["Run tests."] }],
    },
  ],
  education: [
    { title: "Certificate", school: "Board", year: "2025" },
    { title: "Course", school: "School" },
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
    expect(within(section).getByText("Current Co · Finance")).toBeVisible();
    expect(within(section).getByText("Jan 2024 – present")).toBeVisible();
    expect(within(section).getByText("2020 – 2023")).toBeVisible();
    expect(within(section).getByText("Write tests.")).toBeVisible();
  });

  it("shows the year only for education items that have one", () => {
    renderExperience();

    const items = screen
      .getAllByRole("listitem")
      .filter((item) => /Certificate|Course/.test(item.textContent ?? ""));

    expect(items[0]).toHaveTextContent("2025");
    expect(items[1]).toHaveTextContent(/^CourseSchool$/);
  });
});
