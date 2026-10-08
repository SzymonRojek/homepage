import type { ReactNode } from "react";
import { configureStore } from "@reduxjs/toolkit";
import { act, renderHook } from "@testing-library/react";
import { Provider } from "react-redux";
import { afterEach, describe, expect, it, vi } from "vitest";
import themeReducer, { darkSchemeQuery, selectDarkTheme } from "./themeSlice";
import { useSystemTheme } from "./useSystemTheme";

type Listener = (event: MediaQueryListEvent) => void;

const mockMatchMedia = () => {
  let listener: Listener | undefined;
  const mediaQuery = {
    addEventListener: vi.fn((_type: string, onChange: Listener) => {
      listener = onChange;
    }),
    removeEventListener: vi.fn(),
  };
  const matchMedia = vi.fn(() => mediaQuery);
  vi.stubGlobal("matchMedia", matchMedia);

  const changeTo = (isDark: boolean) =>
    act(() => listener?.({ matches: isDark } as MediaQueryListEvent));

  return { matchMedia, mediaQuery, changeTo };
};

const renderWithStore = (hasUserChoice = false) => {
  const store = configureStore({
    reducer: { theme: themeReducer },
    preloadedState: { theme: { isDarkTheme: false, hasUserChoice } },
  });
  const wrapper = ({ children }: { children: ReactNode }) => (
    <Provider store={store}>{children}</Provider>
  );

  return { store, ...renderHook(() => useSystemTheme(), { wrapper }) };
};

describe("useSystemTheme", () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("follows OS theme changes", () => {
    const { matchMedia, mediaQuery, changeTo } = mockMatchMedia();
    const { store } = renderWithStore();

    expect(matchMedia).toHaveBeenCalledWith(darkSchemeQuery);
    expect(mediaQuery.addEventListener).toHaveBeenCalledWith(
      "change",
      expect.any(Function),
    );

    changeTo(true);
    expect(selectDarkTheme(store.getState())).toBe(true);

    changeTo(false);
    expect(selectDarkTheme(store.getState())).toBe(false);
  });

  it("ignores OS theme changes after the visitor chooses", () => {
    const { changeTo } = mockMatchMedia();
    const { store } = renderWithStore(true);

    changeTo(true);

    expect(selectDarkTheme(store.getState())).toBe(false);
  });

  it("stops listening on unmount", () => {
    const { mediaQuery } = mockMatchMedia();
    const { unmount } = renderWithStore();

    unmount();

    expect(mediaQuery.removeEventListener).toHaveBeenCalledWith(
      "change",
      mediaQuery.addEventListener.mock.calls[0][1],
    );
  });

  it("does nothing when matchMedia is not supported", () => {
    vi.stubGlobal("matchMedia", undefined);

    expect(() => renderWithStore()).not.toThrow();
  });
});
