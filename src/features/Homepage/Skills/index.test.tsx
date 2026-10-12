import { render, screen, within } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { describe, expect, it, vi } from "vitest";
import { themeLight } from "../../../core/App/theme";
import { Skills } from ".";

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
  it("shows the three groups, the tools and the languages", () => {
    render(
      <ThemeProvider theme={themeLight}>
        <Skills />
      </ThemeProvider>,
    );

    const section = screen.getByRole("region", { name: "Skills" });
    expect(
      within(section)
        .getAllByRole("heading", { level: 3 })
        .map(({ textContent }) => textContent),
    ).toEqual(["Testing & data", "Test automation", "Programming"]);
    expect(within(section).getByText("Tools:").closest("p")).toHaveTextContent(
      "Tools: Git · VS Code",
    );
    expect(
      within(section).getByText("Languages:").closest("p"),
    ).toHaveTextContent(
      "Languages: Polish (native) · English (professional working proficiency)",
    );
  });
});
