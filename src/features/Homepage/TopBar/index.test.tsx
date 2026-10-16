import { fireEvent, render, screen, within } from "@testing-library/react";
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

// The menu button is hidden on wide screens, which is all jsdom can see, and
// a hidden element has no accessible name; it is found by its aria-label.
describe("TopBar", () => {
  it("links to every main section in page order, then Hire me", () => {
    renderTopBar();

    const links = within(
      screen.getByRole("navigation", { name: "Sections" }),
    ).getAllByRole("link");
    expect(links.map(({ textContent }) => textContent)).toEqual([
      "How I test",
      "Projects",
      "Experience",
      "References",
      "Hire me",
    ]);
    expect(links.map((link) => link.getAttribute("href"))).toEqual([
      "#how-i-test",
      "#projects",
      "#experience",
      "#recommendations",
      "#contact",
    ]);
  });

  it("has a way back to the top and Hire me, no theme switch", () => {
    renderTopBar();

    // My name alone as the wordmark, linking back to the top: the job title
    // is over the hero's headline.
    const brand = screen.getByRole("link", { name: /^Szymon Rojek/ });
    expect(brand).toHaveAttribute("href", "#top");
    expect(brand).toHaveTextContent(/^Szymon Rojek$/);
    expect(screen.getByRole("link", { name: "Hire me" })).toHaveAttribute(
      "href",
      "#contact",
    );
    // The theme switch is in the footer.
    expect(screen.queryByRole("button", { name: "Dark mode" })).toBeNull();
  });

  it("keeps Hire me in the menu, after the links", () => {
    renderTopBar();

    const nav = screen.getByRole("navigation", { name: "Sections" });
    expect(nav).toHaveAttribute("id", "site-menu");
    const contact = within(nav).getByRole("link", { name: "Hire me" });
    const lastSection = within(nav).getByRole("link", { name: "References" });
    expect(
      lastSection.compareDocumentPosition(contact) &
        Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy();
  });

  it("closes the menu when Hire me is chosen", () => {
    renderTopBar();
    const button = screen.getByLabelText("Menu");
    fireEvent.click(button);

    fireEvent.click(screen.getByRole("link", { name: "Hire me" }));

    expect(button).toHaveAttribute("aria-expanded", "false");
  });

  it("opens and closes the menu with its button", () => {
    renderTopBar();

    const button = screen.getByLabelText("Menu");
    expect(button).toHaveAttribute("aria-expanded", "false");
    expect(button).toHaveAttribute("aria-controls", "site-menu");
    expect(document.getElementById("site-menu")).toBeInTheDocument();

    fireEvent.click(button);
    expect(button).toHaveAttribute("aria-expanded", "true");

    fireEvent.click(button);
    expect(button).toHaveAttribute("aria-expanded", "false");
  });

  it("closes the menu when a link is chosen", () => {
    renderTopBar();
    const button = screen.getByLabelText("Menu");
    fireEvent.click(button);

    fireEvent.click(screen.getByRole("link", { name: "Projects" }));

    expect(button).toHaveAttribute("aria-expanded", "false");
  });

  it("closes the menu on Escape and gives focus back to the button", () => {
    renderTopBar();
    const button = screen.getByLabelText("Menu");
    // jsdom ignores media queries, so the button keeps its wide-screen
    // display: none, and a hidden element can't take focus (jsdom 30.1.2+).
    // Show it as on a phone, where the menu is used.
    button.style.display = "grid";
    fireEvent.click(button);

    fireEvent.keyDown(document, { key: "Escape" });

    expect(button).toHaveAttribute("aria-expanded", "false");
    expect(button).toHaveFocus();
  });

  it("closes the menu on a click outside the bar, but not inside it", () => {
    renderTopBar();
    const button = screen.getByLabelText("Menu");
    fireEvent.click(button);

    fireEvent.pointerDown(screen.getByRole("navigation", { name: "Sections" }));
    expect(button).toHaveAttribute("aria-expanded", "true");

    fireEvent.pointerDown(document.body);
    expect(button).toHaveAttribute("aria-expanded", "false");
  });
});
