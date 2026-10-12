import styled from "styled-components";
import Envelope from "./envelope.svg?react";
import LinkedIn from "../Footer/SocialIcons/icons/linkedin.svg?react";

export const ButtonLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 11px 20px;
  font-size: 15px;
  line-height: 20px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.onGradient};
  text-decoration: none;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadiusSmall};
  background: ${({ theme }) => theme.colors.gradient};
  transition:
    box-shadow 0.2s,
    transform 0.2s;

  &:hover {
    box-shadow: 0 6px 20px ${({ theme }) => theme.colors.glow.dev};
    transform: translateY(-1px);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    padding: 10px 16px;
    font-size: 14px;
  }
`;

export const SecondaryButtonLink = styled(ButtonLink)`
  padding: 10px 19px;
  color: ${({ theme }) => theme.colors.textPrimary};
  background: ${({ theme }) => theme.colors.boxBackground};
  border: 1px solid ${({ theme }) => theme.colors.headerLine};

  &:hover {
    box-shadow: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    padding: 9px 15px;
  }
`;

// Square button with only an icon; give it an aria-label.
export const IconButtonLink = styled(SecondaryButtonLink)`
  padding: 10px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    padding: 9px;
  }
`;

export const EnvelopeIcon = styled(Envelope)`
  width: 18px;
  height: 18px;
  flex-shrink: 0;
`;

export const LinkedInIcon = styled(LinkedIn)`
  width: 18px;
  height: 18px;
  flex-shrink: 0;
`;

export const ButtonLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 28px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    gap: 10px;
    margin-top: 20px;
  }
`;
