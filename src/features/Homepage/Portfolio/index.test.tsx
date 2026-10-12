import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { ThemeProvider } from "styled-components";
import { describe, expect, it, vi } from "vitest";
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
    .getAllByRole("heading", { level: 4 })
    .map(({ textContent }) => textContent)
    .filter((text) => text?.startsWith("How I"));

describe("Portfolio", () => {
  it("starts with both views of every case study", () => {
    renderPortfolio();

    expect(screen.getByRole("button", { name: "Both" })).toHaveAttribute(
      "aria-pressed",
      "true",
    );
    expect(lensHeadings()).toEqual([
      "How I built it",
      "How I proved it works",
      "How I built it",
      "How I proved it works",
    ]);
  });

  it("switches every case study to the chosen view and back", () => {
    renderPortfolio();

    fireEvent.click(screen.getByRole("button", { name: "Tester" }));
    expect(lensHeadings()).toEqual([
      "How I proved it works",
      "How I proved it works",
    ]);

    fireEvent.click(screen.getByRole("button", { name: "Developer" }));
    expect(lensHeadings()).toEqual(["How I built it", "How I built it"]);

    fireEvent.click(screen.getByRole("button", { name: "Both" }));
    expect(lensHeadings()).toHaveLength(4);
  });
});
