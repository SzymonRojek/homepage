import { fireEvent, render, screen, within } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { ThemeProvider } from "styled-components";
import { describe, expect, it } from "vitest";
import { themeLight } from "../../../../core/App/theme";
import projectViewReducer, {
  selectProjectView,
} from "../../Portfolio/projectViewSlice";
import { SplitPortrait } from ".";

const renderPortrait = () => {
  const store = configureStore({
    reducer: { projectView: projectViewReducer },
  });
  render(
    <Provider store={store}>
      <ThemeProvider theme={themeLight}>
        <SplitPortrait src="photo.jpg" name="Szymon Rojek" />
      </ThemeProvider>
    </Provider>,
  );
  return store;
};

describe("SplitPortrait", () => {
  it("offers a developer half and a tester half, both linking to projects", () => {
    renderPortrait();

    const portrait = screen.getByRole("group", {
      name: "Szymon Rojek: pick a side",
    });
    const halves = within(portrait).getAllByRole("link");
    expect(halves.map((half) => half.getAttribute("aria-label"))).toEqual([
      "See my projects from the developer side",
      "See my projects from the tester side",
    ]);
    halves.forEach((half) => expect(half).toHaveAttribute("href", "#projects"));
  });

  it("shows the same photo in both halves, as decoration", () => {
    renderPortrait();

    const photos = screen
      .getByRole("group", { name: "Szymon Rojek: pick a side" })
      .querySelectorAll("img");
    expect(photos).toHaveLength(2);
    photos.forEach((photo) => {
      expect(photo).toHaveAttribute("src", "photo.jpg");
      expect(photo).toHaveAttribute("alt", "");
    });
  });

  it("switches the projects to the side that was clicked", () => {
    const store = renderPortrait();

    fireEvent.click(
      screen.getByRole("link", {
        name: "See my projects from the tester side",
      }),
    );
    expect(selectProjectView(store.getState())).toBe("tester");

    fireEvent.click(
      screen.getByRole("link", {
        name: "See my projects from the developer side",
      }),
    );
    expect(selectProjectView(store.getState())).toBe("developer");
  });
});
