import styled from "styled-components";
import a from "color-alpha";

export const OtherProjects = styled.section`
  margin-top: 48px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin-top: 32px;
  }
`;

export const GroupTitle = styled.h3`
  margin: 0;
  font-size: 22px;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.textPrimary};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 17px;
  }
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  grid-gap: 32px;
  margin-top: 32px;
  padding: 0;
  list-style: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    grid-template-columns: 1fr;
    grid-gap: 24px;
  }
`;

export const Tile = styled.li`
  margin: 0;
  padding: 32px;
  background: ${({ theme }) => theme.colors.boxBackground};
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

export const Meta = styled.p`
  margin: 12px 0 0;
  font-size: 15px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin-top: 8px;
    font-size: 13px;
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

export const OtherIntro = styled.p`
  margin: 12px 0 0;
  line-height: 1.5;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 15px;
  }
`;

export const OtherList = styled.ul`
  display: grid;
  grid-gap: 12px;
  margin: 16px 0 0;
  padding-left: 20px;
  line-height: 1.5;

  strong {
    color: ${({ theme }) => theme.colors.textPrimary};
  }

  a {
    margin-left: 8px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 14px;
  }
`;

export const OtherItem = styled.li``;
