import styled from "styled-components";
import { BandSection, sectionOpening } from "../Section";
import BugSvg from "./bug.svg?react";

// The whole section is one block on the deep brand green, the same in both
// themes: cream text, muted cream for the long text, yellow accents. Focus
// rings are yellow here, as on the hero, because the page's green ring would
// vanish on green. "clip" cuts the bug at the band's edges without making
// the band a scroll container; "isolate" keeps the bug above the band's
// background and below its text.
export const Block = styled(BandSection)`
  position: relative;
  isolation: isolate;
  overflow: clip;
  color: ${({ theme }) => theme.colors.brand.text};

  *:focus-visible {
    outline-color: ${({ theme }) => theme.colors.brand.accent};
  }
`;

// A faint outline of a bug in the top-right corner, cut by the band's edges,
// like the yellow ring on the hero and the footer: a motif behind the story,
// not an illustration.
export const Bug = styled(BugSvg)`
  position: absolute;
  z-index: -1;
  top: -48px;
  right: -56px;
  width: 300px;
  height: 300px;
  color: ${({ theme }) => theme.colors.brand.accent};
  opacity: 0.12;
  transform: rotate(-25deg);
  pointer-events: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    top: -28px;
    right: -40px;
    width: 180px;
    height: 180px;
  }
`;

// My story opens the block: the title and the punchline on the left, the
// story on the right.
export const Story = styled.article`
  ${sectionOpening}
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

export const Punchline = styled.p`
  margin: 18px 0 0;
  font-family: ${({ theme }) => theme.fontDisplay};
  font-size: 18px;
  font-weight: 700;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.brand.accent};

  &::before {
    content: "“";
  }

  &::after {
    content: "”";
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

// The method under the story: three steps side by side, each under a thin
// line with a small yellow number; one under another up to tablets.
export const Steps = styled.ol`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 40px;
  margin: 56px 0 0;
  padding: 0;
  list-style: none;

  li {
    padding-top: 20px;
    border-top: 1px solid ${({ theme }) => theme.colors.brand.line};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    grid-template-columns: minmax(0, 1fr);
    gap: 28px;
    margin-top: 40px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin-top: 32px;
    gap: 24px;

    li {
      padding-top: 16px;
    }
  }
`;

export const StepNumber = styled.span`
  display: block;
  font-family: ${({ theme }) => theme.fontDisplay};
  font-size: 14px;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.brand.accent};
`;

export const StepTitle = styled.h3`
  margin: 8px 0 0;
  font-size: 19px;
  line-height: 1.3;
  color: ${({ theme }) => theme.colors.brand.text};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 18px;
  }
`;

export const StepText = styled.p`
  margin: 10px 0 0;
  font-size: 15px;
  line-height: 1.65;
  color: ${({ theme }) => theme.colors.brand.muted};
`;
