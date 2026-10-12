import styled, { keyframes } from "styled-components";
import { contentColumn } from "../../../core/App/contentColumn";

export const Wrapper = styled.header``;

// Full width, deep green, with a soft yellow ring in the corner.
export const Band = styled.div`
  position: relative;
  overflow: hidden;
  padding: 64px 0 0;
  color: ${({ theme }) => theme.colors.brand.text};
  background: ${({ theme }) => theme.colors.brand.background};

  &::after {
    content: "";
    position: absolute;
    top: -150px;
    right: -150px;
    width: 440px;
    height: 440px;
    border: 72px solid ${({ theme }) => theme.colors.brand.accent};
    border-radius: 50%;
    opacity: 0.12;
    pointer-events: none;
  }

  *:focus-visible {
    outline-color: ${({ theme }) => theme.colors.brand.accent};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    padding: 40px 0 0;
  }
`;

// Text left; the photo right, standing on the band's bottom edge.
export const BandInner = styled.div`
  ${contentColumn}
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1.3fr 0.7fr;
  gap: 48px;
  align-items: end;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    grid-template-columns: 1fr 0.8fr;
    gap: 32px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    grid-template-columns: 1fr;
    justify-items: center;
    gap: 32px;
  }
`;

// On phones the photo sits centred under the text, so the text centres too.
export const Details = styled.div`
  min-width: 0;
  padding-bottom: 56px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    padding-bottom: 0;
    text-align: center;
  }
`;

// A soft ring that grows and fades around the dot: "available now". Only
// transform and opacity change, so the browser animates it off the main
// thread; an animated box-shadow repainted every frame and cost Lighthouse
// performance points.
const pulse = keyframes`
  0% {
    transform: scale(1);
    opacity: 0.6;
  }

  70%,
  100% {
    transform: scale(3);
    opacity: 0;
  }
`;

export const Availability = styled.p`
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  margin: 0;
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.brand.accent};

  &::before,
  &::after {
    content: "";
    flex-shrink: 0;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: currentColor;
  }

  /* The ring: a copy of the dot, laid over it. */
  &::after {
    position: absolute;
    top: 50%;
    left: 0;
    margin-top: -4px;
    opacity: 0;
    pointer-events: none;
    animation: ${pulse} 2.4s ease-out infinite;

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 13px;
  }
`;

// The page's h1 for search engines and screen readers; sighted visitors see
// the name and title in the top bar right above.
export const Name = styled.h1`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
  border: 0;
`;

// Where I can work, in cream with a yellow pin: HR checks this first.

// The tagline as the headline of the page.
export const Headline = styled.p`
  margin: 24px 0 0;
  font-family: ${({ theme }) => theme.fontDisplay};
  font-size: 64px;
  font-weight: 800;
  line-height: 1.04;
  letter-spacing: -0.04em;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    font-size: 48px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin-top: 22px;
    font-size: 38px;
  }
`;

export const Highlight = styled.span`
  position: relative;
  white-space: nowrap;
`;

// A hand-drawn yellow stroke under the highlighted word; decorative.
export const Underline = styled.svg`
  position: absolute;
  left: -2%;
  bottom: -0.16em;
  width: 104%;
  height: 0.3em;
  overflow: visible;

  path {
    fill: none;
    stroke: ${({ theme }) => theme.colors.brand.accent};
    stroke-width: 5px;
    stroke-linecap: round;
    vector-effect: non-scaling-stroke;
  }
`;

// About 70 characters a line, a comfortable reading width.
export const Summary = styled.p`
  max-width: 34em;
  margin: 26px 0 0;
  font-size: 18px;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.brand.muted};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin-inline: auto;
    font-size: 16px;
  }
`;

// Where I can work: three label/value pairs under the bio, split by
// thin vertical lines, like the facts at the foot of a CV. HR checks these
// first.
export const Where = styled.dl`
  display: grid;
  grid-template-columns: repeat(3, auto);
  justify-content: start;
  max-width: 34em;
  margin: 28px 0 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    grid-template-columns: repeat(3, 1fr);
    margin: 24px auto 0;
  }
`;

// Values share one line even when a label wraps on a narrow screen.
export const WhereItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 0 28px;

  &:first-child {
    padding-left: 0;
  }

  & + & {
    border-left: 1px solid ${({ theme }) => theme.colors.brand.line};
  }

  dt {
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.brand.muted};
  }

  dd {
    margin: auto 0 0;
    font-family: ${({ theme }) => theme.fontDisplay};
    font-size: 18px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.brand.text};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    padding: 0 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    padding: 0 10px;

    &:first-child {
      padding-left: 0;
    }

    &:last-child {
      padding-right: 0;
    }

    dt {
      font-size: 11px;
      letter-spacing: 0.06em;
    }

    dd {
      font-size: 16px;
    }
  }
`;
