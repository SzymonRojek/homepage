import { render, screen, within } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { describe, expect, it, vi } from "vitest";
import { themeLight } from "../../../core/App/theme";
import { Education } from ".";

vi.mock("../experienceData", () => ({
  education: [
    { title: "Exam", detail: "Preparing now.", year: "Now", next: true },
    { title: "Course B", detail: "Newer", year: "2025" },
    { title: "Course A", detail: "Older", year: "2022" },
  ],
}));

const renderEducation = () =>
  render(
    <ThemeProvider theme={themeLight}>
      <Education />
    </ThemeProvider>,
  );

describe("Education", () => {
  it("is called Still learning", () => {
    renderEducation();

    expect(
      screen.getByRole("region", { name: "Still learning" }),
    ).toBeInTheDocument();
  });

  it("shows what I'm learning now as Next up", () => {
    renderEducation();

    const next = screen.getByRole("article", { name: "Exam" });
    expect(next).toHaveTextContent(/^Next upExamPreparing now\.$/);
  });

  it("lists the rest in data order, with year, title and detail", () => {
    renderEducation();

    const items = within(
      screen.getByRole("list", { name: "Courses" }),
    ).getAllByRole("listitem");
    expect(items.map(({ textContent }) => textContent)).toEqual([
      "2025Course BNewer",
      "2022Course AOlder",
    ]);
  });
});
