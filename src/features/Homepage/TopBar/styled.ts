import styled from "styled-components";
import { ButtonLink } from "../ButtonLink";

export const Bar = styled.div`
  position: sticky;
  top: 0;
  z-index: 10;
  padding: 12px 16px;
  background: ${({ theme }) => theme.colors.nav};
  border-bottom: 1px solid ${({ theme }) => theme.colors.headerLine};
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    padding: 8px 12px;
  }
`;

export const Inner = styled.div`
  max-width: 1216px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    flex-wrap: wrap;
    gap: 8px 12px;
  }
`;

export const Brand = styled.a`
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  border-radius: ${({ theme }) => theme.borderRadiusSmall};
`;

export const Logo = styled.span`
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  font-family: ${({ theme }) => theme.fontMono};
  font-size: 15px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textPrimary};
  /* A gradient border around a calm tile: the colours stay, but quietly. */
  background:
    linear-gradient(
        ${({ theme }) => theme.colors.boxBackground},
        ${({ theme }) => theme.colors.boxBackground}
      )
      padding-box,
    ${({ theme }) => theme.colors.gradient} border-box;
  border: 2px solid transparent;
  border-radius: 12px;
`;

export const BrandText = styled.span`
  display: flex;
  flex-direction: column;
  line-height: 1.2;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    display: none;
  }
`;

export const BrandName = styled.span`
  font-size: 16px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const BrandTagline = styled.span`
  margin-top: 2px;
  font-size: 13px;
  color: ${({ theme }) => theme.colors.muted};
`;

export const Nav = styled.nav`
  margin-left: auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    order: 3;
    width: 100%;
    margin: 0;
    overflow-x: auto;
  }
`;

export const NavList = styled.ul`
  display: flex;
  gap: 4px;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const NavLink = styled.a`
  display: block;
  padding: 8px 12px;
  font-size: 15px;
  font-weight: 600;
  white-space: nowrap;
  color: ${({ theme }) => theme.colors.site.text};
  text-decoration: none;
  border-radius: ${({ theme }) => theme.borderRadiusSmall};
  transition:
    color 0.2s,
    background 0.2s;

  &:hover {
    color: ${({ theme }) => theme.colors.textPrimary};
    background: ${({ theme }) => theme.colors.boxBackground};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    padding: 6px 10px;
    font-size: 14px;
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin-left: auto;
  }
`;

export const ContactLink = styled(ButtonLink)`
  padding: 8px 16px;
  font-size: 14px;
`;
