import styled from "styled-components";

export const Wrapper = styled.header`
  position: relative;
  isolation: isolate;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 56px;
  align-items: center;
  padding: 72px 0 24px;

  /* Dotted grid with a green (build) and a cyan (test) glow, faded at the edges. */
  &::before {
    content: "";
    position: absolute;
    inset: 0 -16px;
    z-index: -1;
    background:
      radial-gradient(
        circle at 10% 30%,
        ${({ theme }) => theme.colors.glow.dev},
        transparent 40%
      ),
      radial-gradient(
        circle at 90% 70%,
        ${({ theme }) => theme.colors.glow.qa},
        transparent 40%
      ),
      radial-gradient(
          ${({ theme }) => theme.colors.gridDot} 1px,
          transparent 1px
        )
        0 0 / 24px 24px;
    mask-image: radial-gradient(ellipse at 50% 45%, #000 45%, transparent 80%);
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
    }
  }
`;

export const Details = styled.div`
  min-width: 0;
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

// Darker gradient stops in the light theme keep the text at 4.5:1.
export const Tagline = styled.p`
  width: fit-content;
  margin: 6px 0 0;
  font-size: 22px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.dev.accent};
  background: ${({ theme }) => theme.colors.gradientText};
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 18px;
  }
`;

export const Location = styled.p`
  margin: 16px 0 0;
  font-size: 15px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.muted};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 13px;
  }
`;

export const Summary = styled.p`
  max-width: 680px;
  margin: 16px 0 0;
  font-size: 18px;
  line-height: 1.6;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 15px;
  }
`;

export const Highlights = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 24px 0 0;
  padding: 0;
  list-style: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin-top: 16px;
  }
`;

export const Highlight = styled.li`
  padding: 6px 14px;
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textPrimary};
  background: ${({ theme }) => theme.colors.boxBackground};
  border: 1px solid ${({ theme }) => theme.colors.headerLine};
  border-radius: 999px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 13px;
    padding: 4px 10px;
  }
`;
