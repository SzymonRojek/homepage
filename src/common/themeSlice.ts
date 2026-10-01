import { createSlice } from "@reduxjs/toolkit";

interface ThemeState {
  isDarkTheme: boolean;
}

const savedTheme = localStorage.getItem("dark");

const initialState: ThemeState = {
  isDarkTheme: savedTheme ? JSON.parse(savedTheme) : false,
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
