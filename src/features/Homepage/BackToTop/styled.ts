import styled from "styled-components";
import a from "color-alpha";
import { floorGap } from "./progress";

// The button's size by screen: larger where there is room and a mouse,
// never under 44px, the least a finger needs. The ring and the arrow are
// drawn in the SVG's own units, so they scale with it.
export const buttonSizes = { desktop: 56, tablet: 48, mobile: 44 };

// The ring's length in its own units (pathLength), so its fill is a plain
// share of 100 whatever the circle's real size.
export const ringLength = 100;

// A round button in the theme's button colours (deep green with cream in the
// light theme, yellow with deep green in the dark one), fixed on the right.
// It keeps 24px from the window's edges (16px on phones), and rises to stay
// a gap above its floor, whose height under the window's bottom edge the
// component writes into --floor. Under the top bar and its menu.
export const Link = styled.a<{ $shown: boolean }>`
  --rest: 24px;
  --size: ${buttonSizes.desktop}px;
  position: fixed;
  z-index: 9;
  right: var(--rest);
  bottom: max(var(--rest), calc(var(--floor, 0px) + ${floorGap}px));
  display: block;
  width: var(--size);
  height: var(--size);
  color: ${({ theme }) => theme.colors.onPrimary};
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  box-shadow: ${({ theme }) => theme.colors.brand.pillShadow};
  opacity: ${({ $shown }) => ($shown ? 1 : 0)};
  /* Hidden, it is out of the tab order and unseen by screen readers; the
     delay lets it fade out before it goes. */
  visibility: ${({ $shown }) => ($shown ? "visible" : "hidden")};
  transition:
    opacity 0.2s,
    visibility 0s ${({ $shown }) => ($shown ? "0s" : "0.2s")},
    background 0.2s;

  &:hover {
    background: ${({ theme }) => theme.colors.primaryHover};
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletHorizontalMax}px) {
    --size: ${buttonSizes.tablet}px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    --rest: 16px;
    --size: ${buttonSizes.mobile}px;
  }

  /* In forced colours the fill is replaced, so the edge is drawn. */
  @media (forced-colors: active) {
    border: 1px solid ButtonText;
  }
`;

export const Ring = styled.svg`
  display: block;
  width: 100%;
  height: 100%;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
`;

// The whole ring, faint: the part of the page still to come.
export const Track = styled.circle`
  stroke: ${({ theme }) => a(theme.colors.onPrimary, 0.25)};
  stroke-width: 3;

  @media (forced-colors: active) {
    stroke: GrayText;
  }
`;

// The part of the page already scrolled, drawn over the track from twelve
// o'clock, clockwise. Empty until the component sets its offset.
export const Progress = styled.circle`
  stroke-width: 3;
  stroke-dasharray: ${ringLength};
  stroke-dashoffset: ${ringLength};
  transform: rotate(-90deg);
  transform-origin: center;
`;

export const Arrow = styled.path`
  stroke-width: 2.5;
`;
