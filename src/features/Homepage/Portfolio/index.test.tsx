import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { ThemeProvider } from "styled-components";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { themeLight } from "../../../core/App/theme";
import projectViewReducer from "./projectViewSlice";
import { Portfolio } from ".";

// Two small case studies keep the jsdom render fast; the real content is
// covered by the Playwright suite.
vi.mock("./projectsData", async (importOriginal) => {
  const actual = await importOriginal<typeof import("./projectsData")>();
  const caseStudy = {
    summary: "Summary.",
    developer: { headline: "Built.", points: [], stack: [] },
    tester: { headline: "Tested.", points: [], stack: [] },
    problem: [],
    constraints: [],
    diagrams: [],
    decisions: [],
    quality: [],
    lessons: [],
  };
  return {
    ...actual,
    projects: ["first", "second"].map((repo) => ({
      title: repo,
      repo,
      language: "TypeScript",
      description: "A project.",
      category: "Testing",
      caseStudy,
    })),
  };
});

const renderPortfolio = () =>
  render(
    <Provider
      store={configureStore({ reducer: { projectView: projectViewReducer } })}
    >
      <ThemeProvider theme={themeLight}>
        <Portfolio />
      </ThemeProvider>
    </Provider>,
  );

const lensHeadings = () =>
  screen
    .queryAllByRole("heading", { level: 4 })
    .map(({ textContent }) => textContent)
    .filter((text) => text?.startsWith("How I"));

describe("Portfolio", () => {
  beforeEach(() => {
    // jsdom has no layout, so scrollIntoView does not exist there.
    Element.prototype.scrollIntoView = () => {};
  });

  afterEach(() => {
    window.history.replaceState(null, "", "/");
  });

  it("opens with its numbered heading, one big line and the intro", () => {
    renderPortfolio();

    const heading = screen.getByRole("heading", { level: 2, name: "Projects" });
    expect(heading).toHaveAttribute("data-number", "02");
    const line = heading.nextElementSibling;
    expect(line).toHaveTextContent(
      /^Built in my own time\. Tested like production\.$/,
    );
    // Two sentences, each on a line of its own.
    expect(
      Array.from(line?.children ?? [], ({ textContent }) => textContent),
    ).toEqual(["Built in my own time.", "Tested like production."]);
    expect(line?.nextElementSibling).toHaveTextContent(
      /^Two apps I built to practise development, then tested the way I test at work\./,
    );
  });

  it("starts with every case study closed, as cards", () => {
    renderPortfolio();

    expect(screen.getAllByRole("button", { name: "Case study" })).toHaveLength(
      2,
    );
    expect(screen.queryByRole("article")).toBeNull();
    expect(lensHeadings()).toEqual([]);
  });

  it("opens a case study with both sides, tester first", () => {
    renderPortfolio();
    fireEvent.click(screen.getAllByRole("button", { name: "Case study" })[0]);

    expect(lensHeadings()).toEqual(["How I proved it works", "How I built it"]);
  });
});
