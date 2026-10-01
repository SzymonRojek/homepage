import { afterEach, describe, expect, it, vi } from "vitest";
import store from "./store";
import { toggleTheme } from "../common/themeSlice";
import { fetchRepositoriesError } from "../features/Homepage/homepageSlice";

describe("store theme persistence", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("saves the theme when it changes", () => {
    const setItem = vi.spyOn(Storage.prototype, "setItem");
    const wasDark = store.getState().theme.isDarkTheme;

    store.dispatch(toggleTheme());

    expect(setItem).toHaveBeenCalledOnce();
    expect(setItem).toHaveBeenCalledWith("dark", String(!wasDark));
  });

  it("does not write to localStorage for other actions", () => {
    const setItem = vi.spyOn(Storage.prototype, "setItem");

    store.dispatch(fetchRepositoriesError());

    expect(setItem).not.toHaveBeenCalled();
  });
});
