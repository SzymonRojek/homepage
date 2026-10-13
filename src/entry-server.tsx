import { renderToString } from "react-dom/server";
import { Provider } from "react-redux";
import { ServerStyleSheet } from "styled-components";
import { App } from "./core/App";
import { createAppStore } from "./core/store";
import { structuredDataJson } from "./features/Homepage/structuredData";

// The page as static HTML and CSS, for the copy the build writes into
// index.html (scripts/prerender.ts): light, with every case study closed.
// Its structured data for search engines comes along for the <head>.
// It runs in Node, so no module may touch window, document or localStorage
// on import or while rendering; effects are fine, they never run here.
export const render = () => {
  const sheet = new ServerStyleSheet();

  try {
    const html = renderToString(
      sheet.collectStyles(
        <Provider store={createAppStore()}>
          <App />
        </Provider>,
      ),
    );
    // Only the rules: in a <style> tag of its own, styled-components in the
    // browser leaves them alone, and index.tsx removes them.
    const css = sheet.getStyleTags().replace(/^<style[^>]*>|<\/style>$/g, "");

    return { html, css, jsonLd: structuredDataJson() };
  } finally {
    sheet.seal();
  }
};
