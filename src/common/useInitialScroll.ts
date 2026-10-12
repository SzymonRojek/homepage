import { useEffect } from "react";

const storageKey = "scrollY";

const navigationType = () =>
  (
    performance.getEntriesByType?.("navigation")[0] as
      PerformanceNavigationTiming | undefined
  )?.type;

// The faces the page is set in. The saved position was measured with them in
// place; until they load, the text above is a different height.
const pageFonts = [
  "400 1em Inter",
  "600 1em Inter",
  "700 1em Inter",
  '700 1em "Plus Jakarta Sans"',
  '800 1em "Plus Jakarta Sans"',
];

// Runs at once when the browser can't load fonts on request.
const afterFonts = (run: () => void) => {
  if (!document.fonts?.load) {
    run();
    return;
  }
  Promise.all(pageFonts.map((font) => document.fonts.load(font)))
    .catch(() => undefined)
    .then(run);
};

// Where the page lands once React has rendered it:
// - after a reload, exactly where the visitor was, as soon as the fonts are
//   in (the page renders with JavaScript, so the browser can't restore the
//   position by itself);
// - on a visit from a link with a #hash (e.g. a CV link to
//   #case-study-talent-outreach-developer), at that section, at once.
// Both jump instantly: a smooth scroll on load looks like the page moving by
// itself.
export const useInitialScroll = () => {
  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    const save = () => {
      try {
        sessionStorage.setItem(storageKey, String(window.scrollY));
      } catch {
        // Storage blocked: a reload starts at the top or the #section.
      }
    };
    window.addEventListener("pagehide", save);

    // Kept, not removed: it is only used after a reload, and the next pagehide
    // overwrites it. Reading it twice is safe when React runs effects twice in
    // development (Strict Mode).
    let saved: string | null = null;
    try {
      saved = sessionStorage.getItem(storageKey);
    } catch {
      // Storage blocked: fall back to the #section below.
    }

    let cancelled = false;
    if (navigationType() === "reload" && saved !== null) {
      // Jump once the fonts are in, so the page is as tall as it was and the
      // visitor lands exactly where they left, not a few lines off.
      const top = Number(saved);
      afterFonts(() => {
        if (!cancelled) {
          window.scrollTo({ top, behavior: "instant" });
        }
      });
    } else {
      const id = decodeURIComponent(window.location.hash.slice(1));
      if (id) {
        document.getElementById(id)?.scrollIntoView({ behavior: "instant" });
      }
    }

    return () => {
      cancelled = true;
      window.removeEventListener("pagehide", save);
    };
  }, []);
};
