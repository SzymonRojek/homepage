import styled, { css } from "styled-components";
import { ButtonLink } from "../ButtonLink";

// The bar is the positioning box for the menu panel on small screens.
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
  display: flex;
  align-items: center;
  gap: 24px;
  max-width: 1216px;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    gap: 12px;
  }
`;

export const Brand = styled.a`
  display: flex;
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
  color: ${({ theme }) => theme.colors.site.background};
  background: ${({ theme }) => theme.colors.textPrimary};
  border-radius: ${({ theme }) => theme.borderRadiusSmall};
`;

// In the bar on wide screens; a panel under the bar, shown by the menu
// button, on phones and tablets.
export const Nav = styled.nav<{ $open: boolean }>`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-left: auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    display: ${({ $open }) => ($open ? "block" : "none")};
    position: absolute;
    top: 100%;
    right: 0;
    left: 0;
    margin: 0;
    padding: 8px 16px 16px;
    gap: 0;
    background: ${({ theme }) => theme.colors.boxBackground};
    border-bottom: 1px solid ${({ theme }) => theme.colors.headerLine};
    box-shadow: ${({ theme }) => theme.boxShadow};
  }
`;

export const NavList = styled.ul`
  display: flex;
  gap: 4px;
  margin: 0;
  padding: 0;
  list-style: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    flex-direction: column;
    max-width: 1216px;
    margin: 0 auto;
  }
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

  /* Large tap targets in the menu panel. */
  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    padding: 12px;
    font-size: 17px;

    &:hover {
      background: ${({ theme }) => theme.colors.site.background};
    }
  }
`;

// Contact and the theme switch: in the bar on wide screens; on phones and
// tablets a row under the menu links, Contact left and the switch right.
export const MenuFooter = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    justify-content: space-between;
    max-width: 1216px;
    margin: 8px auto 0;
    padding: 16px 12px 0;
    border-top: 1px solid ${({ theme }) => theme.colors.headerLine};
  }
`;

export const ContactLink = styled(ButtonLink)`
  padding: 8px 16px;
  font-size: 14px;
  white-space: nowrap;
`;

export const MenuButton = styled.button`
  display: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    display: grid;
    place-items: center;
    margin-left: auto;
    width: 40px;
    height: 40px;
    padding: 0;
    color: ${({ theme }) => theme.colors.textPrimary};
    background: ${({ theme }) => theme.colors.boxBackground};
    border: 1px solid ${({ theme }) => theme.colors.headerLine};
    border-radius: ${({ theme }) => theme.borderRadiusSmall};
    cursor: pointer;
  }
`;

// Three lines that turn into a cross while the menu is open.
export const MenuIcon = styled.span<{ $open: boolean }>`
  display: grid;
  gap: 4px;
  width: 18px;

  span {
    display: block;
    height: 2px;
    background: currentColor;
    border-radius: 1px;
    transition:
      transform 0.2s,
      opacity 0.2s;
  }

  ${({ $open }) =>
    $open &&
    css`
      span:nth-child(1) {
        transform: translateY(6px) rotate(45deg);
      }

      span:nth-child(2) {
        opacity: 0;
      }

      span:nth-child(3) {
        transform: translateY(-6px) rotate(-45deg);
      }
    `}

  @media (prefers-reduced-motion: reduce) {
    span {
      transition: none;
    }
  }
`;
