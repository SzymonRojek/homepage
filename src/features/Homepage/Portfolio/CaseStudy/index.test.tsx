import { fireEvent, render, screen, within } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { describe, expect, it } from "vitest";
import { themeLight } from "../../../../core/App/theme";
import type { CaseStudy as CaseStudyData } from "../projectsData";
import { CaseStudy } from ".";

const caseStudy: CaseStudyData = {
  summary: "A tested site.",
  impact: [
    { value: "0", label: "API calls" },
    { value: "40+", label: "e2e tests" },
  ],
  problem: ["Recruiters can't verify a CV."],
  constraints: ["Static hosting."],
  diagrams: [{ title: "Pipeline", steps: ["Build", "Deploy"] }],
  decisions: [
    { decision: "Static data", why: "Rate limits.", tradeOff: "Manual edits." },
  ],
  quality: [{ area: "Testing", text: "Unit and e2e tests." }],
  lessons: ["Write the failing test first."],
};

const renderCaseStudy = (demoUrl?: string) =>
  render(
    <ThemeProvider theme={themeLight}>
      <CaseStudy
        title="This portfolio"
        repo="homepage"
        language="TypeScript"
        demoUrl={demoUrl}
        caseStudy={caseStudy}
      />
    </ThemeProvider>,
  );

describe("CaseStudy", () => {
  it("shows the summary and impact without expanding", () => {
    renderCaseStudy();

    const article = screen.getByRole("article", { name: "This portfolio" });
    expect(article).toHaveAttribute("id", "case-study-homepage");
    expect(within(article).getByText("A tested site.")).toBeVisible();

    const impact = within(article).getByLabelText("Impact");
    expect(within(impact).getByText("0")).toBeVisible();
    expect(within(impact).getByText("API calls")).toBeVisible();
    expect(within(impact).getByText("40+")).toBeVisible();
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
});
