import { render, screen, within } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { describe, expect, it, vi } from "vitest";
import { themeLight } from "../../../core/App/theme";
import { Recommendations } from ".";

vi.mock("../recommendationsData", () => ({
  recommendationsHeading: "Recommendations",
  recommendationsTitle: {
    lines: ["In the words of", "the people I’ve worked with"],
    highlight: "worked with",
  },
  recommendations: [
    {
      quote: "Finds the root cause.",
      highlight: "root cause",
      name: "Ann Smith",
      role: "Developer at Acme",
      relation: "worked with me on the same team",
      date: "May 2025",
      source: "linkedin",
    },
    {
      quote: "Clear bug reports.\n\nA great tester to work with.",
      highlight: "Clear bug reports",
      name: "Bob Jones",
      role: "Engineer at Acme",
      relation: "sent this to me by email, not through LinkedIn",
      date: "Jan 2025",
      source: "email",
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
  it("names the section with its numbered heading", () => {
    renderRecommendations();

    const heading = screen.getByRole("heading", {
      level: 2,
      name: "Recommendations",
    });
    expect(screen.getByRole("region", { name: "Recommendations" })).toBe(
      heading.closest("section"),
    );
    // The last section: "06 / …" in front of its name.
    expect(heading).toHaveAttribute("data-number", "06");
    // "Peer-reviewed by others" was removed on purpose.
    expect(screen.queryByText(/Peer-reviewed/)).toBeNull();
  });

  it("marks where each card's words came from, quietly", () => {
    renderRecommendations();

    const items = within(
      screen.getByRole("list", { name: "Recommendations from colleagues" }),
    ).getAllByRole("listitem");
    // A decorative mark per card, not a link: the originals aren't linked.
    for (const item of items) {
      expect(item.querySelector("svg")).toHaveAttribute("aria-hidden", "true");
      expect(within(item).queryByRole("link")).toBeNull();
    }
    // The at-sign stands for the one that arrived by email, so no card
    // claims LinkedIn for words that never appeared there.
    expect(items[0].querySelector("svg")).toHaveAttribute(
      "data-source",
      "linkedin",
    );
    expect(items[1].querySelector("svg")).toHaveAttribute(
      "data-source",
      "email",
    );
  });

  it("quotes each colleague word for word, the byline first", () => {
    renderRecommendations();

    const items = within(
      screen.getByRole("list", { name: "Recommendations from colleagues" }),
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
      screen.getByRole("list", { name: "Recommendations from colleagues" }),
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
      screen.getByRole("list", { name: "Recommendations from colleagues" }),
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
      screen.getByRole("list", { name: "Recommendations from colleagues" }),
    ).getAllByRole("listitem");
    expect(items[0].querySelector("mark")).toHaveTextContent(/^root cause$/);
    expect(items[1].querySelector("mark")).toHaveTextContent(
      /^Clear bug reports$/,
    );
  });

  it("opens with one big line, its key word marked, before the cards", () => {
    renderRecommendations();

    const line = screen.getByText(
      (_, element) =>
        element?.tagName === "P" &&
        element.textContent === "In the words of the people I’ve worked with",
    );
    expect(line.querySelector("mark")).toHaveTextContent(/^worked with$/);
    // Two lines on purpose, the marked words ending the second.
    expect(Array.from(line.children, (row) => row.textContent)).toEqual([
      "In the words of",
      "the people I’ve worked with",
    ]);
    expect(
      line.compareDocumentPosition(
        screen.getByRole("list", { name: "Recommendations from colleagues" }),
      ),
    ).toBe(Node.DOCUMENT_POSITION_FOLLOWING);
    // Jim's sentence shown large as a quote was replaced on purpose.
    expect(screen.queryByText(/^“…/)).toBeNull();
    expect(screen.queryByRole("button")).toBeNull();
  });
});
