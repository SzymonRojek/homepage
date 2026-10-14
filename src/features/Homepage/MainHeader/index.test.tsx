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
      name: "Location and right to work",
    });
    expect(
      within(facts)
        .getAllByRole("listitem")
        .map(({ textContent }) => textContent),
    ).toEqual([
      "Based in Hove, UK",
      "Full right to work in the UK",
      "Open to relocation",
    ]);
    expect(screen.queryByRole("list", { name: "Key facts" })).toBeNull();
    // The tagline is the h1, led by my name and title for screen readers and
    // search engines; "wrong" is wrapped for its underline.
    const headline = screen.getByRole("heading", {
      level: 1,
      name: "Szymon Rojek, Software Test Engineer: A number can match and still be wrong.",
    });
    expect(headline.querySelector("svg")).toHaveAttribute(
      "aria-hidden",
      "true",
    );
    // On screen the top bar shows the name and title, not the hero.
    expect(screen.queryByText("Software Test Engineer")).toBeNull();
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
