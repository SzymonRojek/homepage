import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../common/themeSlice";
import projectViewReducer from "../features/Homepage/Portfolio/projectViewSlice";

const store = configureStore({
  reducer: {
    theme: themeReducer,
    projectView: projectViewReducer,
  },
});

let isDarkTheme = store.getState().theme.isDarkTheme;

// Save only the visitor's own choice, so OS theme changes are never stored.
store.subscribe(() => {
  const { isDarkTheme: nextIsDarkTheme, hasUserChoice } =
    store.getState().theme;

  if (nextIsDarkTheme !== isDarkTheme) {
    isDarkTheme = nextIsDarkTheme;

    if (hasUserChoice) {
      localStorage.setItem("dark", String(isDarkTheme));
    }
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
