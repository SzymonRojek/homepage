// The fonts are declared and preloaded in index.html, before the app loads.
import { StrictMode } from "react";
import { flushSync } from "react-dom";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { App } from "./core/App";
import { createAppStore, saveThemeChoice } from "./core/store";
import { loadThemeState } from "./common/themeSlice";
import { parseCaseStudyHash } from "./features/Homepage/Portfolio/projectViewSlice";

const store = createAppStore({
  theme: loadThemeState(),
  projectView: parseCaseStudyHash(),
});
saveThemeChoice(store);

// #root holds a static copy of the page from the build (scripts/prerender.ts),
// hidden for a dark theme (index.html). Render at once, so the app replaces it
// in one go, then drop the copy's styles and show the page.
flushSync(() => {
  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </StrictMode>,
  );
});
document.querySelector("style[data-prerendered]")?.remove();
delete document.body.dataset.prerendered;
