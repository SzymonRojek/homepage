import styled from "styled-components";
import LinkedInMark from "./linkedin.svg?react";
import { BandSection, bigLine } from "../Section";

// The first section, on its own band right under the hero; "How I test" meets
// it edge to edge on its green band.
export const QuoteBand = styled(BandSection)`
  margin-top: 0;
`;

// Jim's verdict, large, like a headline in a magazine, and still: the cards
// below carry the details.
export const Pull = styled.figure`
  margin: 0;

  blockquote {
    margin: 0;
  }

  blockquote p {
    ${bigLine}
    max-width: 20em;
  }
`;

// The full recommendations as cards in two columns that fill like a wall of
// bricks: each column stacks its own cards, so a long one never leaves a gap
// beside a short one, and no text is cut. The cards alternate between the
// columns, so the newest two sit side by side at the top. On tablets and
// phones the columns step aside (display: contents) and the cards follow one
// another, newest first, in one column.
export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: start;
  gap: 24px;
  /* Room under the big quote, so it stands on its own above the cards. */
  margin-top: 64px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    grid-template-columns: 1fr;
    gap: 16px;
    margin-top: 48px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin-top: 40px;
  }
`;

export const Column = styled.div`
  display: grid;
  gap: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    display: contents;
  }
`;

export const Item = styled.div<{ $order: number }>`
  position: relative;
  /* Clips the watermark at the corner. */
  overflow: hidden;
  order: ${({ $order }) => $order};
  padding: 24px 28px 26px;
  background: ${({ theme }) => theme.colors.quoteCard};
  border: 1px solid ${({ theme }) => theme.colors.headerLine};
  border-radius: ${({ theme }) => theme.borderRadius};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    padding: 20px 20px 22px;
  }
`;

// Who first, then what: recruiters look for who wrote a recommendation (NN/g
// eyetracking), so the byline leads, above a thin rule. The card already
// reads as a quote, so the text has no quotation marks.
export const Quote = styled.figure`
  position: relative;
  z-index: 1;
  margin: 0;

  blockquote {
    margin: 0;
  }

  blockquote p {
    margin: 0;
    font-size: 16.5px;
    line-height: 1.72;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    blockquote p {
      font-size: 16px;
    }
  }
`;

export const Caption = styled.figcaption`
  margin-bottom: 18px;
  padding-bottom: 16px;
  font-size: 14px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.muted};
  border-bottom: 1px solid ${({ theme }) => theme.colors.headerLine};

  strong {
    font-family: ${({ theme }) => theme.fontDisplay};
    font-size: 17px;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

// The name on the left and, like a timestamp on a message, the month it was
// written on the right, so the date can't read as the time in the role.
export const Byline = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 12px;
  margin-bottom: 2px;

  time {
    font-size: 13px;
    white-space: nowrap;
  }
`;

// A faint LinkedIn mark in the card's bottom-right corner, like a watermark,
// cut by the card's edge: it says where the words come from without pulling
// the eye from them. The text's own colour at low opacity, so it suits both
// themes; it sits behind the text (which keeps its contrast) and lets clicks
// through.
export const Watermark = styled(LinkedInMark)`
  position: absolute;
  z-index: 0;
  right: -10px;
  bottom: -10px;
  width: 84px;
  height: 84px;
  color: ${({ theme }) => theme.colors.textPrimary};
  opacity: 0.05;
  pointer-events: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    width: 64px;
    height: 64px;
  }
`;

// The key words of a recommendation on a soft yellow marker, so a skim of
// the cards reads as one story.
export const Highlight = styled.mark`
  padding: 1px 3px;
  color: inherit;
  background: ${({ theme }) => theme.colors.quoteHighlight};
  border-radius: 3px;
  box-decoration-break: clone;
  -webkit-box-decoration-break: clone;
`;
