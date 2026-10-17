import styled from "styled-components";
import { columnInset } from "../../../core/App/contentColumn";
import { BandSection } from "../Section";
import BugSvg from "./bug.svg?react";

// The whole section is one block on the deep brand green, the same in both
// themes: cream text, muted cream for the long text, yellow accents. Focus
// rings are yellow here, as on the hero, because the page's green ring would
// vanish on green. "clip" cuts the bug at the band's edges without making
// the band a scroll container; "isolate" keeps the bug above the band's
// background and below its text.
export const Block = styled(BandSection)`
  /* The first section, right under the hero: the near-black runs into the
     green with no page colour between them. */
  margin-top: 0;
  position: relative;
  isolation: isolate;
  overflow: clip;
  color: ${({ theme }) => theme.colors.brand.text};

  *:focus-visible {
    outline-color: ${({ theme }) => theme.colors.brand.accent};
  }
`;

// A faint outline of a bug in the top-right corner of the content column,
// cut by the band's right edge up to the column's full width, a motif behind
// the story, not an illustration. Its top is level with
// the section's label ("01 / How I test at work"): the band's padding and the
// label's opening, less the empty space above the drawing in the rotated SVG
// (22px, 13px on phones).
export const Bug = styled(BugSvg)`
  position: absolute;
  z-index: -1;
  top: ${({ theme }) => theme.layout.section.desktop + 32 - 22}px;
  right: calc(${columnInset} - 56px);
  width: 300px;
  height: 300px;
  color: ${({ theme }) => theme.colors.brand.accent};
  opacity: 0.12;
  transform: rotate(-25deg);
  pointer-events: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    top: ${({ theme }) => theme.layout.section.desktop + 24 - 22}px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    top: ${({ theme }) => theme.layout.section.mobile + 16 - 13}px;
    right: calc(${columnInset} - 40px);
    width: 180px;
    height: 180px;
  }
`;

// My story opens the block: the title on the left, the story on the right.
export const Story = styled.article`
  display: grid;
  grid-template-columns: 1fr 1.25fr;
  gap: 56px;
  align-items: start;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

// The story's title is the section's title on screen.
export const StoryTitle = styled.h3`
  margin: 0;
  font-size: 52px;
  font-weight: 800;
  line-height: 1.08;
  letter-spacing: -0.035em;
  color: ${({ theme }) => theme.colors.brand.text};
  text-wrap: balance;

  em {
    font-style: normal;
    color: ${({ theme }) => theme.colors.brand.accent};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    font-size: 40px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 32px;
  }
`;

export const StoryText = styled.div`
  p {
    margin: 0 0 14px;
    font-size: 17px;
    line-height: 1.7;
    color: ${({ theme }) => theme.colors.brand.muted};
  }

  p:last-child {
    margin-bottom: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    p {
      font-size: 16px;
    }
  }
`;

// The method under the story: three stages side by side, split by thin
// lines, so each stands on its own, and joined by a yellow arrow on each line
// pointing to the next stage (down when they stack), so they read as one
// process. No frame or panel (it looked like a table) and no numbers (the
// arrows give the order). Each stage: the title, one short line and a few
// ticked points. Up to tablets the stages stack, with the title and the line
// on the left and the points on the right; on phones each stage is one column.
export const Steps = styled.ol`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  margin: 56px 0 0;
  padding: 0;
  list-style: none;

  > li {
    position: relative;
    display: grid;
    grid-template-areas:
      "title"
      "summary"
      "points";
    align-content: start;
    padding: 0 32px;
  }

  > li:first-child {
    padding-left: 0;
  }

  > li:last-child {
    padding-right: 0;
  }

  > li + li {
    border-left: 1px solid ${({ theme }) => theme.colors.brand.line};
  }

  /* The arrow to the next stage, on the divider, level with the title.
     Decorative: the list already gives the order. */
  > li + li::before {
    content: "→" / "";
    position: absolute;
    top: -1px;
    left: -15px;
    display: grid;
    place-items: center;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.brand.accent};
    color: ${({ theme }) => theme.colors.brand.onAccent};
    font-size: 15px;
    font-weight: 700;
    line-height: 1;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletHorizontalMax}px) {
    > li {
      padding: 0 24px;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    grid-template-columns: minmax(0, 1fr);
    margin-top: 40px;

    > li,
    > li:first-child,
    > li:last-child {
      grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
      grid-template-rows: auto 1fr;
      grid-template-areas:
        "title points"
        "summary points";
      column-gap: 32px;
      padding: 0 0 32px;
    }

    > li:last-child {
      padding-bottom: 0;
    }

    > li:not(:first-child) {
      border-left: 0;
      border-top: 1px solid ${({ theme }) => theme.colors.brand.line};
      /* Clear of the arrow on the divider. */
      padding-top: 36px;
    }

    > li + li::before {
      content: "↓" / "";
      top: -15px;
      left: 0;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin-top: 32px;

    > li,
    > li:first-child,
    > li:last-child {
      grid-template-columns: minmax(0, 1fr);
      grid-template-rows: none;
      grid-template-areas:
        "title"
        "summary"
        "points";
      padding-bottom: 28px;
    }

    > li:last-child {
      padding-bottom: 0;
    }
  }
`;

export const StepTitle = styled.h3`
  grid-area: title;
  margin: 0;
  font-size: 20px;
  line-height: 1.3;
  letter-spacing: -0.01em;
  color: ${({ theme }) => theme.colors.brand.text};
  text-wrap: balance;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 18px;
  }
`;

export const StepSummary = styled.p`
  grid-area: summary;
  margin: 10px 0 0;
  font-size: 16px;
  line-height: 1.55;
  color: ${({ theme }) => theme.colors.brand.muted};
  text-wrap: pretty;
`;

export const StepPoints = styled.ul`
  grid-area: points;
  display: grid;
  align-content: start;
  gap: 10px;
  margin: 18px 0 0;
  padding: 0;
  list-style: none;
  font-size: 15px;
  line-height: 1.45;
  color: ${({ theme }) => theme.colors.brand.text};

  li {
    display: grid;
    grid-template-columns: 22px minmax(0, 1fr);
  }

  li::before {
    /* Decorative: the empty alt keeps screen readers from saying "tick". */
    content: "✓" / "";
    font-weight: 700;
    color: ${({ theme }) => theme.colors.brand.accent};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    margin-top: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin-top: 16px;
  }
`;
