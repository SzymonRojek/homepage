import { createSlice } from "@reduxjs/toolkit";

interface ThemeState {
  isDarkTheme: boolean;
}

export const getInitialDarkTheme = (): boolean => {
  const savedTheme = localStorage.getItem("dark");

  if (savedTheme !== null) {
    return savedTheme === "true";
  }

  return window.matchMedia?.("(prefers-color-scheme: dark)").matches ?? false;
};

const initialState: ThemeState = {
  isDarkTheme: getInitialDarkTheme(),
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.isDarkTheme = !state.isDarkTheme;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

const selectThemeState = (state: { theme: ThemeState }) => state.theme;

export const selectDarkTheme = (state: { theme: ThemeState }) =>
  selectThemeState(state).isDarkTheme;

export default themeSlice.reducer;
