import { useEffect } from "react";

// The same key and mark as the scripts in index.html, which jump back before
// the page first paints.
const storageKey = "scrollY";

const navigationType = () =>
  (
    performance.getEntriesByType?.("navigation")[0] as
      PerformanceNavigationTiming | undefined
  )?.type;

// The faces the page is set in (index.html), one file each for every weight.
// The saved position was measured with them in place; until they load, the
// text above is a different height.
export const pageFonts = [
  '400 1em "Bricolage Grotesque"',
  "400 1em Geist",
  '400 1em "Geist Mono"',
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

// The top bar stays out of sight while the page goes back to its place
// (useBarState): a reload is not the visitor scrolling up. Two frames on, so
// the scroll of the last jump has been handled first.
const endRestore = () =>
  requestAnimationFrame(() =>
    requestAnimationFrame(() => {
      delete document.documentElement.dataset.restoringScroll;
    }),
  );

// Where the page lands once React has rendered it:
// - after a reload, exactly where the visitor was: index.html jumps there
//   before the first paint, and this jumps again once the fonts are in, as
//   they change the height of the text above;
// - on a visit from a link with a #hash (e.g. a CV link to
//   #case-study-talent-outreach-developer), at that section, at once.
// Both jump instantly: a smooth scroll on load looks like the page moving by
// itself.
// The position is saved while the page scrolls, not only when it is left, so
// a browser that skips pagehide can't bring back an old one (the likely cause
// of a reload at the top landing further down on an iPhone, issue #26).
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
    let pending: ReturnType<typeof setTimeout> | undefined;
    const saveSoon = () => {
      clearTimeout(pending);
      pending = setTimeout(save, 100);
    };
    const saveWhenHidden = () => {
      if (document.visibilityState === "hidden") save();
    };
    window.addEventListener("scroll", saveSoon, { passive: true });
    window.addEventListener("pagehide", save);
    document.addEventListener("visibilitychange", saveWhenHidden);

    // Read before anything is saved, and kept, not removed: it is only used
    // after a reload. Reading it twice is safe when React runs effects twice
    // in development (Strict Mode).
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
          endRestore();
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
      clearTimeout(pending);
      window.removeEventListener("scroll", saveSoon);
      window.removeEventListener("pagehide", save);
      document.removeEventListener("visibilitychange", saveWhenHidden);
    };
  }, []);
};
