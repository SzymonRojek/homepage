import { fireEvent, render, screen, within } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { ThemeProvider } from "styled-components";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { themeLight } from "../../../../core/App/theme";
import type { CaseStudy, Project } from "../projectsData";
import projectViewReducer from "../projectViewSlice";
import { Projects } from ".";

const createProject = (overrides: Partial<Project> = {}): Project => ({
  title: "Test suite",
  repo: "test-suite",
  language: "TypeScript",
  description: "A test suite.",
  category: "Testing",
  ...overrides,
});

const caseStudy = (headline: string): CaseStudy => ({
  summary: "Summary.",
  developer: { headline: `${headline}, built.`, points: [], stack: [] },
  tester: { headline: `${headline}, tested.`, points: [], stack: [] },
  problem: [],
  constraints: [],
  diagrams: [],
  decisions: [],
  quality: [],
});

const renderProjects = (projects: Project[]) =>
  render(
    <Provider
      store={configureStore({
        reducer: { projectView: projectViewReducer },
        preloadedState: { projectView: { openRepo: null, side: null } },
      })}
    >
      <ThemeProvider theme={themeLight}>
        <Projects projects={projects} />
      </ThemeProvider>
    </Provider>,
  );

describe("Projects", () => {
  beforeEach(() => {
    // jsdom has no layout, so scrollIntoView does not exist there.
    Element.prototype.scrollIntoView = () => {};
  });

  afterEach(() => {
    window.history.replaceState(null, "", "/");
  });

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

  it("shows a demo link only when the project has one", () => {
    renderProjects([
      createProject({ repo: "with-demo", demoUrl: "https://example.com" }),
      createProject({ repo: "without-demo" }),
    ]);

    expect(screen.getAllByRole("link", { name: "Open the demo" })).toHaveLength(
      1,
    );
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
    const demos = within(other).getAllByRole("link", { name: "Demo" });
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
        caseStudy: caseStudy("Studied"),
      }),
    ]);

    expect(
      screen.queryByRole("list", { name: "Test projects" }),
    ).not.toBeInTheDocument();
  });

  it("shows case studies as cards, all closed", () => {
    renderProjects([
      createProject({ title: "Tile", repo: "tile" }),
      createProject({
        title: "Studied",
        repo: "studied",
        caseStudy: caseStudy("Studied"),
      }),
    ]);

    const cards = screen.getByRole("list", { name: "Case studies" });
    expect(
      within(cards).getByRole("heading", { name: "Studied" }),
    ).toBeVisible();
    expect(
      within(cards).getByRole("button", { name: "Case study" }),
    ).toHaveAttribute("aria-expanded", "false");
    expect(screen.queryByRole("article")).not.toBeInTheDocument();
    expect(
      screen.queryByRole("group", { name: "View projects as" }),
    ).not.toBeInTheDocument();
    const tiles = screen.getByRole("list", { name: "Test projects" });
    expect(within(tiles).queryByText("Studied")).not.toBeInTheDocument();
  });

  it("opens one case study at a time and closes it", () => {
    renderProjects([
      createProject({
        title: "First",
        repo: "first",
        caseStudy: caseStudy("First"),
      }),
      createProject({
        title: "Second",
        repo: "second",
        caseStudy: caseStudy("Second"),
      }),
    ]);
    const [first, second] = screen.getAllByRole("button", {
      name: "Case study",
    });

    fireEvent.click(first);
    expect(screen.getByRole("article", { name: "First" })).toBeVisible();
    expect(first).toHaveAttribute("aria-expanded", "true");
    expect(first).toHaveAttribute("aria-controls", "case-study-first");
    expect(window.location.hash).toBe("#case-study-first");

    fireEvent.click(second);
    expect(screen.queryByRole("article", { name: "First" })).toBeNull();
    expect(screen.getByRole("article", { name: "Second" })).toBeVisible();
    expect(window.location.hash).toBe("#case-study-second");

    fireEvent.click(
      screen.getByRole("button", { name: "Case study", expanded: true }),
    );
    expect(screen.queryByRole("article")).not.toBeInTheDocument();
    expect(window.location.hash).toBe("#projects");
  });

  it("keeps closed case studies in the page, hidden, for search engines", () => {
    renderProjects([
      createProject({
        title: "First",
        repo: "first",
        caseStudy: caseStudy("First"),
      }),
      createProject({
        title: "Second",
        repo: "second",
        caseStudy: caseStudy("Second"),
      }),
    ]);

    // Text queries also find hidden text, as a crawler reading the HTML does.
    expect(screen.getByText("First, tested.")).not.toBeVisible();
    expect(screen.getByText("Second, built.")).not.toBeVisible();

    fireEvent.click(screen.getAllByRole("button", { name: "Case study" })[1]);
    expect(screen.getByText("Second, built.")).toBeVisible();
    expect(screen.getByText("First, tested.")).not.toBeVisible();
  });

  it("moves focus to the case study that was opened", () => {
    renderProjects([
      createProject({
        title: "First",
        repo: "first",
        caseStudy: caseStudy("First"),
      }),
    ]);

    fireEvent.click(screen.getByRole("button", { name: "Case study" }));

    expect(screen.getByRole("article", { name: "First" })).toHaveFocus();
  });

  it("shows both sides of the open case study, tester first", () => {
    renderProjects([
      createProject({
        title: "First",
        repo: "first",
        caseStudy: caseStudy("First"),
      }),
    ]);
    fireEvent.click(screen.getByRole("button", { name: "Case study" }));

    const article = screen.getByRole("article", { name: "First" });
    expect(article).toHaveTextContent(/First, tested\..*First, built\./);
    expect(
      screen.queryByRole("group", { name: "View projects as" }),
    ).not.toBeInTheDocument();
  });

  it("opens the case study in an address typed while the page is open", () => {
    renderProjects([
      createProject({
        title: "Talent",
        repo: "talent-outreach",
        caseStudy: caseStudy("Talent"),
      }),
    ]);
    expect(screen.queryByRole("article")).toBeNull();

    window.history.replaceState(
      null,
      "",
      "/#case-study-talent-outreach-tester",
    );
    fireEvent(window, new HashChangeEvent("hashchange"));

    expect(screen.getByRole("article", { name: "Talent" })).toBeVisible();
  });

  it("opens a case study whose address arrived before the page was ready", () => {
    // The store was created with no case study open; the address changed
    // before the listener existed, so no hashchange will reach it.
    window.history.replaceState(
      null,
      "",
      "/#case-study-talent-outreach-developer",
    );

    renderProjects([
      createProject({
        title: "Talent",
        repo: "talent-outreach",
        caseStudy: caseStudy("Talent"),
      }),
    ]);

    expect(screen.getByRole("article", { name: "Talent" })).toBeVisible();
  });

  it("ignores an address change that names no case study", () => {
    renderProjects([
      createProject({
        title: "Talent",
        repo: "talent-outreach",
        caseStudy: caseStudy("Talent"),
      }),
    ]);

    window.history.replaceState(null, "", "/#skills");
    fireEvent(window, new HashChangeEvent("hashchange"));

    expect(screen.queryByRole("article")).toBeNull();
  });
});
