import { useEffect } from "react";

const storageKey = "scrollY";

const navigationType = () =>
  (
    performance.getEntriesByType?.("navigation")[0] as
      PerformanceNavigationTiming | undefined
  )?.type;

// Where the page lands once React has rendered it:
// - after a reload, exactly where the visitor was, at once (the page renders
//   with JavaScript, so the browser can't restore the position by itself);
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

    if (navigationType() === "reload" && saved !== null) {
      window.scrollTo({ top: Number(saved), behavior: "instant" });
    } else {
      const id = decodeURIComponent(window.location.hash.slice(1));
      if (id) {
        document.getElementById(id)?.scrollIntoView({ behavior: "instant" });
      }
    }

    return () => window.removeEventListener("pagehide", save);
  }, []);
};
