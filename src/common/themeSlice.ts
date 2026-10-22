import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface ThemeState {
  isDarkTheme: boolean;
  // True once the visitor has used the switch; from then on the OS theme is ignored.
  hasUserChoice: boolean;
}

export const darkSchemeQuery = "(prefers-color-scheme: dark)";

// Reading storage throws, rather than returning nothing, when the browser
// blocks it: Safari's private windows, a "block all cookies" setting, an
// embedded page. This read is the app's first act (index.tsx), so a throw
// here used to stop the page loading altogether. The same read in index.html
// is guarded the same way.
const savedChoice = (): string | null => {
  try {
    return localStorage.getItem("dark");
  } catch {
    // Storage blocked: no choice to honour, so the OS theme decides.
    return null;
  }
};

export const getInitialDarkTheme = (): boolean => {
  const savedTheme = savedChoice();

  if (savedTheme !== null) {
    return savedTheme === "true";
  }

  return window.matchMedia?.(darkSchemeQuery).matches ?? false;
};

// The theme a page load starts from, read in the browser (index.tsx).
export const loadThemeState = (): ThemeState => ({
  isDarkTheme: getInitialDarkTheme(),
  hasUserChoice: savedChoice() !== null,
});

// Light, the theme of the static copy of the page the build writes out
// (entry-server.tsx), where there is no browser to ask.
const initialState: ThemeState = { isDarkTheme: false, hasUserChoice: false };

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    // The payload is the OS theme at the press. A press that lands on it
    // drops the visitor's choice, so the page follows the OS again; one that
    // leaves it records the choice, which then wins over the OS.
    toggleTheme: (state, { payload: systemIsDark }: PayloadAction<boolean>) => {
      state.isDarkTheme = !state.isDarkTheme;
      state.hasUserChoice = state.isDarkTheme !== systemIsDark;
    },
    systemThemeChanged: (
      state,
      { payload: isDark }: PayloadAction<boolean>,
    ) => {
      if (!state.hasUserChoice) {
        state.isDarkTheme = isDark;
      }
    },
  },
});

export const { toggleTheme, systemThemeChanged } = themeSlice.actions;

const selectThemeState = (state: { theme: ThemeState }) => state.theme;

export const selectDarkTheme = (state: { theme: ThemeState }) =>
  selectThemeState(state).isDarkTheme;

export const selectHasUserChoice = (state: { theme: ThemeState }) =>
  selectThemeState(state).hasUserChoice;

export default themeSlice.reducer;
