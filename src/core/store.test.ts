import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

// Each test loads a fresh store, because the theme state starts from localStorage.
const loadStore = async () => {
  const { default: store } = await import("./store");
  const theme = await import("../common/themeSlice");
  const homepage = await import("../features/Homepage/homepageSlice");

  return { store, ...theme, ...homepage };
};

describe("store theme persistence", () => {
  beforeEach(() => {
    vi.resetModules();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("saves the theme when the visitor toggles it", async () => {
    const { store, toggleTheme } = await loadStore();
    const setItem = vi.spyOn(Storage.prototype, "setItem");
    const wasDark = store.getState().theme.isDarkTheme;

    store.dispatch(toggleTheme());

    expect(setItem).toHaveBeenCalledOnce();
    expect(setItem).toHaveBeenCalledWith("dark", String(!wasDark));
  });

  it("follows the OS theme without saving it", async () => {
    const { store, systemThemeChanged, selectDarkTheme } = await loadStore();
    const setItem = vi.spyOn(Storage.prototype, "setItem");

    store.dispatch(systemThemeChanged(true));

    expect(selectDarkTheme(store.getState())).toBe(true);
    expect(setItem).not.toHaveBeenCalled();
  });

  it("does not write to localStorage for other actions", async () => {
    const { store, fetchRepositoriesError } = await loadStore();
    const setItem = vi.spyOn(Storage.prototype, "setItem");

    store.dispatch(fetchRepositoriesError());

    expect(setItem).not.toHaveBeenCalled();
  });
});
