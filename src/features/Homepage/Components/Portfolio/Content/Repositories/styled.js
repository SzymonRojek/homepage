import styled from "styled-components";
import a from "color-alpha";

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 32px;
  margin-top: 24px;
  padding: 0;
  list-style: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    grid-template-columns: 1fr;
    grid-gap: 24px;
  }
`;

export const Tile = styled.li`
  margin: 0;
  padding: 56px;
  background: ${({ theme }) => theme.boxBackground};
  border: 6px solid ${({ theme }) => theme.colors.tile.border};
  transition: border-color 0.3s;
  box-shadow: ${({ theme }) => theme.boxShadow};
  border-radius: ${({ theme }) => theme.borderRadiusSmall};

  &:hover {
    border-color: ${({ theme }) => theme.colors.tile.borderHover};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    padding: 20px;
  }
`;

export const Name = styled.h3`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.tile.header};
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 16px;
  }
`;

export const Description = styled.p`
  margin-top: 24px;
  line-height: 1.4;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin-top: 16px;
    font-size: 14px;
  }
`;

export const Links = styled.dl`
  display: grid;
  grid-gap: 8px;
  line-height: 1.6;
  margin-top: 24px;
  margin-bottom: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin-top: 16px;
    font-size: 14px;
  }
`;

export const LinksRow = styled.div`
  display: grid;
  grid-template-columns: 4em 1fr;
`;

export const LinksValue = styled.dd`
  margin: 0;
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  border-bottom: 1px solid ${({ theme }) => a(theme.colors.primary, 0.3)};
  padding-bottom: 1px;

  &:hover {
    border-color: unset;
  }
`;
