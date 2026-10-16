import { render, screen, within } from "@testing-library/react";
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
  it("shows who I am, the roles I want and where I can work", () => {
    renderHeader();

    // The roles lead; where and how I can work follows as plain phrases.
    expect(screen.getByRole("term")).toHaveTextContent("Looking for");
    expect(screen.getByRole("definition")).toHaveTextContent(
      "Test Automation, QA and AI Testing roles",
    );
    const facts = screen.getByRole("list", {
      name: "Right to work and relocation",
    });
    expect(
      within(facts)
        .getAllByRole("listitem")
        .map(({ textContent }) => textContent),
    ).toEqual(["Full right to work in the UK", "Open to relocation"]);
    expect(screen.queryByRole("list", { name: "Key facts" })).toBeNull();
    // The tagline is the h1, led by my name and title for screen readers and
    // search engines; "green" is wrapped for its underline.
    const headline = screen.getByRole("heading", {
      level: 1,
      name: "Szymon Rojek, Software Test Engineer: I don’t stop at green.",
    });
    expect(headline.querySelector("svg")).toHaveAttribute(
      "aria-hidden",
      "true",
    );
    // Over it, the title and where I live, as a plain line, not a heading.
    const eyebrow = screen.getByText("Software Test Engineer · Hove, UK");
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
