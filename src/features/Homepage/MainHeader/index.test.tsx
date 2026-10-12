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

    expect(
      screen.getByRole("heading", { level: 1, name: "Szymon Rojek" }),
    ).toBeInTheDocument();
    expect(
      screen.getByText("Open to Test Automation & QA Engineer roles"),
    ).toBeInTheDocument();
    const where = screen.getByLabelText("Location and right to work");
    expect(
      within(where)
        .getAllByRole("term")
        .map(({ textContent }) => textContent),
    ).toEqual(["Based in", "Right to work", "Relocation"]);
    expect(
      within(where)
        .getAllByRole("definition")
        .map(({ textContent }) => textContent),
    ).toEqual(["Hove, UK", "UK, full", "Open"]);
    expect(screen.queryByRole("list", { name: "Key facts" })).toBeNull();
    // The tagline is the headline; "breaks" is wrapped for its underline.
    const headline = screen.getByText(
      (_, element) =>
        element?.tagName === "P" &&
        element.textContent === "I find what breaks before your users do.",
    );
    expect(headline).toBeInTheDocument();
    expect(headline.querySelector("svg")).toHaveAttribute(
      "aria-hidden",
      "true",
    );
    // The name and title are in the top bar; here the name is the h1 only.
    expect(screen.queryByText("· self-taught Developer")).toBeNull();
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
