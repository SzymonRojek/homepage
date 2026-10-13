import { useLayoutEffect } from "react";

// Once the app has drawn the page, or taken over the build's static copy of
// it (src/index.tsx), the copy's own styles and the mark that hides it for a
// dark theme (index.html) go, before anything is painted.
export const usePrerenderCleanup = () => {
  useLayoutEffect(() => {
    document.querySelector("style[data-prerendered]")?.remove();
    delete document.body.dataset.prerendered;
  }, []);
};
