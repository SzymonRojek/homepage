import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import { Provider } from "react-redux";
import { ServerStyleSheet } from "styled-components";
import { App } from "./core/App";
import { createAppStore } from "./core/store";
import { structuredDataJson } from "./features/Homepage/structuredData";

// The page as static HTML and CSS, for the copy the build writes into
// index.html (scripts/prerender.ts): light, with every case study closed.
// Its structured data for search engines comes along for the <head>.
// The browser takes this copy over as it is (src/index.tsx), so the tree here
// must match the one there. It runs in Node, so no module may touch window,
// document or localStorage on import or while rendering; effects are fine,
// they never run here.
export const render = () => {
  const sheet = new ServerStyleSheet();

  try {
    const markup = renderToString(
      sheet.collectStyles(
        <StrictMode>
          <Provider store={createAppStore()}>
            <App />
          </Provider>
        </StrictMode>,
      ),
    );
    // React writes preload links for the page's images first. They belong in
    // the <head>, so #root holds exactly what the app takes over.
    const [, preloads, html] = /^((?:<link [^>]*>)*)([\s\S]*)$/.exec(markup)!;
    // Only the rules: in a <style> tag of its own, styled-components in the
    // browser leaves them alone, and the app removes them once it has the page
    // (usePrerenderCleanup). Its bookkeeping for reusing server styles
    // (data-styled.g… rules, /*!sc*/ marks) goes too: nothing reuses them, and
    // it was a quarter of the CSS.
    const css = sheet
      .getStyleTags()
      .replace(/^<style[^>]*>|<\/style>$/g, "")
      .replace(/data-styled\.g\d+\[id="[^"]*"\]\{content:"[^"]*"\}/g, "")
      .replace(/\/\*!sc\*\//g, "");

    return { html, preloads, css, jsonLd: structuredDataJson() };
  } finally {
    sheet.seal();
  }
};
