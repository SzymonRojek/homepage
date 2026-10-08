import { act, render } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { afterEach, describe, expect, it, vi } from "vitest";
import themeReducer, { selectDarkTheme } from "../../common/themeSlice";
import { App } from ".";

// The test is about the theme, not the page content: rendering the whole page
// in jsdom took over 5 s on a slow machine and inflated coverage.
vi.mock("../../features/Homepage", () => ({ Homepage: () => null }));

type Listener = (event: MediaQueryListEvent) => void;

const renderApp = (isDarkTheme: boolean) => {
  let listener: Listener | undefined;
  vi.stubGlobal(
    "matchMedia",
    vi.fn(() => ({
      matches: false,
      addEventListener: (_type: string, onChange: Listener) => {
        listener = onChange;
      },
      removeEventListener: vi.fn(),
    })),
  );
  const store = configureStore({
    reducer: { theme: themeReducer },
    preloadedState: { theme: { isDarkTheme, hasUserChoice: false } },
  });

  render(
    <Provider store={store}>
      <App />
    </Provider>,
  );

  const changeOsTheme = (isDark: boolean) =>
    act(() => listener?.({ matches: isDark } as MediaQueryListEvent));

  return { store, changeOsTheme };
};

describe("App", () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("marks the document with the current theme", () => {
    renderApp(true);

    expect(document.documentElement.dataset.theme).toBe("dark");
  });

  it("follows the OS theme and updates the document", () => {
    const { store, changeOsTheme } = renderApp(false);
    expect(document.documentElement.dataset.theme).toBe("light");

    changeOsTheme(true);

    expect(selectDarkTheme(store.getState())).toBe(true);
    expect(document.documentElement.dataset.theme).toBe("dark");
  });
});
