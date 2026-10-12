import { fireEvent, render, screen, within } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { describe, expect, it, vi } from "vitest";
import { themeLight } from "../../../../core/App/theme";
import type { Project } from "../projectsData";
import { ProjectCard } from ".";

const project: Project = {
  title: "Talent Outreach",
  repo: "talent-outreach",
  language: "TypeScript",
  category: "Testing",
  description: "A longer description.",
  teaser: "Job offers to the right candidates.",
  facts: ["Recruitment tool", "Unit, API and e2e tests"],
};

const renderCard = (overrides: Partial<Project> = {}, expanded = false) => {
  const onToggle = vi.fn();
  render(
    <ThemeProvider theme={themeLight}>
      <ul>
        <ProjectCard
          project={{ ...project, ...overrides }}
          expanded={expanded}
          onToggle={onToggle}
        />
      </ul>
    </ThemeProvider>,
  );
  return onToggle;
};

describe("ProjectCard", () => {
  it("shows the name, one sentence and facts, without an image", () => {
    renderCard();

    expect(
      screen.getByRole("heading", { level: 3, name: "Talent Outreach" }),
    ).toBeVisible();
    // The card stays short: no repo or language line.
    expect(screen.queryByText(/talent-outreach ·/)).toBeNull();
    expect(
      screen.getByText("Job offers to the right candidates."),
    ).toBeVisible();
    expect(document.querySelector("img")).toBeNull();
    expect(
      within(
        screen.getByRole("list", { name: "Talent Outreach: key facts" }),
      ).getAllByRole("listitem"),
    ).toHaveLength(2);
  });

  it("falls back to the description without a teaser", () => {
    renderCard({ teaser: undefined, facts: undefined });

    expect(screen.getByText("A longer description.")).toBeVisible();
  });

  it("links to the code, and to a demo only when there is one", () => {
    renderCard();

    const code = screen.getByRole("link", { name: "Code" });
    expect(code).toHaveAttribute(
      "href",
      "https://github.com/SzymonRojek/talent-outreach",
    );
    expect(code).toHaveAttribute("target", "_blank");
    expect(code).toHaveAttribute("rel", "noreferrer");
    expect(screen.queryByRole("link", { name: "Live demo" })).toBeNull();
  });

  it("shows the live demo link when there is one", () => {
    renderCard({ demoUrl: "https://example.com" });

    expect(screen.getByRole("link", { name: "Live demo" })).toHaveAttribute(
      "href",
      "https://example.com",
    );
  });

  it("opens the case study with a button that says whether it is open", () => {
    const onToggle = renderCard();

    const button = screen.getByRole("button", { name: "Read the case study" });
    expect(button).toHaveAttribute("aria-expanded", "false");
    expect(button).not.toHaveAttribute("aria-controls");

    fireEvent.click(button);
    expect(onToggle).toHaveBeenCalledOnce();
  });

  it("points the button at the open case study", () => {
    renderCard({}, true);

    const button = screen.getByRole("button", { name: "Close the case study" });
    expect(button).toHaveAttribute("aria-expanded", "true");
    expect(button).toHaveAttribute(
      "aria-controls",
      "case-study-talent-outreach",
    );
  });
});
