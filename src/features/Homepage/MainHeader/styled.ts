import styled from "styled-components";

export const Wrapper = styled.header`
  margin-top: 16px;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 56px;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    grid-gap: 32px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    grid-template-columns: 1fr;
    grid-gap: 20px;
  }
`;

export const Avatar = styled.img`
  width: 240px;
  height: 240px;
  object-fit: cover;
  border-radius: 50%;
  border: 6px solid ${({ theme }) => theme.colors.boxBackground};
  box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary};

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    width: 180px;
    height: 180px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    width: 112px;
    height: 112px;
    border-width: 4px;
  }
`;

export const Details = styled.div`
  min-width: 0;
`;

export const Name = styled.h1`
  font-size: 44px;
  font-weight: 900;
  line-height: 1.1;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 28px;
  }
`;

export const Title = styled.p`
  margin: 8px 0 0;
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

export const Availability = styled.p`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin: 16px 0 0;
  padding: 6px 14px;
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 999px;

  &::before {
    content: "";
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 12px;
    padding: 4px 10px;
  }
`;

export const Location = styled.p`
  margin: 12px 0 0;
  font-size: 15px;
  font-weight: 600;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 13px;
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
  font-size: 15px;
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
