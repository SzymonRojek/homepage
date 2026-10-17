import { fireEvent, render, screen, within } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { describe, expect, it, vi } from "vitest";
import { themeLight } from "../../../../core/App/theme";
import type { CaseStudy as CaseStudyData } from "../projectsData";
import { CaseStudy } from ".";

const caseStudy: CaseStudyData = {
  summary: "A tested site.",
  developer: {
    headline: "Built static.",
    points: ["React and TypeScript."],
    stack: ["React"],
  },
  tester: {
    headline: "Gated in CI.",
    points: ["Playwright on every push."],
    stack: ["Playwright"],
  },
  problem: ["Recruiters can't verify a CV."],
  constraints: ["Static hosting."],
  diagrams: [{ title: "Pipeline", steps: ["Build", "Deploy"] }],
  decisions: [
    { decision: "Static data", why: "Rate limits.", tradeOff: "Manual edits." },
  ],
  quality: [{ area: "Testing", text: "Unit and e2e tests." }],
};

const renderCaseStudy = () =>
  render(
    <ThemeProvider theme={themeLight}>
      <CaseStudy title="This portfolio" repo="homepage" caseStudy={caseStudy} />
    </ThemeProvider>,
  );

describe("CaseStudy", () => {
  it("shows the summary without expanding, with no stat boxes", () => {
    renderCaseStudy();

    const article = screen.getByRole("article", { name: "This portfolio" });
    expect(article).toHaveAttribute("id", "case-study-homepage");
    expect(within(article).getByText("A tested site.")).toBeVisible();

    expect(within(article).queryByLabelText("Impact")).not.toBeInTheDocument();
  });

  it("has no links of its own: the card links to the code and the demo", () => {
    renderCaseStudy();

    expect(
      screen.queryByRole("link", { name: "GitHub Repository" }),
    ).not.toBeInTheDocument();
    expect(screen.getByRole("article")).toHaveAttribute("tabindex", "-1");
    // No "repo · language" line: the card and the title say enough.
    expect(screen.queryByText(/homepage ·/)).not.toBeInTheDocument();
  });
  it("keeps the technical details collapsed until it is opened", () => {
    renderCaseStudy();

    const details = screen.getByText("Technical details").closest("details");
    expect(details).not.toHaveAttribute("open");

    fireEvent.click(screen.getByText("Technical details"));

    expect(details).toHaveAttribute("open");
  });

  it("closes the technical details from their end, back at its toggle", () => {
    renderCaseStudy();
    const toggle = screen.getByText("Technical details");
    const details = toggle.closest("details");
    // Safari doesn't scroll to a focused element by itself (jsdom has no
    // scrollIntoView at all).
    const scrollIntoView = vi.fn();
    toggle.scrollIntoView = scrollIntoView;
    fireEvent.click(toggle);

    fireEvent.click(
      screen.getByRole("button", { name: "Close the technical details" }),
    );

    expect(details).not.toHaveAttribute("open");
    expect(toggle).toHaveFocus();
    expect(scrollIntoView).toHaveBeenCalledWith({ block: "center" });
  });

  it("has every part of the case study", () => {
    renderCaseStudy();

    expect(
      screen
        .getAllByRole("heading", { level: 4, hidden: true })
        .map(({ textContent }) => textContent),
    ).toEqual([
      "How I proved it works",
      "How I built it",
      "Problem",
      "Constraints",
      "Architecture",
      "Key decisions and trade-offs",
      "Testing, performance, accessibility and security",
    ]);
    expect(
      screen.getByRole("list", { name: "Pipeline", hidden: true }),
    ).toBeInTheDocument();
  });

  it("shows decisions in a table with decision, why and trade-off", () => {
    renderCaseStudy();

    const table = screen.getByRole("table", { hidden: true });
    expect(
      within(table)
        .getAllByRole("columnheader", { hidden: true })
        .map(({ textContent }) => textContent),
    ).toEqual(["Decision", "Why", "Trade-off"]);
    expect(
      within(table).getByRole("rowheader", {
        name: "Static data",
        hidden: true,
      }),
    ).toBeInTheDocument();
  });

  it("shows the content of every part, not only the headings", () => {
    renderCaseStudy();
    fireEvent.click(screen.getByText("Technical details"));

    expect(screen.getByText("Recruiters can't verify a CV.")).toBeVisible();
    expect(screen.getByText("Static hosting.")).toBeVisible();
    expect(screen.getByText("Unit and e2e tests.")).toBeVisible();
    // "Lessons learned" was removed on purpose.
    expect(screen.queryByText(/Lessons learned/)).toBeNull();
  });

  it("shows both columns, tester first, each with its own link target", () => {
    renderCaseStudy();

    const columns = screen.getAllByRole("region", { name: /^How I/ });
    expect(columns.map((column) => column.id)).toEqual([
      "case-study-homepage-tester",
      "case-study-homepage-developer",
    ]);
    expect(
      columns.map((column) => column.getAttribute("aria-labelledby")),
    ).toEqual([
      "case-study-homepage-tester-title",
      "case-study-homepage-developer-title",
    ]);
    expect(columns[0]).toHaveAccessibleName("How I proved it works");
    expect(columns[1]).toHaveAccessibleName("How I built it");
    expect(screen.getByText("Gated in CI.")).toBeVisible();
    expect(screen.getByText("Built static.")).toBeVisible();
    expect(
      within(
        screen.getByRole("list", { name: "Automation view stack" }),
      ).getByText("Playwright"),
    ).toBeVisible();
    expect(
      within(
        screen.getByRole("list", { name: "Developer view stack" }),
      ).getByText("React"),
    ).toBeVisible();
  });

  it("shows a CI pipeline in a lens instead of empty points", () => {
    render(
      <ThemeProvider theme={themeLight}>
        <CaseStudy
          title="This portfolio"
          repo="homepage"
          caseStudy={{
            ...caseStudy,
            tester: {
              headline: "Gated in CI.",
              points: [],
              stack: [],
              pipeline: {
                name: "ci.yml",
                checks: ["Lint", "Unit tests"],
                result: "Every check passes",
                badgeURL: "https://example.com/badge.svg",
                workflowURL: "https://example.com/ci",
                testsURL: "https://example.com/e2e",
              },
            },
          }}
        />
      </ThemeProvider>,
    );

    const checks = screen.getByRole("list", { name: "CI checks" });
    expect(within(checks).getAllByRole("listitem")).toHaveLength(2);
    expect(screen.getByText("Every check passes")).toBeVisible();
    expect(screen.getByRole("link", { name: "CI status" })).toHaveAttribute(
      "href",
      "https://example.com/ci",
    );
    expect(
      screen.getByRole("link", { name: "See the end-to-end tests" }),
    ).toHaveAttribute("href", "https://example.com/e2e");
    // The tester lens shows the pipeline, not the points of the default fixture.
    expect(screen.queryByText("Playwright on every push.")).toBeNull();
  });

  it("replaces the summary with the story when there is one", () => {
    render(
      <ThemeProvider theme={themeLight}>
        <CaseStudy
          title="This portfolio"
          repo="homepage"
          caseStudy={{
            ...caseStudy,
            story: {
              brief: "Recruiters need proof.",
              researchAgainst: "Typical CVs",
              research: [],
              solution: [],
              value: [],
            },
          }}
        />
      </ThemeProvider>,
    );

    expect(screen.getByText("Recruiters need proof.")).toBeVisible();
    expect(screen.queryByText("A tested site.")).not.toBeInTheDocument();
    expect(
      screen.getByRole("list", { name: "How I solved it" }),
    ).toBeInTheDocument();
  });
});
