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
    const update = () => {
      const y = window.scrollY;
      const hero = document.getElementById("top");
      const heroBottom = hero ? hero.offsetTop + hero.offsetHeight : 0;
      const viewport = window.innerHeight;
      setState((current) =>
        nextBarState(current, y, lastY, heroBottom, viewport),
      );
      if (Math.abs(y - lastY) > nudge || y <= 0) lastY = y;
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return state;
};
