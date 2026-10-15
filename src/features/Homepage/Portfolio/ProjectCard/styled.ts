import styled from "styled-components";
import { Chips } from "../../Section";
import { Button, SecondaryButtonLink } from "../../ButtonLink";
import GitHub from "../../Footer/SocialIcons/icons/github.svg?react";
import ChevronDown from "./chevron.svg?react";
import ArrowUpRight from "./external.svg?react";

export const Card = styled.li<{ $expanded: boolean }>`
  display: flex;
  flex-direction: column;
  padding: 24px;
  background: ${({ theme }) => theme.colors.boxBackground};
  border: 1px solid
    ${({ theme, $expanded }) =>
      $expanded ? theme.colors.primary : theme.colors.headerLine};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.boxShadow};
  transition: border-color 0.2s;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    padding: 20px;
  }
`;

export const Name = styled.h3`
  margin: 0;
  font-size: 20px;
  font-weight: 800;
  line-height: 1.3;
  color: ${({ theme }) => theme.colors.textPrimary};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 17px;
  }
`;

export const Teaser = styled.p`
  flex-grow: 1;
  margin: 16px 0 0;
  line-height: 1.6;
`;

export const Facts = styled(Chips)`
  margin-top: 16px;
`;

export const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
`;

// On phones the three don't fit in one row: the case study takes the full
// width, and the demo and the code share the row under it.
export const ToggleButton = styled(Button)`
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    flex-basis: 100%;
    justify-content: center;
  }
`;

export const SmallLink = styled(SecondaryButtonLink)`
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    flex: 1;
    justify-content: center;
  }
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
