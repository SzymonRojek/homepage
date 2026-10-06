import { render, screen, within } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { describe, expect, it } from "vitest";
import { themeLight } from "../../../../core/App/theme";
import type { Project } from "../projectsData";
import { Projects } from ".";

const createProject = (overrides: Partial<Project> = {}): Project => ({
  title: "Test suite",
  repo: "test-suite",
  language: "TypeScript",
  description: "A test suite.",
  category: "Testing",
  ...overrides,
});

const renderProjects = (projects: Project[]) =>
  render(
    <ThemeProvider theme={themeLight}>
      <Projects projects={projects} />
    </ThemeProvider>,
  );

describe("Projects", () => {
  it("shows test projects as tiles in data order", () => {
    renderProjects([
      createProject({ title: "First", repo: "first" }),
      createProject({ title: "Other app", repo: "app", category: "Other" }),
      createProject({ title: "Second", repo: "second" }),
    ]);

    const tiles = screen.getByRole("list", { name: "Test projects" });
    expect(
      within(tiles)
        .getAllByRole("heading")
        .map(({ textContent }) => textContent),
    ).toEqual(["First", "Second"]);
    expect(within(tiles).getByText("first · TypeScript")).toBeInTheDocument();
  });

  it("links each tile to its repository in a new tab", () => {
    renderProjects([createProject({ repo: "first" })]);

    const link = screen.getByRole("link", { name: "GitHub Repository" });
    expect(link).toHaveAttribute(
      "href",
      "https://github.com/SzymonRojek/first",
    );
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noreferrer");
  });

  it("shows a live demo link only when the project has one", () => {
    renderProjects([
      createProject({ repo: "with-demo", demoUrl: "https://example.com" }),
      createProject({ repo: "without-demo" }),
    ]);

    expect(screen.getAllByRole("link", { name: "Live demo" })).toHaveLength(1);
  });

  it("lists non-testing work under Other projects", () => {
    renderProjects([
      createProject(),
      createProject({ title: "Sign-in app", repo: "app", category: "Other" }),
    ]);

    const other = screen.getByRole("region", { name: "Other projects" });
    expect(within(other).getAllByRole("listitem")).toHaveLength(1);
    expect(other).toHaveTextContent("Sign-in app");
  });

  it("hides Other projects when there are none", () => {
    renderProjects([createProject()]);

    expect(
      screen.queryByRole("region", { name: "Other projects" }),
    ).not.toBeInTheDocument();
  });

  it("shows projects with a case study as articles, not as tiles", () => {
    renderProjects([
      createProject({ title: "Tile", repo: "tile" }),
      createProject({
        title: "Studied",
        repo: "studied",
        caseStudy: {
          summary: "Summary.",
          impact: [],
          problem: [],
          constraints: [],
          diagrams: [],
          decisions: [],
          quality: [],
          lessons: [],
        },
      }),
    ]);

    expect(
      screen.getByRole("article", { name: "Studied" }),
    ).toBeInTheDocument();
    const tiles = screen.getByRole("list", { name: "Test projects" });
    expect(within(tiles).queryByText("Studied")).not.toBeInTheDocument();
    expect(within(tiles).getByText("Tile")).toBeInTheDocument();
  });

  it("explains Other projects and links to a demo when there is one", () => {
    renderProjects([
      createProject({
        title: "Music site",
        repo: "music",
        category: "Other",
        demoUrl: "https://example.com/music",
      }),
      createProject({ title: "Sign-in app", repo: "app", category: "Other" }),
    ]);

    const other = screen.getByRole("region", { name: "Other projects" });
    expect(other).toHaveTextContent(/front-end background/i);
    const demos = within(other).getAllByRole("link", { name: "Live demo" });
    expect(demos).toHaveLength(1);
    expect(demos[0]).toHaveAttribute("href", "https://example.com/music");
    expect(within(other).getAllByRole("link", { name: "Code" })).toHaveLength(
      2,
    );
  });

  it("shows no empty tile list when every testing project is a case study", () => {
    renderProjects([
      createProject({
        repo: "studied",
        caseStudy: {
          summary: "Summary.",
          impact: [],
          problem: [],
          constraints: [],
          diagrams: [],
          decisions: [],
          quality: [],
          lessons: [],
        },
      }),
    ]);

    expect(
      screen.queryByRole("list", { name: "Test projects" }),
    ).not.toBeInTheDocument();
  });
});
