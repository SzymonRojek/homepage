import { fireEvent, render, screen, within } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { describe, expect, it } from "vitest";
import { themeLight } from "../../../../core/App/theme";
import type { CaseStudy as CaseStudyData } from "../projectsData";
import type { ProjectView } from "../LensSwitch";
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
  lessons: ["Write the failing test first."],
};

const renderCaseStudy = (demoUrl?: string, view?: ProjectView) =>
  render(
    <ThemeProvider theme={themeLight}>
      <CaseStudy
        title="This portfolio"
        repo="homepage"
        language="TypeScript"
        demoUrl={demoUrl}
        caseStudy={caseStudy}
        view={view}
      />
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

  it("links to the repository, and to a demo only when there is one", () => {
    const { unmount } = renderCaseStudy();

    expect(
      screen.getByRole("link", { name: "GitHub Repository" }),
    ).toHaveAttribute("href", "https://github.com/SzymonRojek/homepage");
    expect(
      screen.queryByRole("link", { name: "Live demo" }),
    ).not.toBeInTheDocument();

    unmount();
    renderCaseStudy("https://example.com");

    expect(screen.getByRole("link", { name: "Live demo" })).toHaveAttribute(
      "rel",
      "noreferrer",
    );
  });

  it("keeps the full case study collapsed until it is opened", () => {
    renderCaseStudy();

    const details = screen
      .getByText("Read the full case study")
      .closest("details");
    expect(details).not.toHaveAttribute("open");

    fireEvent.click(screen.getByText("Read the full case study"));

    expect(details).toHaveAttribute("open");
  });

  it("has every part of the case study", () => {
    renderCaseStudy();

    expect(
      screen
        .getAllByRole("heading", { level: 4, hidden: true })
        .map(({ textContent }) => textContent),
    ).toEqual([
      "How I built it",
      "How I proved it works",
      "Problem",
      "Constraints",
      "Architecture",
      "Key decisions and trade-offs",
      "Testing, performance, accessibility and security",
      "Lessons learned",
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
    fireEvent.click(screen.getByText("Read the full case study"));

    expect(screen.getByText("Recruiters can't verify a CV.")).toBeVisible();
    expect(screen.getByText("Static hosting.")).toBeVisible();
    expect(screen.getByText("Unit and e2e tests.")).toBeVisible();
    expect(screen.getByText("Write the failing test first.")).toBeVisible();
  });

  it("shows the developer and the tester view side by side by default", () => {
    renderCaseStudy();

    expect(
      screen.getByRole("heading", { level: 4, name: "How I built it" }),
    ).toBeVisible();
    expect(
      screen.getByRole("heading", { level: 4, name: "How I proved it works" }),
    ).toBeVisible();
    expect(screen.getByText("Built static.")).toBeVisible();
    expect(screen.getByText("Playwright on every push.")).toBeVisible();
    expect(
      within(
        screen.getByRole("list", { name: "Developer view stack" }),
      ).getByText("React"),
    ).toBeVisible();
    expect(
      within(screen.getByRole("list", { name: "Tester view stack" })).getByText(
        "Playwright",
      ),
    ).toBeVisible();
  });

  it("shows only the developer view when it is chosen", () => {
    renderCaseStudy(undefined, "developer");

    expect(screen.getByText("Built static.")).toBeVisible();
    expect(screen.queryByText("Gated in CI.")).not.toBeInTheDocument();
  });

  it("shows only the tester view when it is chosen", () => {
    renderCaseStudy(undefined, "tester");

    expect(screen.getByText("Gated in CI.")).toBeVisible();
    expect(screen.queryByText("Built static.")).not.toBeInTheDocument();
  });

  it("shows a CI pipeline in a lens instead of empty points", () => {
    render(
      <ThemeProvider theme={themeLight}>
        <CaseStudy
          title="This portfolio"
          repo="homepage"
          language="TypeScript"
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
          language="TypeScript"
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
