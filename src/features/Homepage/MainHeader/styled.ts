import styled from "styled-components";

export const Wrapper = styled.header`
  margin-top: -30px; // that's the height of the theme switcher
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 64px;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    grid-gap: 32px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    grid-template-columns: 1fr;
    /* grid-gap: 12px; */
  }
`;

export const Avatar = styled.img`
  width: 30vw;
  max-width: 384px;
  border-top-right-radius: 50%;
  border-bottom-right-radius: 50%;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    width: 132px;
  }
`;

export const Details = styled.div`
  margin-left: 66px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin: 0;
  }
`;

export const ThisIs = styled.p`
  margin: 0;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: initial;
`;

export const Name = styled.h1`
  font-size: 38px;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin: 12px 0 0 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 18px;
    margin-top: 8px;
  }
`;

export const Title = styled.p`
  margin: 16px 0 0;
  font-size: 24px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin-top: 8px;
    font-size: 17px;
  }
`;

export const Summary = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.5;
  margin: 24px 0 0;
  max-width: 650px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    margin-top: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 15px;
  }
`;

export const Location = styled.p`
  margin: 16px 0 0;
  font-size: 16px;
  font-weight: 600;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 14px;
  }
`;
