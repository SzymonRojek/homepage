import styled, { css, keyframes } from "styled-components";
import a from "color-alpha";
import { ButtonLink } from "../ButtonLink";
import { contentColumn } from "../../../core/App/contentColumn";
import type { BarState } from "./useBarState";

// The gap between the top of the window and the floating pill.
const pillGap = { desktop: 12, mobile: 8 };

// A floating pill on the content column, 12px under the top of the window
// (8px on phones). At the top of the page it shows nothing of itself over
// the hero: no fill, no edge, no shadow, only its contents (the user asked
// for the outline to go on 2026-10-23). Once the page scrolls it fills with
// the deep green (a little
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

  /* Hidden from the first paint while a reload goes back to its place
     (useBarState), before React has drawn the hidden state. */
  html[data-restoring-scroll] & {
    transform: translateY(calc(-100% - ${pillGap.desktop}px));
    transition: none;
  }

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

// The raised look: deep green (a step lighter in the dark theme, where How I
// test is the deep green), a little see-through, with the page blurred under
// it, and the layered shadow. No edge of its own: the fill and the shadow
// carry it (the user, 2026-10-23).
const raised = css`
  background: ${({ theme }) => a(theme.colors.topBar, 0.94)};
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  box-shadow: ${({ theme }) => theme.colors.brand.pillShadow};
`;

export const Inner = styled.div<{
  $state: BarState;
  $smooth: boolean;
  $filled: boolean;
}>`
  position: relative;
  display: flex;
  align-items: center;
  gap: 20px;
  height: ${({ theme }) => theme.layout.topBar.desktop - pillGap.desktop}px;
  padding: 0 8px 0 20px;
  color: ${({ theme }) => theme.colors.brand.text};
  background: transparent;
  border-radius: 999px;
  pointer-events: auto;
  /* It fills smoothly while it is over the dark hero ($smooth), and at once
     after a jump: a jump lands over the light sections, where a fading bar
     would leave its cream links unreadable for a moment (axe caught it
     mid-fade). Back to bare it always fades, over the hero. */
  transition: ${({ $state, $smooth }) =>
    $state === "top" || $smooth
      ? "background-color 0.25s, box-shadow 0.25s"
      : "none"};

  ${({ $filled }) => $filled && raised}

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
    background: ${({ theme }) => theme.colors.topBar};
    border: 1px solid ${({ theme }) => theme.colors.topBarEdge};
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

// Muted cream words that brighten to cream under the pointer, nothing more.
// A soft pill behind each link read as a highlight inside the pill bar, and a
// yellow line under the word looked wrong (both dropped on 2026-10-17).
export const NavLink = styled.a`
  display: block;
  padding: 8px 12px;
  font-size: 14.5px;
  font-weight: 600;
  white-space: nowrap;
  color: ${({ theme }) => theme.colors.brand.muted};
  text-decoration: none;
  transition: color 0.2s;

  &:hover {
    color: ${({ theme }) => theme.colors.brand.text};
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }

  /* Large tap targets in the menu panel. */
  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    padding: 12px 14px;
    font-size: 17px;
  }
`;

// Contact: at the pill's end on wide screens; on phones and tablets under
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

  /* The arrow nudges forward under the pointer or keyboard focus, pointing
     on to the contact; still with reduced motion. */
  &::after {
    /* Decorative: the link's name stays "Contact". */
    content: "→";
    content: "→" / "";
    display: inline-block;
    margin-left: 6px;
    transition: transform 0.2s ease-out;
  }

  &:hover {
    background: ${({ theme }) => theme.colors.brand.accentHover};
  }

  &:hover::after,
  &:focus-visible::after {
    transform: translateX(4px);
  }

  @media (prefers-reduced-motion: reduce) {
    &::after {
      transition: none;
    }

    &:hover::after,
    &:focus-visible::after {
      transform: none;
    }
  }
`;

// On phones and tablets the menu button is the three lines alone, no circle
// behind them (dropped on 2026-10-17), at the pill's right end with a tap
// area as tall as the pill. Muted cream that brightens to cream under the
// pointer, like the section links (it turned yellow until 2026-10-17); its
// focus ring stays inside the pill.
export const MenuButton = styled.button`
  display: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    /* Flex, not grid: Safari before 16 doesn't centre a grid inside a
       button, and the lines sat at its top (issue #33). */
    display: flex;
    align-items: center;
    justify-content: center;
    flex: none;
    align-self: stretch;
    aspect-ratio: 1;
    padding: 0;
    color: ${({ theme }) => theme.colors.brand.muted};
    background: none;
    border: 0;
    border-radius: 50%;
    cursor: pointer;
    transition: color 0.2s;

    &:hover {
      color: ${({ theme }) => theme.colors.brand.text};
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
