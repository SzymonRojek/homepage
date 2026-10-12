import styled from "styled-components";
import { ButtonLinks } from "../ButtonLink";

export const Wrapper = styled.header`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 56px;
  align-items: center;
  padding: 72px 0 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    gap: 32px;
    padding-top: 48px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    grid-template-columns: 1fr;
    gap: 20px;
    padding: 32px 0 8px;
  }
`;

// On phones the photo sits centred above the text, so the text centres too.
export const Details = styled.div`
  min-width: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    text-align: center;

    ${ButtonLinks} {
      justify-content: center;
    }
  }
`;

export const Availability = styled.p`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin: 0 0 16px;
  font-family: ${({ theme }) => theme.fontMono};
  font-size: 13px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.qa.accent};

  /* A still green square: "available", like a passing check. */
  &::before {
    content: "";
    flex-shrink: 0;
    width: 8px;
    height: 8px;
    background: currentColor;
    border-radius: 2px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin-bottom: 12px;
    font-size: 12px;
  }
`;

export const Name = styled.h1`
  margin: 0;
  font-size: 64px;
  font-weight: 700;
  line-height: 1;
  letter-spacing: -0.045em;
  color: ${({ theme }) => theme.colors.textPrimary};

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    font-size: 48px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 38px;
  }
`;

export const Title = styled.p`
  margin: 14px 0 0;
  font-size: 22px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textPrimary};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 19px;
  }
`;

export const SecondaryTitle = styled.span`
  font-weight: 400;
  color: ${({ theme }) => theme.colors.muted};
`;

export const Tagline = styled.p`
  margin: 8px 0 0;
  font-size: 19px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textPrimary};

  &::before {
    content: "✓ ";
    content: "✓ " / "";
    color: ${({ theme }) => theme.colors.qa.accent};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 17px;
  }
`;

export const Location = styled.p`
  margin: 20px 0 0;
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.muted};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 13px;
  }
`;

// About 70 characters a line, a comfortable reading width.
export const Summary = styled.p`
  max-width: 36em;
  margin: 20px 0 0;
  font-size: 18px;
  line-height: 1.6;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin-inline: auto;
    font-size: 15px;
  }
`;
