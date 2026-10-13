// The fonts are declared and preloaded in index.html, before the app loads.
import { StrictMode } from "react";
import { flushSync } from "react-dom";
import { createRoot, hydrateRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { App } from "./core/App";
import { createAppStore, saveThemeChoice } from "./core/store";
import { loadThemeState } from "./common/themeSlice";
import { parseCaseStudyHash } from "./features/Homepage/Portfolio/projectViewSlice";

const theme = loadThemeState();
const projectView = parseCaseStudyHash();
const store = createAppStore({ theme, projectView });
saveThemeChoice(store);

const container = document.getElementById("root")!;
const app = (
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);

// #root holds the build's static copy of the page (scripts/prerender.ts):
// light, with every case study closed. When this visit looks the same, React
// takes the copy over as it is, so the photo is never drawn twice. A dark
// theme or a case-study address draws the page anew, at once; for a dark
// theme the copy stays hidden until then (index.html). The dev server has no
// copy at all.
if (container.hasChildNodes() && !theme.isDarkTheme && !projectView.openRepo) {
  hydrateRoot(container, app);
} else {
  flushSync(() => createRoot(container).render(app));
}
