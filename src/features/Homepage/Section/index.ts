import styled from "styled-components";
import { SubHeader } from "../SubHeader";

export const Section = styled.section`
  margin-top: 64px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin-top: 44px;
  }
`;

// A section on a full-width band of its own colour, so the page alternates
// between banded and cream sections instead of one long cream scroll. It
// breaks out of the content column like the story band in "How I test", and
// its content keeps the page's edge. "card" is white (the card colour in the
// dark theme); "quote" is the band under the hero (see quoteBand).
export const BandSection = styled(Section)<{ $band: "card" | "quote" }>`
  margin-inline: calc(50% - 50vw);
  padding: 64px calc(50vw - 50%);
  background: ${({ theme, $band }) =>
    $band === "quote" ? theme.colors.quoteBand : theme.colors.boxBackground};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    padding-block: 44px;
  }
`;

// A short yellow bar above every section heading, the brand accent.
export const SectionHeader = styled(SubHeader)`
  margin-bottom: 24px;

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
  margin: -12px 0 28px;
  font-size: 18px;
  line-height: 1.6;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin: -8px 0 20px;
    font-size: 16px;
  }
`;

// Rounded card used by most sections.
export const Card = styled.div`
  padding: 32px;
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
