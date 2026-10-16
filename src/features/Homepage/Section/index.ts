import styled, { css } from "styled-components";
import { SubHeader } from "../SubHeader";

export const Section = styled.section`
  margin-top: ${({ theme }) => theme.layout.section.desktop}px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin-top: ${({ theme }) => theme.layout.section.mobile}px;
  }
`;

const bands = {
  card: "cardBand",
  quote: "quoteBand",
  brand: "brandBand",
} as const;

// A section on a full-width band of its own colour, so each section reads as
// its own block instead of one long cream scroll. It breaks out of the
// content column, and its content keeps the page's edge. "card" is white (the
// card colour in the dark theme); "quote" is the band under the hero (see
// quoteBand); "brand" is the deep green of "How I test at work", which sets
// its own cream text. Bands that follow one another meet edge to edge, with
// no page colour between them.
export const BandSection = styled(Section).attrs({
  className: "section-band",
})<{
  $band: keyof typeof bands;
}>`
  margin-inline: calc(50% - 50vw);
  padding: ${({ theme }) => theme.layout.section.desktop}px calc(50vw - 50%);
  background: ${({ theme, $band }) => theme.colors[bands[$band]]};

  .section-band + & {
    margin-top: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    padding-block: ${({ theme }) => theme.layout.section.mobile}px;
  }
`;

// A section's heading, plain: no decorative bar above it (it read as a
// template).
export const SectionHeader = styled(SubHeader)`
  margin-bottom: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin-bottom: 16px;
  }
`;

// One sentence large, like a headline in a magazine, under a small heading.
export const bigLine = css`
  margin: 0;
  font-family: ${({ theme }) => theme.fontDisplay};
  font-size: 44px;
  font-weight: 800;
  line-height: 1.15;
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.colors.textPrimary};

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    font-size: 34px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 28px;
  }
`;

// The key words of a big line in yellow: a marker behind dark words in the
// light theme, yellow words in the dark one. Only a marker gets side padding,
// so plain yellow words keep normal spacing. The words never split across two
// lines, so they land whole.
export const BigLineMark = styled.mark`
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

// A section heading for screen readers and search engines only, for a
// section whose big line speaks for it on screen. It still names the section
// and is where the top bar's link lands.
export const HiddenSectionHeader = styled.h2`
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

// A section's one big line, under its small heading. Balanced, so no line is
// left with one word.
export const BigLine = styled.p`
  ${bigLine}
  text-wrap: balance;
`;

// A part of a big line on a line of its own, where the break matters.
export const BigLineRow = styled.span`
  display: block;
`;

// One sentence under a section heading, or under its big line.
export const SectionIntro = styled.p`
  max-width: 720px;
  margin: -12px 0 24px;
  font-size: 18px;
  line-height: 1.6;

  ${BigLine} + & {
    margin-top: 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin: -8px 0 20px;
    font-size: 16px;

    ${BigLine} + & {
      margin-top: 16px;
    }
  }
`;

// Rounded card used by most sections.
export const Card = styled.div`
  padding: 28px;
  background: ${({ theme }) => theme.colors.boxBackground};
  border: 1px solid ${({ theme }) => theme.colors.headerLine};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.boxShadow};
  transition: background 0.3s;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    padding: 20px;
  }
`;

// A small rounded tag for tech stacks and facts.
export const Chip = styled.li`
  padding: 4px 11px;
  font-size: 13px;
  font-weight: 500;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.textPrimary};
  background: ${({ theme }) => theme.colors.site.background};
  border: 1px solid ${({ theme }) => theme.colors.headerLine};
  border-radius: ${({ theme }) => theme.borderRadiusSmall};
`;

export const Chips = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 0;
  padding: 0;
  list-style: none;
`;
