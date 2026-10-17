import { useEffect, useState } from "react";

// "top": the page hasn't moved, and the bar is only an outline over the
// hero. "hidden": the page scrolls down, from the very first step, over the
// hero too, and the bar slides away. "raised": the page scrolls up (or jumped
// to a section, or was reloaded halfway down), and the bar comes back,
// lifted off the page. (Until 2026-10-17 it first lifted off over the hero
// and hid only past it; the user wanted it simply to go with scrolling down.)
export type BarState = "top" | "raised" | "hidden";

// How far the page must move before the bar reacts, so a trembling trackpad
// doesn't make it flicker.
const nudge = 4;

// A move of more than this in one step is a jump (a link to a section, the
// End key), not scrolling: the bar stays in sight for the next link.
export const isJump = (y: number, lastY: number, viewport: number) =>
  Math.abs(y - lastY) > viewport * 0.6;

// The bar fills smoothly only while it is still over the dark hero, where
// its cream links stay readable mid-fade. A jump lands past the hero, over
// the light sections, so there it fills at once. "reach" is how far down the
// window the bar's bottom edge sits.
export const fadesOverHero = (y: number, heroBottom: number, reach: number) =>
  y + reach < heroBottom;

// How far down the window the floating bar reaches (its gap and height).
const barReach = 80;

export const nextBarState = (
  state: BarState,
  y: number,
  lastY: number,
  viewport: number,
): BarState => {
  if (y <= 0) return "top";
  if (isJump(y, lastY, viewport)) return "raised";
  if (y > lastY + nudge) return "hidden";
  if (y < lastY - nudge) return "raised";
  // Not moved at all: the first check after a reload halfway down.
  return state === "top" && y === lastY ? "raised" : state;
};

// Follows the page's scroll. It starts at "top", as the build's static copy
// does, and checks at once, so a reload halfway down shows the raised bar.
// "smooth" says whether a change of fill may fade (fadesOverHero). "filled"
// is the look the bar last showed: a hidden bar keeps it while it slides
// away, so leaving the top it goes as the outline, never flashing green.
export const useBarState = () => {
  const [state, setState] = useState<BarState>("top");
  const [smooth, setSmooth] = useState(true);
  const [filled, setFilled] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    let current: BarState = "top";
    const show = (next: BarState) => {
      current = next;
      setState(next);
      if (next !== "hidden") setFilled(next === "raised");
    };
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
      const hero = document.getElementById("top");
      const heroBottom = hero ? hero.offsetTop + hero.offsetHeight : 0;
      // A link's scroll starts over the hero but lands on the light
      // sections: it fills at once, as a jump does.
      setSmooth(
        !holding &&
          !isJump(y, lastY, window.innerHeight) &&
          fadesOverHero(y, heroBottom, barReach),
      );
      if (holding) {
        waitForQuiet();
        lastY = y;
        show(y <= 0 ? "top" : "raised");
        return;
      }
      show(nextBarState(current, y, lastY, window.innerHeight));
      if (Math.abs(y - lastY) > nudge || y <= 0) lastY = y;
    };
    const onClick = (event: MouseEvent) => {
      if (
        event.target instanceof Element &&
        event.target.closest('a[href^="#"]')
      ) {
        holding = true;
        setSmooth(false);
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

  return { state, smooth, filled };
};
