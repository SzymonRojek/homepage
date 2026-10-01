import styled from "styled-components";
import Envelope from "./envelope.svg?react";

export const ButtonLink = styled.a`
  display: inline-flex;
  align-items: center;
  padding: 12px 16px;
  font-size: 20px;
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
    font-size: 18px;
  }
`;

export const SecondaryButtonLink = styled(ButtonLink)`
  color: ${({ theme }) => theme.colors.primary};
  background: transparent;
  border-color: ${({ theme }) => theme.colors.primary};
`;

export const EnvelopeIcon = styled(Envelope)`
  margin-right: 16px;
`;

export const ButtonLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 32px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    gap: 12px;
    margin-top: 24px;
  }
`;
