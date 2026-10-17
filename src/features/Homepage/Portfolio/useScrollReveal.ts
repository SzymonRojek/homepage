import { useEffect, type RefObject } from "react";

// Sets an element up while it is still below the screen, then plays it once
// it comes into view. Neither step runs with reduced motion, without
// IntersectionObserver, or when the element is already on screen as the
// page loads (it doesn't restart in front of the visitor), so the element
// stays as the page's HTML has it: finished. Both steps work on the element
// itself, not on React state, so React's output stays the same as the
// build's. Pass functions defined outside the component, so they never
// change.
//
// Where the element starts comes from the observer's first report, not from
// getBoundingClientRect: reading the layout right after React has added the
// page's styles made the browser lay the whole page out at once (Lighthouse's
// "Forced reflow"), once per animated card.
export const useScrollReveal = (
  ref: RefObject<HTMLElement | null>,
  prepare: (element: HTMLElement) => void,
  play: (element: HTMLElement) => (() => void) | void,
) => {
  useEffect(() => {
    const element = ref.current;
    if (
      !element ||
      typeof IntersectionObserver === "undefined" ||
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches
    ) {
      return;
    }

    let waiting = false;
    let stop: (() => void) | void;
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[entries.length - 1];
        if (!waiting) {
          // The first report: on screen (or above it) stays finished.
          const screenBottom = entry.rootBounds?.height ?? window.innerHeight;
          if (entry.boundingClientRect.top < screenBottom) {
            observer.disconnect();
            return;
          }
          waiting = true;
          prepare(element);
        }
        if (entry.isIntersecting && entry.intersectionRatio >= 0.6) {
          observer.disconnect();
          stop = play(element);
        }
      },
      { threshold: [0, 0.6] },
    );
    observer.observe(element);
    return () => {
      observer.disconnect();
      stop?.();
    };
  }, [ref, prepare, play]);
};
