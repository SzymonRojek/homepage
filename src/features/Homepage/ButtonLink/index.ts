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

export const SecondaryButtonLink = styled(ButtonLink)`
  padding: 10px 19px;
  color: ${({ theme }) => theme.colors.textPrimary};
  background: ${({ theme }) => theme.colors.boxBackground};
  border: 1px solid ${({ theme }) => theme.colors.headerLine};
  transition: border-color 0.2s;

  &:hover {
    background: ${({ theme }) => theme.colors.boxBackground};
    border-color: ${({ theme }) => theme.colors.textPrimary};
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    padding: 9px 15px;
  }
`;

export const EnvelopeIcon = styled(Envelope)`
  width: 18px;
  height: 18px;
  flex-shrink: 0;
`;
