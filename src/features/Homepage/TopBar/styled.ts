import styled, { css, keyframes } from "styled-components";
import a from "color-alpha";
import { ButtonLink } from "../ButtonLink";
import { contentColumn } from "../../../core/App/contentColumn";
import type { BarState } from "./useBarState";

// The gap between the top of the window and the floating pill.
const pillGap = { desktop: 12, mobile: 8 };

// A floating pill on the content column, 12px under the top of the window
// (8px on phones). At the top of the page it is only an outline over the
// hero; once the page scrolls it fills with the deep green (a little
// see-through, the page blurred under it) and lifts off with a layered
// shadow; past the hero it slides away while the page scrolls down and comes
// back when it scrolls up (useBarState), or when a key moves focus into it.
// The hero starts under it (a negative margin of its height and gap). Only
// the pill takes clicks; the strip around it lets them through to the page.
// Focus rings are yellow here, as on the hero, because the page's green ring
// would vanish on green.
export const Bar = styled.div<{ $state: BarState }>`
  ${contentColumn}
  position: sticky;
  top: ${pillGap.desktop}px;
  z-index: 10;
  margin-top: ${pillGap.desktop}px;
  margin-bottom: -${({ theme }) => theme.layout.topBar.desktop}px;
  pointer-events: none;
  transform: ${({ $state }) =>
    $state === "hidden"
      ? `translateY(calc(-100% - ${pillGap.desktop}px))`
      : "none"};
  transition: transform 0.3s ease;

  &:focus-within {
    transform: none;
  }

  *:focus-visible {
    outline-color: ${({ theme }) => theme.colors.brand.accent};
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    top: ${pillGap.mobile}px;
    margin-top: ${pillGap.mobile}px;
    margin-bottom: -${({ theme }) => theme.layout.topBar.mobile}px;
  }
`;

// The raised look: deep green, a little see-through, with the page blurred
// under it, and the layered shadow.
const raised = css`
  background: ${({ theme }) => a(theme.colors.brand.background, 0.94)};
  border-color: ${({ theme }) => a(theme.colors.brand.text, 0.14)};
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  box-shadow: ${({ theme }) => theme.colors.brand.pillShadow};
`;

export const Inner = styled.div<{ $state: BarState }>`
  position: relative;
  display: flex;
  align-items: center;
  gap: 20px;
  height: ${({ theme }) => theme.layout.topBar.desktop - pillGap.desktop}px;
  padding: 0 8px 0 20px;
  color: ${({ theme }) => theme.colors.brand.text};
  background: transparent;
  border: 1px solid ${({ theme }) => a(theme.colors.brand.text, 0.18)};
  border-radius: 999px;
  pointer-events: auto;
  /* Raised at once: a jump down the page lands over the light sections,
     where a fading bar would leave its cream links unreadable for a moment
     (axe caught it mid-fade). It fades only back to the outline, over the
     dark hero. */
  transition: ${({ $state }) =>
    $state === "top"
      ? "background-color 0.25s, border-color 0.25s, box-shadow 0.25s"
      : "none"};

  ${({ $state }) => $state !== "top" && raised}

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    gap: 12px;
    /* The menu button is the pill's right end itself (MenuButton). */
    padding-right: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    height: ${({ theme }) => theme.layout.topBar.mobile - pillGap.mobile}px;
    padding-left: 18px;
  }
`;

// My name as the wordmark (the job title is over the hero's headline), after
// a small pulsing yellow dot; the browser icon keeps "SR".
export const Brand = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  min-width: 0;
  margin-right: auto;
  color: ${({ theme }) => theme.colors.brand.text};
  text-decoration: none;
  border-radius: ${({ theme }) => theme.borderRadiusSmall};
`;

// A ring grows out of the dot and fades, every two seconds.
const pulse = keyframes`
  from {
    box-shadow: 0 0 0 0 var(--ring);
  }

  to {
    box-shadow: 0 0 0 9px transparent;
  }
`;

// Decorative. Still, with a soft ring, with reduced motion.
export const Dot = styled.span`
  --ring: ${({ theme }) => a(theme.colors.brand.accent, 0.55)};
  flex: none;
  width: 10px;
  height: 10px;
  background: ${({ theme }) => theme.colors.brand.accent};
  border-radius: 50%;
  animation: ${pulse} 2s ease-out infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    box-shadow: 0 0 0 4px ${({ theme }) => a(theme.colors.brand.accent, 0.2)};
  }
`;

export const BrandName = styled.span`
  font-family: ${({ theme }) => theme.fontDisplay};
  font-size: 18px;
  font-weight: 800;
  line-height: 1.15;
  letter-spacing: -0.02em;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 18px;
  }
`;

// In the pill on wide screens; on phones and tablets a rounded green panel
// under it, shown by the menu button.
export const Nav = styled.nav<{ $open: boolean }>`
  display: flex;
  align-items: center;
  gap: 12px;

  /* It fades in and slides down a little; closed, it is hidden from the
     keyboard and screen readers too (visibility flips after the fade).
     Solid green: a blur inside the blurred pill would only see the pill, so
     the page under the panel would show through. */
  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    display: block;
    color: ${({ theme }) => theme.colors.brand.text};
    background: ${({ theme }) => theme.colors.brand.background};
    border: 1px solid ${({ theme }) => a(theme.colors.brand.text, 0.14)};
    box-shadow: ${({ theme }) => theme.colors.brand.pillShadow};
    visibility: ${({ $open }) => ($open ? "visible" : "hidden")};
    opacity: ${({ $open }) => ($open ? 1 : 0)};
    transform: translateY(${({ $open }) => ($open ? "0" : "-8px")});
    transition: ${({ $open }) =>
      $open
        ? "opacity 0.2s ease-out, transform 0.2s ease-out"
        : "opacity 0.2s ease-out, transform 0.2s ease-out, visibility 0s linear 0.2s"};
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    left: 0;
    padding: 8px 8px 14px;
    border-radius: 24px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

export const NavList = styled.ul`
  display: flex;
  gap: 2px;
  margin: 0;
  padding: 0;
  list-style: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    flex-direction: column;
  }
`;

// Muted cream words; under the pointer they brighten on a soft pill.
export const NavLink = styled.a`
  display: block;
  padding: 8px 12px;
  font-size: 14.5px;
  font-weight: 600;
  white-space: nowrap;
  color: ${({ theme }) => theme.colors.brand.muted};
  text-decoration: none;
  border-radius: 999px;
  transition:
    color 0.2s,
    background 0.2s;

  &:hover {
    color: ${({ theme }) => theme.colors.brand.text};
    background: ${({ theme }) => theme.colors.brand.control};
  }

  /* Large tap targets in the menu panel. */
  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    padding: 12px 14px;
    font-size: 17px;
    border-radius: 16px;
  }
`;

// Hire me: at the pill's end on wide screens; on phones and tablets under
// the menu links, its words on theirs.
export const MenuFooter = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    margin: 10px 0 0 4px;
  }
`;

// A yellow pill with an arrow, the pill bar's one call to action.
export const ContactLink = styled(ButtonLink)`
  padding: 10px 18px;
  font-size: 14.5px;
  white-space: nowrap;
  color: ${({ theme }) => theme.colors.brand.onAccent};
  background: ${({ theme }) => theme.colors.brand.accent};
  border-radius: 999px;

  &::after {
    /* Decorative: the link's name stays "Hire me". */
    content: "→" / "";
    margin-left: 6px;
  }

  &:hover {
    background: ${({ theme }) => theme.colors.brand.accentHover};
  }
`;

// On phones and tablets the menu button is the three lines alone, no circle
// behind them (dropped on 2026-10-17), at the pill's right end with a tap
// area as tall as the pill. Yellow under the pointer, as the links are; its
// focus ring stays inside the pill.
export const MenuButton = styled.button`
  display: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    display: grid;
    place-items: center;
    flex: none;
    align-self: stretch;
    aspect-ratio: 1;
    padding: 0;
    color: ${({ theme }) => theme.colors.brand.text};
    background: none;
    border: 0;
    border-radius: 50%;
    cursor: pointer;
    transition: color 0.2s;

    &:hover {
      color: ${({ theme }) => theme.colors.brand.accent};
    }

    &:focus-visible {
      outline-offset: -4px;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
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
