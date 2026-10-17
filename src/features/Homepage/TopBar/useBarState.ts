import { useEffect, useState } from "react";

// "top": the page hasn't moved, and the bar is only an outline over the
// hero. "raised": the page has scrolled, and the bar lifts off it. "hidden":
// past the hero, scrolling down, the bar slides away until the page scrolls
// up again.
export type BarState = "top" | "raised" | "hidden";

// How far the page must move before the bar reacts, so a trembling trackpad
// doesn't make it flicker.
const nudge = 4;

// A move of more than this in one step is a jump (a link to a section, the
// End key), not scrolling: the bar stays in sight for the next link.
export const isJump = (y: number, lastY: number, viewport: number) =>
  Math.abs(y - lastY) > viewport * 0.6;

export const nextBarState = (
  state: BarState,
  y: number,
  lastY: number,
  heroBottom: number,
  viewport: number,
): BarState => {
  if (y <= 0) return "top";
  if (isJump(y, lastY, viewport)) return "raised";
  if (y > lastY + nudge && y > heroBottom) return "hidden";
  if (y < lastY - nudge || y <= heroBottom) return "raised";
  return state === "top" ? "raised" : state;
};

// Follows the page's scroll. It starts at "top", as the build's static copy
// does, and checks at once, so a reload halfway down shows the raised bar.
export const useBarState = () => {
  const [state, setState] = useState<BarState>("top");

  useEffect(() => {
    let lastY = window.scrollY;
    // A link to a section scrolls there smoothly, in many small steps that
    // would read as scrolling down and hide the bar. Until that scroll ends,
    // the bar stays raised, in sight for the next link.
    // It holds for as long as the link's scroll keeps moving: each scroll
    // step restarts a short quiet timer. No fixed limit, since a long smooth
    // scroll on a busy machine can outlast any, and no scrollend: Chrome
    // fires one right after the click, before the smooth scroll starts.
    let holding = false;
    let quiet: ReturnType<typeof setTimeout> | undefined;
    const release = () => {
      holding = false;
      clearTimeout(quiet);
    };
    const waitForQuiet = () => {
      clearTimeout(quiet);
      quiet = setTimeout(release, 400);
    };
    const update = () => {
      const y = window.scrollY;
      if (holding) {
        waitForQuiet();
        lastY = y;
        setState(y <= 0 ? "top" : "raised");
        return;
      }
      const hero = document.getElementById("top");
      const heroBottom = hero ? hero.offsetTop + hero.offsetHeight : 0;
      const viewport = window.innerHeight;
      setState((current) =>
        nextBarState(current, y, lastY, heroBottom, viewport),
      );
      if (Math.abs(y - lastY) > nudge || y <= 0) lastY = y;
    };
    const onClick = (event: MouseEvent) => {
      if (
        event.target instanceof Element &&
        event.target.closest('a[href^="#"]')
      ) {
        holding = true;
        waitForQuiet();
      }
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    document.addEventListener("click", onClick);
    return () => {
      window.removeEventListener("scroll", update);
      document.removeEventListener("click", onClick);
      clearTimeout(quiet);
    };
  }, []);

  return state;
};
