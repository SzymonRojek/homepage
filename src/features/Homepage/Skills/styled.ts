import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    grid-template-columns: 1fr;
    grid-gap: 16px;
  }
`;

export const Card = styled.article`
  padding: 32px;
  background: ${({ theme }) => theme.colors.boxBackground};
  box-shadow: ${({ theme }) => theme.boxShadow};
  border-radius: ${({ theme }) => theme.borderRadiusSmall};
  transition: background 0.3s;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    padding: 16px;
  }
`;

export const Title = styled.h3`
  margin: 0;
  padding-bottom: 16px;
  font-size: 22px;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.textPrimary};
  border-bottom: 1px solid ${({ theme }) => theme.colors.headerLine};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    padding-bottom: 12px;
    font-size: 17px;
  }
`;

export const List = styled.ul`
  display: grid;
  grid-gap: 8px;
  margin: 16px 0 0;

  &:first-child {
    margin-top: 0;
  }
  padding: 0;
  list-style: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletHorizontalMax}px) {
    font-size: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin-top: 12px;
    font-size: 14px;
  }
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  line-height: 1.4;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    line-height: 1.2;
  }
`;

export const Dot = styled.img`
  margin-right: 16px;
  height: 10px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    height: 7px;
    width: 7px;
    margin-right: 8px;
  }
`;
