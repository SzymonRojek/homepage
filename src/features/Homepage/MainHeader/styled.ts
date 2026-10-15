import styled from "styled-components";
import { contentColumn } from "../../../core/App/contentColumn";

export const Wrapper = styled.header``;

// Full width, deep green, with a soft yellow ring in the corner.
export const Band = styled.div`
  position: relative;
  /* Clips the ring without becoming a scroll container (see the footer). */
  overflow: clip;
  /* It starts under the see-through top bar (the bar's negative margin pulls
     it up), so its green and its ring show through; the padding keeps the
     content below the bar. */
  padding: ${({ theme }) => 64 + theme.layout.topBar.desktop}px 0 0;
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
    padding: ${({ theme }) => 40 + theme.layout.topBar.mobile}px 0 0;
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
    gap: 32px;
  }
`;

// On phones too the text starts on the page's left edge, like every section
// below, and the photo under it ends on the right edge, as on a desktop.
export const Details = styled.div`
  min-width: 0;
  padding-bottom: 40px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    padding-bottom: 0;
  }
`;

// The start of the h1, for screen readers and search engines only: sighted
// visitors see the name and title in the top bar right above.
export const NameAndTitle = styled.span`
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

// The tagline as the headline and the h1 of the page. Balanced lines, so no
// word is left alone on the last one.
export const Headline = styled.h1`
  margin: 24px 0 0;
  text-wrap: balance;
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
    font-size: 16px;
  }
`;

// What I'm looking for, under the bio: the roles lead, in the display face,
// with a yellow label like the job title in the top bar.
export const NextRole = styled.dl`
  margin: 28px 0 0;

  dt {
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.brand.accent};
  }

  dd {
    margin: 6px 0 0;
    font-family: ${({ theme }) => theme.fontDisplay};
    font-size: 21px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.brand.text};
    text-wrap: balance;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    dd {
      font-size: 19px;
    }
  }
`;

// Where and how I can work, as plain phrases in one quiet line, so the roles
// above stay the first thing HR reads. On phones, one phrase a line.
export const Facts = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 10px 0 0;
  padding: 0;
  list-style: none;
  font-size: 15px;
  color: ${({ theme }) => theme.colors.brand.muted};

  li + li::before {
    content: "·";
    margin: 0 10px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    flex-direction: column;
    gap: 2px;

    li + li::before {
      content: none;
    }
  }
`;
