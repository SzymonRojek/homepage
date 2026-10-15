import styled from "styled-components";
import { BandSection } from "../Section";

// The first section, on its own band right under the hero; "How I test" meets
// it edge to edge on its green band.
export const QuoteBand = styled(BandSection)`
  margin-top: 0;
`;

export const HiddenHeading = styled.h2`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
`;

// Jim's verdict, large, like a headline in a magazine, and still: the cards
// below carry the details.
export const Pull = styled.figure`
  margin: 0;

  blockquote {
    margin: 0;
  }

  blockquote p {
    max-width: 20em;
    margin: 0;
    font-family: ${({ theme }) => theme.fontDisplay};
    font-size: 44px;
    font-weight: 800;
    line-height: 1.15;
    letter-spacing: -0.03em;
    color: ${({ theme }) => theme.colors.textPrimary};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    blockquote p {
      font-size: 34px;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    blockquote p {
      font-size: 28px;
    }
  }
`;

// The end of the sentence in yellow: a marker behind dark words in the light
// theme, yellow words in the dark one. Only a marker gets side padding, so
// plain yellow words keep normal spacing. The words never split across two
// lines, so the punchline lands whole on a line of its own.
export const Mark = styled.mark`
  white-space: nowrap;
  padding: 0
    ${({ theme }) =>
      theme.colors.quoteMark.background === "transparent" ? "0" : "0.12em"};
  color: ${({ theme }) => theme.colors.quoteMark.text};
  background: ${({ theme }) => theme.colors.quoteMark.background};
  border-radius: ${({ theme }) => theme.borderRadiusSmall};
  box-decoration-break: clone;
  -webkit-box-decoration-break: clone;
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
  margin-top: 44px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    grid-template-columns: 1fr;
    gap: 16px;
    margin-top: 32px;
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
  order: ${({ $order }) => $order};
  padding: 28px 32px 30px;
  background: ${({ theme }) => theme.colors.quoteCard};
  border: 1px solid ${({ theme }) => theme.colors.headerLine};
  border-radius: ${({ theme }) => theme.borderRadius};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    padding: 22px 20px 24px;
  }
`;

// Who first, then what: recruiters look for who wrote a recommendation (NN/g
// eyetracking), so the byline leads, above a thin rule. The card already
// reads as a quote, so the text has no quotation marks.
export const Quote = styled.figure`
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
