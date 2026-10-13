import { combineReducers, configureStore } from "@reduxjs/toolkit";
import themeReducer from "../common/themeSlice";
import projectViewReducer from "../features/Homepage/Portfolio/projectViewSlice";

const rootReducer = combineReducers({
  theme: themeReducer,
  projectView: projectViewReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

// The browser passes in what it reads on load: the saved or OS theme and the
// address (index.tsx). Without it the store starts light with every case
// study closed, as in the static copy of the page the build writes out.
export const createAppStore = (preloadedState?: Partial<RootState>) =>
  configureStore({ reducer: rootReducer, preloadedState });

export type AppStore = ReturnType<typeof createAppStore>;
export type AppDispatch = AppStore["dispatch"];

// Save only the visitor's own choice, so OS theme changes are never stored.
export const saveThemeChoice = (store: AppStore) => {
  let isDarkTheme = store.getState().theme.isDarkTheme;

  return store.subscribe(() => {
    const { isDarkTheme: nextIsDarkTheme, hasUserChoice } =
      store.getState().theme;

    if (nextIsDarkTheme !== isDarkTheme) {
      isDarkTheme = nextIsDarkTheme;

      if (hasUserChoice) {
        localStorage.setItem("dark", String(isDarkTheme));
      }
    }
  });
};
