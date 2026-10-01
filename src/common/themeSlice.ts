import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface ThemeState {
  isDarkTheme: boolean;
  // True once the visitor has used the switch; from then on the OS theme is ignored.
  hasUserChoice: boolean;
}

export const darkSchemeQuery = "(prefers-color-scheme: dark)";

export const getInitialDarkTheme = (): boolean => {
  const savedTheme = localStorage.getItem("dark");

  if (savedTheme !== null) {
    return savedTheme === "true";
  }

  return window.matchMedia?.(darkSchemeQuery).matches ?? false;
};

const initialState: ThemeState = {
  isDarkTheme: getInitialDarkTheme(),
  hasUserChoice: localStorage.getItem("dark") !== null,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.isDarkTheme = !state.isDarkTheme;
      state.hasUserChoice = true;
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
