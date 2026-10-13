import type { CSSProperties } from "react";
import styled, { css } from "styled-components";
import a from "color-alpha";

// The photo stands on the bottom edge of the green band, with square
// corners. Its right edge lines up with the content column (centred on
// phones). A light green shade at the top softens the edge of the band.
// --split is where the yellow line is.
export const Portrait = styled.div.attrs<{ $split: number }>(({ $split }) => ({
  style: { "--split": `${$split}%` } as CSSProperties,
}))`
  position: relative;
  align-self: end;
  justify-self: end;
  width: 340px;
  aspect-ratio: 4 / 5;
  overflow: hidden;
  /* The whole photo is the drag area: sideways moves the line, up and down
     still scrolls the page on a phone. */
  cursor: ew-resize;
  touch-action: pan-y;
  user-select: none;

  &::after {
    content: "";
    position: absolute;
    z-index: 1;
    inset: 0 0 auto;
    height: 28%;
    background: linear-gradient(
      ${({ theme }) => a(theme.colors.brand.background, 0.45)},
      ${({ theme }) => a(theme.colors.brand.background, 0)}
    );
    pointer-events: none;
  }

  /* Keyboard users see where they are; a mouse drag shows no ring. */
  &:has(input:focus-visible) {
    outline: 3px solid ${({ theme }) => theme.colors.brand.accent};
    outline-offset: 4px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    width: 280px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    justify-self: center;
    width: 240px;
  }
`;

export const Picture = styled.div`
  position: absolute;
  inset: 0;
`;

// The colour photo fills the frame; the copy on top, cut at the line, is a
// duotone in the brand colours (deep green shadows, cream highlights), so the
// "code" side looks deliberately treated rather than just grey.
export const Photo = styled.img<{ $mono?: boolean }>`
  position: absolute;
  inset: 0;
  width: 100%;
  max-width: none;
  height: 100%;
  object-fit: cover;

  ${({ $mono }) =>
    $mono &&
    css`
      filter: url(#portrait-duotone);
      clip-path: inset(0 calc(100% - var(--split)) 0 0);
    `}
`;

// The irises once more, on top of the duotone: the photo through the
// #portrait-irises filter (only the iris pixels, in blue), and masked to the
// two eyes. On the colour side the line hides the duotone, so they show only
// where the photo is green.
const iris = (x: string, y: string) =>
  `radial-gradient(ellipse 2.2% 1.6% at ${x} ${y}, #000 60%, transparent 100%)`;
const irises = `${iris("35.5%", "48%")}, ${iris("63.5%", "48.2%")}`;

export const Eyes = styled(Photo)`
  filter: url(#portrait-irises);
  clip-path: inset(0 calc(100% - var(--split)) 0 0);
  mask-image: ${irises};
  -webkit-mask-image: ${irises};
`;

// The SVG that holds the duotone filter takes no space.
export const FilterDefs = styled.svg`
  position: absolute;
  width: 0;
  height: 0;
`;

// The line and its grip are one shape: a yellow rail that swells into a
// rounded capsule with two grooves, under one shared shadow. It follows the
// split and stays fully inside the photo at either edge.
const railLeft = "clamp(0px, calc(var(--split) - 7px), calc(100% - 14px))";

export const Rail = styled.span`
  position: absolute;
  z-index: 2;
  top: 0;
  bottom: 0;
  left: ${railLeft};
  width: 14px;
  filter: drop-shadow(0 0 6px rgba(0, 0, 0, 0.35));
  pointer-events: none;

  /* The line. */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 5px;
    width: 4px;
    background: ${({ theme }) => theme.colors.brand.accent};
  }
`;

// The capsule where the line swells: the part to hold.
export const Grip = styled.span`
  position: absolute;
  top: 58%;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3px;
  width: 14px;
  height: 72px;
  background: ${({ theme }) => theme.colors.brand.accent};
  border-radius: 999px;
  transform: translateY(-50%);

  /* Two short grooves: the sign for "grab here". */
  &::before,
  &::after {
    content: "";
    width: 2px;
    height: 22px;
    background: ${({ theme }) => a(theme.colors.brand.onAccent, 0.45)};
    border-radius: 1px;
  }
`;

// One quiet word beside the grip until the first drag.
export const Hint = styled.span`
  position: absolute;
  z-index: 3;
  top: 58%;
  left: calc(${railLeft} + 24px);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.brand.text};
  text-shadow: 0 1px 6px rgba(0, 0, 0, 0.6);
  transform: translateY(-50%);
  pointer-events: none;
`;

// A short line that appears when the line reaches either edge.
export const Caption = styled.p<{ $visible: boolean }>`
  position: absolute;
  z-index: 3;
  bottom: 24px;
  left: 50%;
  margin: 0;
  padding: 8px 14px;
  font-family: ${({ theme }) => theme.fontDisplay};
  font-size: 16px;
  font-weight: 800;
  white-space: nowrap;
  color: ${({ theme }) => theme.colors.brand.onAccent};
  background: ${({ theme }) => theme.colors.brand.accent};
  border-radius: ${({ theme }) => theme.borderRadiusSmall};
  transform: translate(-50%, ${({ $visible }) => ($visible ? "0" : "8px")});
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transition:
    opacity 0.2s,
    transform 0.2s;
  pointer-events: none;

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    bottom: 18px;
    font-size: 14px;
  }
`;

// Keyboards and screen readers use this range input; mouse and touch drag
// the photo itself, so the input lets pointer events through.
export const Slider = styled.input`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  opacity: 0;
  pointer-events: none;
  appearance: none;
`;
