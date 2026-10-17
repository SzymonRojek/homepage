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
  it("shows who I am and the roles I want, without where I live", () => {
    renderHeader();

    // The roles close the text: no location or right-to-work line.
    expect(screen.getByRole("term")).toHaveTextContent("Looking for");
    // The exact text: a non-breaking space and hyphen keep its phrases whole.
    expect(screen.getByRole("definition").textContent).toBe(
      "QA, Test Automation, AI\u00a0Testing, Front\u2011End roles",
    );
    expect(
      screen.queryByRole("list", { name: "Right to work and relocation" }),
    ).toBeNull();
    expect(screen.queryByText(/Hove|right to work|relocation/i)).toBeNull();
    expect(screen.queryByRole("list", { name: "Key facts" })).toBeNull();
    // The tagline is the h1, led by my name and title for screen readers and
    // search engines; "green." sits on its tilted block.
    const headline = screen.getByRole("heading", {
      level: 1,
      name: "Szymon Rojek, Test Engineer: I don’t stop at green.",
    });
    expect(headline.querySelector("svg")).toBeNull();
    expect(screen.getByText("green.").parentElement).toBe(headline);
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
