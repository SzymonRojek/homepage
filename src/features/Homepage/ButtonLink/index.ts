import styled, { css } from "styled-components";
import Envelope from "./envelope.svg?react";

const buttonStyles = css`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 11px 20px;
  font-size: 15px;
  line-height: 20px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.onPrimary};
  text-decoration: none;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadiusSmall};
  background: ${({ theme }) => theme.colors.primary};
  transition: background 0.2s;

  &:hover {
    background: ${({ theme }) => theme.colors.primaryHover};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    padding: 10px 16px;
    font-size: 14px;
  }
`;

export const ButtonLink = styled.a`
  ${buttonStyles}
`;

// The same look for an action that stays on the page, e.g. opening a section.
export const Button = styled.button`
  ${buttonStyles}
  font-family: inherit;
  cursor: pointer;
`;

// The quiet look of a secondary action (Demo, Code, closing the technical
// details): the card colour with a thin border. On hover the fill takes the
// page's tone and the border darkens, a clear step like the main buttons'.
export const secondaryButton = css`
  color: ${({ theme }) => theme.colors.textPrimary};
  background: ${({ theme }) => theme.colors.boxBackground};
  border: 1px solid ${({ theme }) => theme.colors.headerLine};
  transition:
    background-color 0.2s,
    border-color 0.2s;

  &:hover {
    background: ${({ theme }) => theme.colors.secondaryHover};
    border-color: ${({ theme }) => theme.colors.textPrimary};
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

export const SecondaryButtonLink = styled(ButtonLink)`
  padding: 10px 19px;
  ${secondaryButton}

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    padding: 9px 15px;
  }
`;

export const EnvelopeIcon = styled(Envelope)`
  width: 18px;
  height: 18px;
  flex-shrink: 0;
`;
