import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    isDarkTheme: localStorage.getItem("dark")
      ? JSON.parse(localStorage.getItem("dark"))
      : false,
  },
  reducers: {
    toggleTheme: (state) => {
      state.isDarkTheme = !state.isDarkTheme;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

const selectThemeState = (state) => state.theme;

export const selectDarkTheme = (state) => selectThemeState(state).isDarkTheme;

export default themeSlice.reducer;
