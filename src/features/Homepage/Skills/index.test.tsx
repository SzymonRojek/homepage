import { render, screen, within } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { describe, expect, it, vi } from "vitest";
import { themeLight } from "../../../core/App/theme";
import { Skills } from ".";

vi.mock("../experienceData", () => ({
  education: [
    {
      title: "ISTQB",
      detail: "Preparing for the exam now.",
      year: "Now",
      next: true,
    },
    { title: "React School", detail: "React workshops", year: "2022" },
  ],
}));

vi.mock("../skillsData", () => ({
  testingSkills: ["SQL"],
  automationSkills: ["Playwright"],
  programmingSkills: ["React"],
  tools: ["Git", "VS Code"],
  languages: [
    { name: "Polish", level: "Native" },
    { name: "English", level: "Professional working proficiency" },
  ],
}));

describe("Skills", () => {
  it("shows the three groups, learning, the tools and the languages", () => {
    render(
      <ThemeProvider theme={themeLight}>
        <Skills />
      </ThemeProvider>,
    );

    const section = screen.getByRole("region", { name: "Skills & learning" });
    expect(
      within(section)
        .getAllByRole("heading", { level: 3 })
        .map(({ textContent }) => textContent),
    ).toEqual(["Testing & data", "Test automation", "Programming", "Learning"]);
    expect(within(section).getByText("Tools:").closest("p")).toHaveTextContent(
      "Tools: Git · VS Code",
    );
    expect(
      within(section).getByText("Languages:").closest("p"),
    ).toHaveTextContent(
      "Languages: Polish (native) · English (professional working proficiency)",
    );
  });

  it("lists what I'm learning: the next course tagged, then the done ones", () => {
    render(
      <ThemeProvider theme={themeLight}>
        <Skills />
      </ThemeProvider>,
    );

    const courses = within(
      screen.getByRole("list", { name: "Courses and certifications" }),
    ).getAllByRole("listitem");
    expect(courses.map(({ textContent }) => textContent)).toEqual([
      "ISTQBNextPreparing for the exam now.",
      "React School2022 · React workshops",
    ]);
  });
});
