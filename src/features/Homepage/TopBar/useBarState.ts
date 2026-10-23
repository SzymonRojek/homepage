import { useEffect, useState } from "react";

// "top": the page hasn't moved, and the bar shows nothing of itself over
// the hero, only its contents. "hidden": the page scrolls down, from the very first step, over the
// hero too, and the bar slides away; also after a reload below the top, until
// the visitor scrolls up. "raised": the page scrolls up (or jumped to a
// section, or opened part way down at one), and the bar comes back, lifted
// off the page. (Until 2026-10-17 it first lifted off over the hero
// and hid only past it; the user wanted it simply to go with scrolling down.)
export type BarState = "top" | "raised" | "hidden";

// How far the page must move before the bar reacts, so a trembling trackpad
// doesn't make it flicker.
const nudge = 4;

// How far the page must scroll back up, from where it last turned, before the
// hidden bar returns: enough that a trembling trackpad doesn't flick it back,
// little enough that a deliberate move up does. 4px was too soon for the user
// (2026-10-17) and 48px too much (2026-10-23); 16px is four times the nudge,
// and well under one press of an arrow key (40px). Going down still hides it
// from the first step.
export const revealAfter = 16;

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

// How close to the top of the page the bar gives up its fill on the way up,
// so the fade back to bare runs while the page is still moving and is over by
// the time it stops. At y = 0 alone the fill vanished just as the scroll
// ended, which read as a jolt (the user, 2026-10-23). It applies on the way up
// and on a jump only: going down still hides the bar from the first step.
export const clearNear = 120;

// "turnY" is where the page last turned from going down to going up.
export const nextBarState = (
  state: BarState,
  y: number,
  lastY: number,
  viewport: number,
  turnY = lastY,
): BarState => {
  if (y <= 0) return "top";
  if (isJump(y, lastY, viewport)) return y <= clearNear ? "top" : "raised";
  if (y > lastY + nudge) return "hidden";
  if (y < lastY - nudge) {
    if (state === "hidden" && turnY - y < revealAfter) return "hidden";
    return y <= clearNear ? "top" : "raised";
  }
  // Not moved at all: the first check on a page that opened part way down,
  // at a section from a link.
  return state === "top" && y === lastY ? "raised" : state;
};

// While a reload goes back to its place (index.html and useInitialScroll mark
// <html> until it is done), the bar stays hidden: a reload is not the visitor
// scrolling up. Issue #25.
const isRestoringScroll = () =>
  document.documentElement.dataset.restoringScroll !== undefined;

// Follows the page's scroll. It starts at "top", as the build's static copy
// does, and checks in the next frame, so a page that opens at a section
// shows the raised bar. Not at once: reading the scroll right after React
// has drawn the page (the dark theme draws it anew) made the browser lay the
// whole page out there and then, and again once the other effects had
// changed it (Lighthouse's "Forced reflow", about 200 ms on a slow phone).
// "smooth" says whether a change of fill may fade (fadesOverHero). "filled"
// is the look the bar last showed: a hidden bar keeps it while it slides
// away, so leaving the top it goes as the outline, never flashing green.
export const useBarState = () => {
  const [state, setState] = useState<BarState>("top");
  const [smooth, setSmooth] = useState(true);
  const [filled, setFilled] = useState(false);

  useEffect(() => {
    let lastY = 0;
    // The lowest point of the latest way down: going back up is measured
    // from here (revealAfter).
    let turnY = 0;
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
      if (isRestoringScroll()) {
        lastY = turnY = y;
        show("hidden");
        return;
      }
      if (holding) {
        waitForQuiet();
        lastY = turnY = y;
        show(y <= clearNear ? "top" : "raised");
        return;
      }
      if (y > lastY + nudge || y > turnY) turnY = y;
      show(nextBarState(current, y, lastY, window.innerHeight, turnY));
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

    const firstCheck = requestAnimationFrame(() => {
      lastY = turnY = window.scrollY;
      update();
    });
    window.addEventListener("scroll", update, { passive: true });
    document.addEventListener("click", onClick);
    return () => {
      cancelAnimationFrame(firstCheck);
      window.removeEventListener("scroll", update);
      document.removeEventListener("click", onClick);
      clearTimeout(quiet);
    };
  }, []);

  return { state, smooth, filled };
};
