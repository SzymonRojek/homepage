import { render, screen, within } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { describe, expect, it, vi } from "vitest";
import { themeLight } from "../../../core/App/theme";
import { Recommendations } from ".";

vi.mock("../recommendationsData", () => ({
  recommendationsHeading: "Recommendations",
  headline: {
    text: "A great tester to work with",
    highlight: "work with",
    from: "Bob Jones",
  },
  recommendations: [
    {
      quote: "Finds the root cause.",
      highlight: "root cause",
      name: "Ann Smith",
      role: "Developer at Acme",
      relation: "worked with me on the same team",
      date: "May 2025",
    },
    {
      quote: "Clear bug reports.\n\nA great tester to work with.",
      highlight: "Clear bug reports",
      name: "Bob Jones",
      role: "Engineer at Acme",
      relation: "worked with me on a different team",
      date: "Jan 2025",
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
  it("names the section with a heading for screen readers", () => {
    renderRecommendations();

    const heading = screen.getByRole("heading", {
      level: 2,
      name: "Recommendations",
    });
    expect(screen.getByRole("region", { name: "Recommendations" })).toBe(
      heading.closest("section"),
    );
    // "Peer-reviewed by others" was removed on purpose.
    expect(screen.queryByText(/Peer-reviewed/)).toBeNull();
  });

  it("marks each card as a LinkedIn recommendation, quietly", () => {
    renderRecommendations();

    const items = within(
      screen.getByRole("list", { name: "Recommendations from LinkedIn" }),
    ).getAllByRole("listitem");
    // A decorative mark per card, not a link: the originals aren't linked.
    for (const item of items) {
      expect(item.querySelector("svg")).toHaveAttribute("aria-hidden", "true");
      expect(within(item).queryByRole("link")).toBeNull();
    }
  });

  it("quotes each colleague word for word, the byline first", () => {
    renderRecommendations();

    const items = within(
      screen.getByRole("list", { name: "Recommendations from LinkedIn" }),
    ).getAllByRole("listitem");
    expect(items).toHaveLength(2);
    expect(within(items[0]).getByRole("blockquote")).toHaveTextContent(
      /^Finds the root cause\.$/,
    );
    // Who, then what: the name, then the role with the date, come before
    // the quote.
    expect(items[0]).toHaveTextContent(
      /^Ann SmithDeveloper at AcmeMay ’25Finds the root cause\.$/,
    );
  });

  it("keeps a recommendation's paragraphs as they are on LinkedIn", () => {
    renderRecommendations();

    const items = within(
      screen.getByRole("list", { name: "Recommendations from LinkedIn" }),
    ).getAllByRole("listitem");
    const paragraphs = within(items[1])
      .getByRole("blockquote")
      .querySelectorAll("p");
    expect([...paragraphs].map((p) => p.textContent)).toEqual([
      "Clear bug reports.",
      "A great tester to work with.",
    ]);
  });

  it("dates each recommendation short, with a machine-readable month", () => {
    renderRecommendations();

    const items = within(
      screen.getByRole("list", { name: "Recommendations from LinkedIn" }),
    ).getAllByRole("listitem");
    expect(items[0].querySelector("time")).toHaveAttribute(
      "datetime",
      "2025-05",
    );
    expect(items[1].querySelector("time")).toHaveAttribute(
      "datetime",
      "2025-01",
    );
    expect(items[1].querySelector("time")).toHaveTextContent(/^Jan ’25$/);
  });

  it("marks the key words of each recommendation", () => {
    renderRecommendations();

    const items = within(
      screen.getByRole("list", { name: "Recommendations from LinkedIn" }),
    ).getAllByRole("listitem");
    expect(items[0].querySelector("mark")).toHaveTextContent(/^root cause$/);
    expect(items[1].querySelector("mark")).toHaveTextContent(
      /^Clear bug reports$/,
    );
  });

  it("shows one sentence large above them, still, with its end marked", () => {
    renderRecommendations();

    const [pull] = screen.getAllByRole("figure");
    expect(pull).toHaveTextContent(/^“…A great tester to work with\.”$/);
    expect(pull.querySelector("mark")).toHaveTextContent(/^work with$/);
    expect(screen.queryByRole("button")).toBeNull();
  });
});
