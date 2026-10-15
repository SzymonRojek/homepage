import styled, { css } from "styled-components";
import { ButtonLink } from "../ButtonLink";
import { contentColumn } from "../../../core/App/contentColumn";

// The top of the deep-green brand band; the menu panel hangs from it on
// small screens. Before the page scrolls it is see-through over the hero,
// which starts under it (a negative margin of its own height); once the page
// moves, or the menu opens, it turns solid green with a line and a soft shadow
// under it, so it reads as a layer above the page. Focus
// rings are yellow here, as on the hero and the contact card, because the
// page's green ring would vanish on green.
export const Bar = styled.div<{ $solid: boolean }>`
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  height: ${({ theme }) => theme.layout.topBar.desktop}px;
  margin-bottom: -${({ theme }) => theme.layout.topBar.desktop}px;
  color: ${({ theme }) => theme.colors.brand.text};
  background: ${({ theme, $solid }) =>
    $solid ? theme.colors.brand.background : "transparent"};
  border-bottom: 1px solid
    ${({ theme, $solid }) => ($solid ? theme.colors.brand.line : "transparent")};
  box-shadow: ${({ theme, $solid }) =>
    $solid ? theme.colors.brand.barShadow : "none"};
  /* Solid at once: a jump from the top lands over the cream page, where a
     fading bar would leave its cream and yellow text unreadable for a moment.
     It fades only back to see-through, over the green hero. */
  transition: ${({ $solid }) =>
    $solid
      ? "none"
      : "background-color 0.2s, border-color 0.2s, box-shadow 0.2s"};

  *:focus-visible {
    outline-color: ${({ theme }) => theme.colors.brand.accent};
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    height: ${({ theme }) => theme.layout.topBar.mobile}px;
    margin-bottom: -${({ theme }) => theme.layout.topBar.mobile}px;
  }
`;

export const Inner = styled.div`
  ${contentColumn}
  display: flex;
  align-items: center;
  gap: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    gap: 12px;
  }
`;

// The name and title as a two-line wordmark; the browser icon keeps "SR".
export const Brand = styled.a`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
  color: ${({ theme }) => theme.colors.brand.text};
  text-decoration: none;
  border-radius: ${({ theme }) => theme.borderRadiusSmall};
`;

export const BrandName = styled.span`
  font-family: ${({ theme }) => theme.fontDisplay};
  font-size: 19px;
  font-weight: 800;
  line-height: 1.15;
  letter-spacing: -0.02em;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 17px;
  }
`;

// The job title in yellow (7.9:1 on the green) so HR spots it first.
export const BrandTitle = styled.span`
  font-size: 13px;
  font-weight: 600;
  line-height: 1.3;
  white-space: nowrap;
  color: ${({ theme }) => theme.colors.brand.accent};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 12px;
  }
`;

// In the bar on wide screens; a panel under the bar, shown by the menu
// button, on phones and tablets.
export const Nav = styled.nav<{ $open: boolean }>`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-left: auto;

  /* On phones and tablets: a panel under the bar, with the page's gutters.
     It fades in and slides down a little; closed, it is hidden from the
     keyboard and screen readers too (visibility flips after the fade). */
  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    ${contentColumn}
    display: block;
    visibility: ${({ $open }) => ($open ? "visible" : "hidden")};
    opacity: ${({ $open }) => ($open ? 1 : 0)};
    transform: translateY(${({ $open }) => ($open ? "0" : "-8px")});
    transition: ${({ $open }) =>
      $open
        ? "opacity 0.2s ease-out, transform 0.2s ease-out"
        : "opacity 0.2s ease-out, transform 0.2s ease-out, visibility 0s linear 0.2s"};
    position: absolute;
    top: 100%;
    right: 0;
    left: 0;
    margin: 0;
    padding-top: 8px;
    padding-bottom: 16px;
    background: ${({ theme }) => theme.colors.brand.background};
    border-bottom: 1px solid ${({ theme }) => theme.colors.brand.line};
    box-shadow: ${({ theme }) => theme.colors.brand.barShadow};
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

export const NavList = styled.ul`
  display: flex;
  gap: 4px;
  margin: 0;
  padding: 0;
  list-style: none;

  /* In the menu panel the words start on the logo's edge; the links' own
     padding (their tap area and hover) reaches out into the gutter. */
  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    flex-direction: column;
    margin-inline: -12px;
  }
`;

export const NavLink = styled.a`
  display: block;
  padding: 8px 12px;
  font-size: 15px;
  font-weight: 600;
  white-space: nowrap;
  color: ${({ theme }) => theme.colors.brand.muted};
  text-decoration: none;
  border-radius: ${({ theme }) => theme.borderRadiusSmall};
  transition:
    color 0.2s,
    background 0.2s;

  &:hover {
    color: ${({ theme }) => theme.colors.brand.text};
    background: ${({ theme }) => theme.colors.brand.control};
  }

  /* Large tap targets in the menu panel. */
  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    padding: 12px;
    font-size: 17px;
    border-radius: ${({ theme }) => theme.borderRadiusSmall};
  }
`;

// Contact and the theme switch: in the bar on wide screens; on phones and
// tablets a row under the menu links, Contact left and the switch right.
export const MenuFooter = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  /* Contact on the logo's edge, the theme switch on the menu button's. */
  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    justify-content: space-between;
    margin-top: 12px;
  }
`;

export const ContactLink = styled(ButtonLink)`
  padding: 8px 18px;
  font-size: 14px;
  white-space: nowrap;
  color: ${({ theme }) => theme.colors.brand.onAccent};
  background: ${({ theme }) => theme.colors.brand.accent};

  &:hover {
    background: ${({ theme }) => theme.colors.brand.accentHover};
  }
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
    color: ${({ theme }) => theme.colors.brand.text};
    background: ${({ theme }) => theme.colors.brand.control};
    border: 1px solid ${({ theme }) => theme.colors.brand.controlBorder};
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
