import styled from "styled-components";
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
  test: "testBand",
} as const;

// A section on a full-width band of its own colour, so each section reads as
// its own block instead of one long cream scroll. It breaks out of the
// content column like the story band in "How I test", and its content keeps
// the page's edge. "card" is white (the card colour in the dark theme);
// "quote" is the band under the hero (see quoteBand); "test" is the soft test
// green of "How I test at work". Bands that follow one another meet edge to
// edge, with no page colour between them.
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

// A short yellow bar above every section heading, the brand accent.
export const SectionHeader = styled(SubHeader)`
  margin-bottom: 20px;

  &::before {
    content: "";
    display: block;
    width: 44px;
    height: 6px;
    margin-bottom: 16px;
    background: ${({ theme }) => theme.colors.brand.accent};
    border-radius: 3px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin-bottom: 16px;

    &::before {
      margin-bottom: 12px;
    }
  }
`;

// One sentence under a section heading.
export const SectionIntro = styled.p`
  max-width: 720px;
  margin: -12px 0 24px;
  font-size: 18px;
  line-height: 1.6;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin: -8px 0 20px;
    font-size: 16px;
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
