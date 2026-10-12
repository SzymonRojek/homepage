import styled from "styled-components";
import { ButtonLinks } from "../ButtonLink";

export const Wrapper = styled.header`
  position: relative;
  isolation: isolate;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 56px;
  align-items: center;
  padding: 72px 0 24px;

  /* Dotted grid and a soft glow only behind the portrait, so the photo is
     the one strong element in the hero. */
  &::before {
    content: "";
    position: absolute;
    inset: 0 -16px;
    z-index: -1;
    background:
      radial-gradient(
        circle at 16% 50%,
        ${({ theme }) => theme.colors.glow.qa},
        transparent 30%
      ),
      radial-gradient(
          ${({ theme }) => theme.colors.gridDot} 1px,
          transparent 1px
        )
        0 0 / 24px 24px;
    mask-image: radial-gradient(circle at 16% 50%, #000 10%, transparent 34%);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    gap: 32px;
    padding-top: 48px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    grid-template-columns: 1fr;
    gap: 20px;
    padding: 32px 0 8px;

    &::before {
      inset: 0 -12px;
      mask-image: radial-gradient(circle at 50% 22%, #000 10%, transparent 45%);
    }
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
  padding: 6px 14px;
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.dev.accent};
  background: ${({ theme }) => theme.colors.dev.soft};
  border: 1px solid ${({ theme }) => theme.colors.dev.border};
  border-radius: 999px;

  &::before {
    content: "";
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: currentColor;
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.dev.border};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin-bottom: 12px;
    font-size: 12px;
    padding: 4px 10px;
  }
`;

export const Name = styled.h1`
  margin: 0;
  font-size: 56px;
  font-weight: 900;
  line-height: 1.05;
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.colors.textPrimary};

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    font-size: 44px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 34px;
  }
`;

export const Title = styled.p`
  margin: 10px 0 0;
  font-size: 24px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textPrimary};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 19px;
  }
`;

export const SecondaryTitle = styled.span`
  font-weight: 500;
  color: ${({ theme }) => theme.colors.muted};
`;

export const Tagline = styled.p`
  margin: 8px 0 0;
  font-size: 19px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.qa.accent};

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
