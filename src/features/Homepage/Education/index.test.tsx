import { render, screen, within } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { describe, expect, it, vi } from "vitest";
import { themeLight } from "../../../core/App/theme";
import { Education } from ".";

vi.mock("../experienceData", () => ({
  education: [
    { title: "Certificate", school: "Board", year: "2025" },
    { title: "Course", school: "School" },
  ],
}));

const renderEducation = () =>
  render(
    <ThemeProvider theme={themeLight}>
      <Education />
    </ThemeProvider>,
  );

describe("Education", () => {
  it("is its own section, with every item in data order", () => {
    renderEducation();

    const section = screen.getByRole("region", {
      name: "Education & certifications",
    });
    const items = within(section).getAllByRole("listitem");
    expect(items).toHaveLength(2);
    expect(items[0]).toHaveTextContent("Certificate");
    expect(items[0]).toHaveTextContent("Board");
  });

  it("shows the year only for items that have one", () => {
    renderEducation();

    const items = screen.getAllByRole("listitem");
    expect(items[0]).toHaveTextContent("2025");
    expect(items[1]).toHaveTextContent(/^CourseSchool$/);
    // No empty year badge is rendered for an item without a year.
    expect(items[1].querySelector("span")).toBeNull();
  });
});
