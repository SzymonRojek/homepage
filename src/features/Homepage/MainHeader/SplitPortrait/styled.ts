import type { CSSProperties } from "react";
import styled, { css } from "styled-components";
import a from "color-alpha";

type Side = "developer" | "tester";

// The photo stands on the bottom edge of the green band, so only its top
// corners are rounded. Its right edge lines up with the content column
// (centred on phones). A soft green shade at the top keeps the two labels
// readable on any part of the photo. --split is where the yellow line is.
export const Portrait = styled.div.attrs<{ $split: number }>(({ $split }) => ({
  style: { "--split": `${$split}%` } as CSSProperties,
}))`
  position: relative;
  align-self: end;
  justify-self: end;
  width: 340px;
  aspect-ratio: 4 / 5;
  overflow: hidden;
  border-radius: ${({ theme }) =>
    `${theme.borderRadius} ${theme.borderRadius} 0 0`};

  &::after {
    content: "";
    position: absolute;
    z-index: 1;
    inset: 0 0 auto;
    height: 30%;
    background: linear-gradient(
      ${({ theme }) => a(theme.colors.brand.background, 0.75)},
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

// The colour photo fills the frame; the black-and-white copy on top is cut
// at the line, so moving the line shows more of one side.
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
      filter: grayscale(1) contrast(1.15);
      clip-path: inset(0 calc(100% - var(--split)) 0 0);
    `}
`;

// Light, widely spaced capitals in the top corners: a caption, not a button.
export const Label = styled.span<{ $side: Side }>`
  position: absolute;
  z-index: 2;
  top: 18px;
  ${({ $side }) => ($side === "developer" ? "left: 20px;" : "right: 20px;")}
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.brand.text};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    top: 14px;
    ${({ $side }) => ($side === "developer" ? "left: 14px;" : "right: 14px;")}
    font-size: 11px;
  }
`;

// A yellow line where the two sides meet, with a round handle that says
// "drag me".
export const Divider = styled.span`
  position: absolute;
  z-index: 2;
  top: 0;
  bottom: 0;
  left: var(--split);
  width: 2px;
  background: ${({ theme }) => theme.colors.brand.accent};
  transform: translateX(-50%);
  pointer-events: none;
`;

export const Handle = styled.span`
  position: absolute;
  top: 58%;
  left: 50%;
  display: grid;
  place-items: center;
  width: 36px;
  height: 36px;
  color: ${({ theme }) => theme.colors.brand.onAccent};
  background: ${({ theme }) => theme.colors.brand.accent};
  border-radius: 50%;
  transform: translate(-50%, -50%);

  svg {
    width: 20px;
    height: 20px;
    fill: none;
    stroke: currentColor;
    stroke-width: 2.5;
    stroke-linecap: round;
    stroke-linejoin: round;
  }
`;

// The control: an invisible range input over the whole photo, so a drag
// anywhere moves the line, and arrow keys work too. Vertical swipes still
// scroll the page on phones.
export const Slider = styled.input`
  position: absolute;
  z-index: 3;
  inset: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  opacity: 0;
  cursor: ew-resize;
  touch-action: pan-y;
  appearance: none;

  &::-webkit-slider-thumb {
    width: 1px;
    height: 100%;
    appearance: none;
  }

  &::-moz-range-thumb {
    width: 1px;
    height: 100%;
    border: 0;
  }
`;
