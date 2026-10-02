import styled from "styled-components";
import Envelope from "./envelope.svg?react";
import Download from "./download.svg?react";
import LinkedIn from "../Footer/SocialIcons/icons/linkedin.svg?react";

export const ButtonLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 9px 16px;
  font-size: 15px;
  line-height: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.buttonLink.text};
  text-decoration: none;
  border: 1px solid ${({ theme }) => theme.colors.buttonLink.border};
  border-radius: ${({ theme }) => theme.borderRadiusSmall};
  background: ${({ theme }) => theme.colors.primary};
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.buttonLink.shadow};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    padding: 8px 14px;
    font-size: 14px;
  }
`;

export const SecondaryButtonLink = styled(ButtonLink)`
  color: ${({ theme }) => theme.colors.primary};
  background: transparent;
  border-color: ${({ theme }) => theme.colors.primary};
`;

// Square button with only an icon; give it an aria-label.
export const IconButtonLink = styled(SecondaryButtonLink)`
  padding: 9px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    padding: 8px;
  }
`;

export const EnvelopeIcon = styled(Envelope)`
  width: 18px;
  height: 18px;
  flex-shrink: 0;
`;

export const DownloadIcon = styled(Download)`
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
  margin-top: 32px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    gap: 10px;
    margin-top: 24px;
  }
`;
