import { render, screen, within } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { describe, expect, it, vi } from "vitest";
import { themeLight } from "../../../core/App/theme";
import { Recommendations } from ".";

vi.mock("../recommendationsData", () => ({
  headline: {
    text: "a great tester to work with",
    highlight: "work with",
    from: "Bob Jones",
  },
  recommendations: [
    {
      quote: "Finds the root cause.",
      name: "Ann Smith",
      role: "Developer at Acme",
      relation: "worked with me on the same team",
      date: "May 2025",
    },
    {
      quote: "Clear bug reports.",
      name: "Bob Jones",
      role: "Engineer at Acme",
      relation: "worked with me on a different team",
      date: "January 2025",
    },
  ],
}));

const renderRecommendations = () =>
  render(
    <ThemeProvider theme={themeLight}>
      <Recommendations />
    </ThemeProvider>,
  );

describe("Recommendations", () => {
  it("quotes each colleague with name, role, relation and date", () => {
    renderRecommendations();

    const items = within(
      screen.getByRole("list", { name: "Recommendations" }),
    ).getAllByRole("listitem");
    expect(items).toHaveLength(2);
    expect(within(items[0]).getByRole("blockquote")).toHaveTextContent(
      "Finds the root cause.",
    );
    expect(items[0]).toHaveTextContent(
      "Ann SmithDeveloper at Acme, worked with me on the same team · May 2025",
    );
  });

  it("shows one sentence large, with its author and role", () => {
    renderRecommendations();

    const [pull] = screen.getAllByRole("figure");
    expect(pull).toHaveTextContent(
      "“…a great tester to work with.”Bob Jones, Engineer at Acme",
    );
    expect(pull.querySelector("mark")).toHaveTextContent(/^work with$/);
  });

  it("links to the originals on LinkedIn in a new tab", () => {
    renderRecommendations();

    const link = screen.getByRole("link", { name: "Read them on LinkedIn" });
    expect(link).toHaveAttribute(
      "href",
      expect.stringMatching(
        /linkedin\.com\/in\/.+\/details\/recommendations\/$/,
      ),
    );
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noreferrer");
  });
});
