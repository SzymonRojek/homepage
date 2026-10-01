import { configureStore } from "@reduxjs/toolkit";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { describe, expect, it } from "vitest";
import { themeLight } from "../../core/App/theme";
import themeReducer, { selectHasUserChoice } from "../themeSlice";
import { ThemeSwitch } from ".";

const renderSwitch = (isDarkTheme: boolean) => {
  const store = configureStore({
    reducer: { theme: themeReducer },
    preloadedState: { theme: { isDarkTheme, hasUserChoice: false } },
  });

  render(
    <Provider store={store}>
      <ThemeProvider theme={themeLight}>
        <ThemeSwitch />
      </ThemeProvider>
    </Provider>,
  );

  return store;
};

describe("ThemeSwitch", () => {
  it("shows the current theme as the pressed state", () => {
    renderSwitch(true);

    expect(screen.getByRole("button", { name: "Dark mode" })).toHaveAttribute(
      "aria-pressed",
      "true",
    );
  });

  it("toggles the theme and records the visitor's choice", () => {
    const store = renderSwitch(false);
    const button = screen.getByRole("button", { name: "Dark mode" });

    fireEvent.click(button);

    expect(button).toHaveAttribute("aria-pressed", "true");
    expect(selectHasUserChoice(store.getState())).toBe(true);
  });
});
