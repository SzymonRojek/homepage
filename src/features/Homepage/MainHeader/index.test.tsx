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
  it("shows who I am, the roles I want and where I can work", () => {
    renderHeader();

    expect(
      screen.getByRole("heading", { level: 1, name: "Szymon Rojek" }),
    ).toBeInTheDocument();
    expect(
      screen.getByText("Open to Test Automation & QA Engineer roles"),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "Based in Hove, UK · Full right to work in the UK · Open to relocation",
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByText("I find what breaks before your users do."),
    ).toBeInTheDocument();
    expect(screen.getByText("· self-taught developer")).toBeInTheDocument();
  });

  it("has no skill chips: the bio says it once", () => {
    renderHeader();

    expect(screen.queryByRole("list", { name: "Key skills" })).toBeNull();
    expect(
      screen.getByText(/^Four years testing financial data/),
    ).toBeVisible();
  });

  it("has one button: email", () => {
    renderHeader();

    expect(screen.getByRole("link", { name: "Email me" })).toHaveAttribute(
      "href",
      expect.stringMatching(/^mailto:/),
    );
    // Besides the two portrait halves, email is the only link.
    expect(
      screen.getAllByRole("link").map((link) => link.getAttribute("href")),
    ).toEqual(["#projects", "#projects", expect.stringMatching(/^mailto:/)]);
  });
});
