import styled, { css } from "styled-components";
import { Button, SecondaryButtonLink } from "../../ButtonLink";
import GitHub from "../../Footer/SocialIcons/icons/github.svg?react";
import ChevronDown from "./chevron.svg?react";
import ArrowUpRight from "./external.svg?react";

interface Featured {
  $featured: boolean;
}

// The featured card is the brand band in small: deep green, cream text, a
// yellow accent and the soft yellow ring of the hero in its corner. The other
// card is white with a thin border. An open card's border turns to the
// accent: yellow on the green card, the page's main colour on the white one.
export const Card = styled.li<{ $expanded: boolean } & Featured>`
  /* The buttons below lay out by the card's own width, not the screen's. */
  container-type: inline-size;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 32px;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.boxBackground};
  border: 1px solid
    ${({ theme, $expanded }) =>
      $expanded ? theme.colors.primary : theme.colors.headerLine};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.boxShadow};
  transition: border-color 0.2s;

  ${({ theme, $featured, $expanded }) =>
    $featured &&
    css`
      color: ${theme.colors.brand.text};
      background: ${theme.colors.brand.background};
      border-color: ${
        $expanded ? theme.colors.brand.accent : theme.colors.brand.background
      };

      &::after {
        content: "";
        position: absolute;
        right: -120px;
        bottom: -120px;
        width: 300px;
        height: 300px;
        border: 56px solid ${theme.colors.brand.accent};
        border-radius: 50%;
        opacity: 0.1;
        pointer-events: none;
      }

      /* The content above the ring. */
      & > * {
        position: relative;
        z-index: 1;
      }

      *:focus-visible {
        outline-color: ${theme.colors.brand.accent};
      }
    `}

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    padding: 22px;
  }
`;

// What kind of project it is, in small capitals: yellow on the green card,
// the testing green on the white one.
export const Tag = styled.p<Featured>`
  margin: 0 0 12px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${({ theme, $featured }) =>
    $featured ? theme.colors.brand.accent : theme.colors.qa.accent};
`;

// The same size on both cards: the green one stands out by its colour.
export const Name = styled.h3<Featured>`
  margin: 0;
  font-size: 24px;
  font-weight: 800;
  line-height: 1.18;
  letter-spacing: -0.02em;
  color: ${({ theme, $featured }) =>
    $featured ? theme.colors.brand.text : theme.colors.textPrimary};
  text-wrap: balance;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 21px;
  }
`;

export const Teaser = styled.p<Featured>`
  max-width: 34em;
  margin: 14px 0 0;
  font-size: ${({ $featured }) => ($featured ? "17px" : "16px")};
  line-height: 1.6;
  color: ${({ theme, $featured }) =>
    $featured ? theme.colors.brand.muted : "inherit"};
`;

// The facts as a short list with ticks: in a row on the green card, one under
// another on the white one.
export const Facts = styled.ul<Featured>`
  display: flex;
  flex-direction: ${({ $featured }) => ($featured ? "row" : "column")};
  flex-wrap: wrap;
  gap: ${({ $featured }) => ($featured ? "8px 24px" : "8px")};
  margin: 22px 0 0;
  padding: 0;
  list-style: none;
  font-size: 15px;
  color: ${({ theme, $featured }) =>
    $featured ? theme.colors.brand.text : theme.colors.textPrimary};

  li::before {
    /* Decorative: the empty alt keeps screen readers from saying "tick". */
    content: "✓" / "";
    margin-right: 8px;
    font-weight: 700;
    color: ${({ theme, $featured }) =>
      $featured ? theme.colors.brand.accent : theme.colors.qa.accent};
  }
`;

// The buttons keep their own width, never stretched, in one row while they
// fit. With three of them, a narrow card gives the case study the first row
// and puts the demo and the code side by side under it, all to the left; two
// stay side by side until the card has no room left for both.
export const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
  /* At the bottom of the card, so both cards end their buttons level. */
  margin-top: auto;
  padding-top: 28px;

  @container (max-width: 379px) {
    &:has(> :nth-child(3)) {
      display: grid;
      grid-template-columns: auto auto;
      justify-content: start;

      & > :first-child {
        grid-column: 1 / -1;
        justify-self: start;
      }
    }
  }
`;

// On the green card the main button is yellow, as in the hero, and the links
// are outlined in cream.
export const ToggleButton = styled(Button)<Featured>`
  ${({ theme, $featured }) =>
    $featured &&
    css`
      color: ${theme.colors.brand.onAccent};
      background: ${theme.colors.brand.accent};

      &:hover {
        background: ${theme.colors.brand.accentHover};
      }
    `}
`;

export const SmallLink = styled(SecondaryButtonLink)<Featured>`
  ${({ theme, $featured }) =>
    $featured &&
    css`
      color: ${theme.colors.brand.text};
      background: transparent;
      border-color: ${theme.colors.brand.controlBorder};

      &:hover {
        background: ${theme.colors.brand.control};
        border-color: ${theme.colors.brand.text};
      }
    `}
`;

// Points down while the case study is closed, up once it is open.
export const Chevron = styled(ChevronDown)<{ $expanded: boolean }>`
  width: 16px;
  height: 16px;
  flex-shrink: 0;
  transform: rotate(${({ $expanded }) => ($expanded ? "180deg" : "0")});
  transition: transform 0.2s;

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

// On hover the arrow nudges the way it points, and the GitHub mark lifts.
const iconMotion = `
  transition: transform 0.2s;

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

export const ExternalIcon = styled(ArrowUpRight)`
  width: 15px;
  height: 15px;
  flex-shrink: 0;
  ${iconMotion}

  ${SmallLink}:hover & {
    transform: translate(2px, -2px);
  }
`;

export const GitHubIcon = styled(GitHub)`
  width: 16px;
  height: 16px;
  flex-shrink: 0;
  ${iconMotion}

  ${SmallLink}:hover & {
    transform: translateY(-2px);
  }
`;
