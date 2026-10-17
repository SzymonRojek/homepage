import styled from "styled-components";
import { columnInset, contentColumn } from "../../../core/App/contentColumn";
import {
  headlineSize,
  headlineWidth,
  inWindowWidth,
  photoHeight,
} from "./sizes";

export const Wrapper = styled.header``;

// Full width, near-black with a green undertone, with a soft yellow ring in
// the top-right corner of the content column, cut by the band's top edge.
export const Band = styled.div`
  position: relative;
  /* Clips the ring without becoming a scroll container (see the footer). */
  overflow: clip;
  /* Safari before 16 has no clip: its decorations widened the page and
     left empty space under the footer (issue #33). */
  @supports not (overflow: clip) {
    overflow: hidden;
  }
  /* The headline and the photo size themselves from the band's width
     (cqi), so they shrink together and smoothly as the window narrows. */
  container-type: inline-size;
  /* It starts under the see-through top bar (the bar's negative margin pulls
     it up), so its green and its ring show through; the padding keeps the
     content below the bar. */
  padding: ${({ theme }) => 64 + theme.layout.topBar.desktop}px 0 0;
  color: ${({ theme }) => theme.colors.brand.text};
  background: ${({ theme }) => theme.colors.brand.dark};

  &::after {
    content: "";
    position: absolute;
    top: -150px;
    right: calc(${columnInset} - 150px);
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

// Text left; the photo right, standing on the band's bottom edge. The text
// column is never narrower than the headline on one line; the photo's column
// is as wide as a 4:5 photo of its height (sizes.ts), or the room that is
// left, and the text takes the rest.
export const BandInner = styled.div`
  ${contentColumn}
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns:
    minmax(calc(${inWindowWidth(headlineWidth)} + 8px), 1fr)
    minmax(0, calc(0.8 * ${inWindowWidth(photoHeight)}));
  grid-template-columns:
    minmax(calc(${headlineWidth} + 8px), 1fr)
    minmax(0, calc(0.8 * ${photoHeight}));
  gap: 48px;
  align-items: end;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    gap: 32px;
  }

  /* On phones the text runs full width, and the photo stands beside
     "Looking for", its top level with the label, on the band's edge. */
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    grid-template-columns: minmax(0, 1fr) auto;
    column-gap: 16px;
    row-gap: 0;
  }
`;

// On phones too the text starts on the page's left edge, like every section
// below, and the photo under it ends on the right edge, as on a desktop.
export const Details = styled.div`
  min-width: 0;
  /* The section rhythm under the text, while the photo beside it stands on
     the band's edge. */
  padding-bottom: ${({ theme }) => theme.layout.section.desktop}px;

  /* On phones its lines become the hero grid's own rows (see BandInner),
     all full width but "Looking for", which shares a row with the photo. */
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    display: contents;

    & > * {
      grid-column: 1 / -1;
    }

    & > dl {
      grid-column: 1;
      align-self: start;
      padding-bottom: ${({ theme }) => theme.layout.section.mobile}px;
    }
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

// The job title and where I live, in small yellow capitals over the headline,
// like the "Looking for" label. The text stays in normal case for screen
// readers; CSS sets the capitals.
export const Eyebrow = styled.p`
  margin: 24px 0 0;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.brand.accent};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin-top: 22px;
    font-size: 12px;
  }
`;

// The tagline as the headline and the h1 of the page, on one line. Its size
// follows the band's width, so it only ever shrinks as the window narrows,
// with no jump where the layout changes. "I don’t stop at green." is about
// 9.4 times its font size wide, and the tightest fit is the narrowest
// two-column hero (768px, the photo beside it), so the size falls gently on
// phones (the first line: 32px at 360px, 47px at 768px) and faster above
// (the second: 80px from about 1256px, where the column stops growing).
// Only below 360px, at the smallest size, does it break, into balanced
// lines. Change the two lines with the tagline, and its width in sizes.ts.
export const Headline = styled.h1`
  margin: 12px 0 0;
  text-wrap: balance;
  font-family: ${({ theme }) => theme.fontDisplay};
  font-size: ${inWindowWidth(headlineSize)};
  font-size: ${headlineSize};
  font-weight: 800;
  line-height: 1.04;
  letter-spacing: -0.04em;
  /* The tight letters would pull the words together too; this gives them
     back room between them. */
  word-spacing: 0.08em;
`;

// The highlighted words on a tilted block of mint, the green of a passing
// test, with near-black letters, like a sticker on the dark. They stay on
// one line.
export const Highlight = styled.span`
  display: inline-block;
  padding: 0 0.12em;
  color: ${({ theme }) => theme.colors.brand.onHighlight};
  background: ${({ theme }) => theme.colors.brand.highlight};
  border-radius: 0.14em;
  transform: rotate(-2deg);
  white-space: nowrap;
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
    line-height: 1.3;
    color: ${({ theme }) => theme.colors.brand.text};
  }

  /* Each part, and each phrase in it, stays whole where it fits: the line
     breaks between parts first, and between phrases only when a part can't
     fit. */
  dd span {
    display: inline-block;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    dd {
      font-size: 17px;
    }
  }
`;
