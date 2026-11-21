// How far down the page the window is: 0 at the top, 1 at the very end. A
// page no taller than its window has nowhere to scroll, so it is 0.
export const scrollProgress = (
  scrollY: number,
  pageHeight: number,
  windowHeight: number,
) => {
  const room = pageHeight - windowHeight;

  if (room <= 0) {
    return 0;
  }

  return Math.min(1, Math.max(0, scrollY / room));
};

// How much of the window, from its bottom edge up, lies below the top of
// the "floor" (the footer, or its last line): the button rests above that.
// Nothing while the floor is still under the window.
export const floorHeight = (floorTop: number, windowHeight: number) =>
  Math.max(0, windowHeight - floorTop);

// The gap the button keeps above its floor, and the room left over it for
// the top bar: with the button's own height, what a window needs beyond the
// footer's height for the button to rest above the whole footer.
export const floorGap = 12;
const roomAbove = 96;

// Above the whole footer where the window is tall enough to show the footer
// with the button over it; else only above the footer's last line (the
// icons and the theme switch), which it must never cover. Decided from the
// sizes alone, not from the scroll position, so the button never jumps from
// one floor to the other while the page moves.
export const restsAboveFooter = (
  footerHeight: number,
  buttonHeight: number,
  windowHeight: number,
) => footerHeight + floorGap + buttonHeight + roomAbove <= windowHeight;

// The page has to move this far before the button appears: at the top there
// is nowhere to go back to, and the hero stays clear.
export const showAfter = 400;
