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
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(saga);

export default store;
