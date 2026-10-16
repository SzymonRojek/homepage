import { useEffect, type RefObject } from "react";

// Sets an element up while it is still below the screen, then plays it once
// it comes into view. Neither step runs with reduced motion, without
// IntersectionObserver, or when the element is already on screen as the
// page loads (it doesn't restart in front of the visitor), so the element
// stays as the page's HTML has it: finished. Both steps work on the element
// itself, not on React state, so React's output stays the same as the
// build's. Pass functions defined outside the component, so they never
// change.
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
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ||
      element.getBoundingClientRect().top < window.innerHeight
    ) {
      return;
    }

    prepare(element);
    let stop: (() => void) | void;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some(({ isIntersecting }) => isIntersecting)) {
          observer.disconnect();
          stop = play(element);
        }
      },
      { threshold: 0.6 },
    );
    observer.observe(element);
    return () => {
      observer.disconnect();
      stop?.();
    };
  }, [ref, prepare, play]);
};
