import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { ThemeProvider } from "styled-components";
import { describe, expect, it } from "vitest";
import { themeLight } from "../../../core/App/theme";
import projectViewReducer from "../Portfolio/projectViewSlice";
import { MainHeader } from ".";

const renderHeader = () =>
  render(
    <Provider
      store={configureStore({ reducer: { projectView: projectViewReducer } })}
    >
      <ThemeProvider theme={themeLight}>
        <MainHeader />
      </ThemeProvider>
    </Provider>,
  );

describe("MainHeader", () => {
  it("shows who I am, the roles I want and where I am", () => {
    renderHeader();

    expect(screen.getByRole("term")).toHaveTextContent("Open to");
    // The exact text: a non-breaking space and hyphen keep its phrases whole.
    expect(screen.getByRole("definition").textContent).toBe(
      "QA, Test Automation, Front\u2011End roles",
    );
    // Closing the hero since 2026-11-10: where I am, and that I would move.
    expect(
      screen.getByText("Based in Hove, UK · Open to relocation"),
    ).toBeInTheDocument();
    // Trimmed to those two facts: the right-to-work claim stays in the
    // README and is not on the page.
    expect(screen.queryByText(/right to work/i)).toBeNull();
    expect(
      screen.queryByRole("list", { name: "Right to work and relocation" }),
    ).toBeNull();
    expect(screen.queryByRole("list", { name: "Key facts" })).toBeNull();
    // The tagline is the h1, led by my name and title for screen readers and
    // search engines; "green" sits on its tilted block.
    const headline = screen.getByRole("heading", {
      level: 1,
      name: "Szymon Rojek, Test Engineer: I don’t stop at green",
    });
    expect(headline.querySelector("svg")).toBeNull();
    expect(screen.getByText("green").parentElement).toBe(headline);
    // Over it, the title, as a plain line, not a heading.
    const eyebrow = screen.getByText("Test Engineer", {
      selector: "p",
    });
    expect(eyebrow.tagName).toBe("P");
    expect(eyebrow.compareDocumentPosition(headline)).toBe(
      Node.DOCUMENT_POSITION_FOLLOWING,
    );
  });

  it("has no skill chips: the bio says it once", () => {
    renderHeader();

    expect(screen.queryByRole("list", { name: "Key skills" })).toBeNull();
    expect(
      screen.getByText(/^Four years testing financial data/),
    ).toBeVisible();
  });

  it("has no links: contact lives in the top bar and the footer", () => {
    renderHeader();

    expect(screen.queryAllByRole("link")).toHaveLength(0);
    expect(
      screen.getByRole("img", { name: "Szymon Rojek" }),
    ).toBeInTheDocument();
  });
});
