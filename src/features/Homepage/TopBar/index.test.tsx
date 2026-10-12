import { render, screen, within } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { ThemeProvider } from "styled-components";
import { describe, expect, it } from "vitest";
import themeReducer from "../../../common/themeSlice";
import { themeLight } from "../../../core/App/theme";
import { TopBar } from ".";

const renderTopBar = () =>
  render(
    <Provider
      store={configureStore({
        reducer: { theme: themeReducer },
        preloadedState: { theme: { isDarkTheme: false, hasUserChoice: false } },
      })}
    >
      <ThemeProvider theme={themeLight}>
        <TopBar />
      </ThemeProvider>
    </Provider>,
  );

describe("TopBar", () => {
  it("links to every main section in page order", () => {
    renderTopBar();

    const links = within(
      screen.getByRole("navigation", { name: "Sections" }),
    ).getAllByRole("link");
    expect(links.map(({ textContent }) => textContent)).toEqual([
      "Mindset",
      "Projects",
      "Experience",
      "Skills",
    ]);
    expect(links.map((link) => link.getAttribute("href"))).toEqual([
      "#mindset",
      "#projects",
      "#experience",
      "#skills",
    ]);
  });

  it("has a way back to the top, a contact link and the theme switch", () => {
    renderTopBar();

    expect(
      screen.getByRole("link", { name: "Szymon Rojek, back to top" }),
    ).toHaveAttribute("href", "#top");
    expect(screen.getByRole("link", { name: "Contact" })).toHaveAttribute(
      "href",
      "#contact",
    );
    expect(
      screen.getByRole("button", { name: "Dark mode" }),
    ).toBeInTheDocument();
  });
});
