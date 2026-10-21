import { afterEach, describe, expect, it, vi } from "vitest";
import {
  selectDarkTheme,
  systemThemeChanged,
  toggleTheme,
} from "../common/themeSlice";
import { openCaseStudy } from "../features/Homepage/Portfolio/projectViewSlice";
import { createAppStore, saveThemeChoice } from "./store";

describe("createAppStore", () => {
  it("starts light with every case study closed, as the build's static page", () => {
    expect(createAppStore().getState()).toEqual({
      theme: { isDarkTheme: false, hasUserChoice: false },
      projectView: { openRepo: null, side: null },
    });
  });

  it("starts from what the browser read on load", () => {
    const loaded = {
      theme: { isDarkTheme: true, hasUserChoice: true },
      projectView: { openRepo: "homepage", side: "tester" as const },
    };

    expect(createAppStore(loaded).getState()).toEqual(loaded);
  });
});

describe("saveThemeChoice", () => {
  const createSavingStore = () => {
    const store = createAppStore({
      theme: { isDarkTheme: false, hasUserChoice: false },
    });
    const stopSaving = saveThemeChoice(store);
    const setItem = vi.spyOn(Storage.prototype, "setItem");

    return { store, stopSaving, setItem };
  };

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("saves the theme when the visitor toggles it", () => {
    const { store, setItem } = createSavingStore();

    store.dispatch(toggleTheme(false));

    expect(setItem).toHaveBeenCalledOnce();
    expect(setItem).toHaveBeenCalledWith("dark", "true");
  });

  it("follows the OS theme without saving it", () => {
    const { store, setItem } = createSavingStore();

    store.dispatch(systemThemeChanged(true));

    expect(selectDarkTheme(store.getState())).toBe(true);
    expect(setItem).not.toHaveBeenCalled();
  });

  it("does not write to localStorage for other actions", () => {
    const { store, setItem } = createSavingStore();

    store.dispatch(openCaseStudy("homepage"));

    expect(setItem).not.toHaveBeenCalled();
  });

  it("saves only when the theme changes, not on every later action", () => {
    const { store, setItem } = createSavingStore();
    store.dispatch(toggleTheme(false));
    setItem.mockClear();

    store.dispatch(openCaseStudy("homepage"));

    expect(setItem).not.toHaveBeenCalled();
  });

  it("forgets the choice when the visitor is back on the OS theme", () => {
    const { store } = createSavingStore();
    store.dispatch(toggleTheme(false));
    const removeItem = vi.spyOn(Storage.prototype, "removeItem");

    store.dispatch(toggleTheme(false));

    expect(removeItem).toHaveBeenCalledWith("dark");
  });

  // Private windows refuse the write, and a full quota throws as well: the
  // theme still has to change, since the page is what the visitor asked for.
  it("changes the theme even when storage refuses the write", () => {
    const { store, setItem } = createSavingStore();
    const refuse = () => {
      throw new DOMException("The quota has been exceeded.", "QuotaExceeded");
    };
    setItem.mockImplementation(refuse);
    const removeItem = vi
      .spyOn(Storage.prototype, "removeItem")
      .mockImplementation(refuse);

    store.dispatch(toggleTheme(false));
    expect(selectDarkTheme(store.getState())).toBe(true);

    // And back on the OS theme, where it forgets the choice instead.
    store.dispatch(toggleTheme(false));
    expect(selectDarkTheme(store.getState())).toBe(false);
    expect(setItem).toHaveBeenCalledOnce();
    expect(removeItem).toHaveBeenCalledOnce();
  });

  it("stops saving when asked", () => {
    const { store, stopSaving, setItem } = createSavingStore();

    stopSaving();
    store.dispatch(toggleTheme(false));

    expect(setItem).not.toHaveBeenCalled();
  });
});
