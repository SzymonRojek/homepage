import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import homepageReducer from "../features/Homepage/homepageSlice";
import themeReducer from "../common/themeSlice";
import saga from "./saga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    homepage: homepageReducer,
    theme: themeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(saga);

let isDarkTheme = store.getState().theme.isDarkTheme;

store.subscribe(() => {
  const nextIsDarkTheme = store.getState().theme.isDarkTheme;

  if (nextIsDarkTheme !== isDarkTheme) {
    isDarkTheme = nextIsDarkTheme;
    localStorage.setItem("dark", String(isDarkTheme));
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
