import styled from "styled-components";
import { ButtonLink } from "../ButtonLink";
import { columnInset, contentColumn } from "../../../core/App/contentColumn";

// A full-width footer on the hero's near-black, so the page closes the way
// the hero opens it, with the soft yellow ring in the bottom-left corner of
// the content column, cut by the band's bottom edge. It meets
// the last section (Skills, on its own band) edge to edge.
// "clip", not "hidden": a hidden overflow is a scroll container, and a jump to
// #contact at the end of the page scrolled the footer itself, cutting off
// the space above its heading.
export const Wrapper = styled.footer`
  position: relative;
  overflow: clip;
  color: ${({ theme }) => theme.colors.brand.text};
  background: ${({ theme }) => theme.colors.brand.dark};

  &::before {
    content: "";
    position: absolute;
    bottom: -170px;
    left: calc(${columnInset} - 150px);
    width: 400px;
    height: 400px;
    border: 72px solid ${({ theme }) => theme.colors.brand.accent};
    border-radius: 50%;
    opacity: 0.12;
    pointer-events: none;

    /* Safari before 16 has no clip, and the ring hung 170px below the page
       (issue #33). A hidden overflow would bring back the jump bug above,
       so there the ring is left out. */
    @supports not (overflow: clip) {
      display: none;
    }
  }

  *:focus-visible {
    outline-color: ${({ theme }) => theme.colors.brand.accent};
  }
`;

export const Inner = styled.div`
  ${contentColumn}
  position: relative;
`;

// The thanks on the left, the note on the right; one column on tablets and
// phones.
export const Letter = styled.section`
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  gap: 56px;
  align-items: start;
  padding-top: ${({ theme }) => theme.layout.section.desktop}px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    gap: 18px;
    padding-top: ${({ theme }) => theme.layout.section.mobile}px;
  }
`;

// Smaller than the hero's headline (it was 46px and broke into four lines in
// its column on large screens), so the question reads in two or three.
export const Heading = styled.h2`
  margin: 0;
  font-size: 36px;
  font-weight: 800;
  line-height: 1.05;
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.colors.brand.text};
  text-wrap: balance;

  /* Narrower column on small laptops and landscape tablets, before the
     footer goes to one column. */
  @media (max-width: ${({ theme }) => theme.breakpoints.tabletHorizontalMax}px) {
    font-size: 32px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 28px;
  }
`;

// The note and the button. Only the note is kept narrow, so the button can
// reach the content's right edge below desktops.
export const Message = styled.div``;

// What matters to me in a team, in my own words. About 70 characters a line,
// as in the hero's bio.
export const Note = styled.p`
  max-width: 36em;
  margin: 0;
  font-size: 17px;
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.brand.muted};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 16px;
  }
`;

// As wide as its words. Below desktops (tablets and phones) it sits on the
// right, closing the note.
export const ContactButton = styled(ButtonLink)`
  margin-top: 24px;
  color: ${({ theme }) => theme.colors.brand.onAccent};
  background: ${({ theme }) => theme.colors.brand.accent};

  &:hover {
    background: ${({ theme }) => theme.colors.brand.accentHover};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletHorizontalMax}px) {
    display: flex;
    width: fit-content;
    margin-left: auto;
  }
`;

// The footer's one action: the address itself, as the button. The yellow
// "Email me" mailto: that used to sit here was dropped on 2026-10-20 — it
// did nothing at all for a visitor whose machine has no mail app registered,
// and failed silently. This says what it is and what it does: click it and
// the address is on the clipboard. It keeps the old button's weight and
// place, so the footer still closes on one yellow block.
export const CopyAction = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  margin-top: 24px;
  /* 12 + 20 + 12 = a 44px target, the enhanced size in WCAG 2.5.5. */
  padding: 12px 18px;
  font: inherit;
  font-size: 15px;
  line-height: 20px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.brand.onAccent};
  background: ${({ theme }) => theme.colors.brand.accent};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadiusSmall};
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: ${({ theme }) => theme.colors.brand.accentHover};
  }

  svg {
    width: 17px;
    height: 17px;
    flex-shrink: 0;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletHorizontalMax}px) {
    display: flex;
    width: fit-content;
    margin-left: auto;
  }
`;

// The address, in the mono face the page uses for small plain facts.
export const AddressText = styled.span`
  font-family: ${({ theme }) => theme.fontMono};
  font-weight: 500;
  letter-spacing: -0.01em;
  /* Text in a button cannot be selected by default, and selecting it by
     hand is the only way left when the clipboard is unavailable. */
  user-select: text;
`;

// "Copied" as a small pill above the button, the pattern GitHub, Stripe and
// Linear all use for a copy control: the confirmation sits next to the
// action, and because it is positioned out of the flow nothing on the page
// moves. Mint with near-black text (10.2:1), the colour of "green." in the
// hero: on a tester's page, green means passing, so a copy that worked wears
// the site's own colour for success. Kept mounted and toggled, so it fades
// both ways; hidden it is out of the way of the keyboard and screen readers,
// which hear the live region instead.
export const CopiedNote = styled.span<{ $shown: boolean; $failed?: boolean }>`
  position: absolute;
  bottom: calc(100% + 8px);
  left: 50%;
  padding: 5px 10px;
  font-family: ${({ theme }) => theme.fontMono};
  font-size: 12.5px;
  font-weight: 500;
  white-space: nowrap;
  /* Mint for a copy that worked; a copy that did not must not wear the
     colour this site uses for passing, so it goes cream instead. */
  color: ${({ theme }) => theme.colors.brand.dark};
  background: ${({ theme, $failed }) =>
    $failed ? theme.colors.brand.text : theme.colors.brand.highlight};
  border-radius: ${({ theme }) => theme.borderRadiusSmall};
  opacity: ${({ $shown }) => ($shown ? 1 : 0)};
  visibility: ${({ $shown }) => ($shown ? "visible" : "hidden")};
  transform: translate(-50%, ${({ $shown }) => ($shown ? "0" : "4px")});
  transition:
    opacity 0.15s ease-out,
    transform 0.15s ease-out,
    visibility 0.15s;

  /* The little tail pointing down at the button. */
  &::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-top-color: ${({ theme, $failed }) =>
      $failed ? theme.colors.brand.text : theme.colors.brand.highlight};
    transform: translateX(-50%);
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
    transform: translate(-50%, 0);
  }
`;

// The button and its tooltip: the note is positioned against this.
export const ActionRow = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletHorizontalMax}px) {
    display: flex;
    width: fit-content;
    margin-left: auto;
  }
`;

// Tells a screen reader the copy worked; sighted visitors see the button's
// own label change instead, so this stays off screen.
export const CopyStatus = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
  border: 0;
`;

// The last line: copyright on the left, GitHub, LinkedIn and the theme
// switch on the right.
export const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  margin-top: 40px;
  padding: 20px 0 28px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.brand.muted};
  border-top: 1px solid ${({ theme }) => theme.colors.brand.line};

  p {
    margin: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin-top: 28px;
  }
`;

// GitHub and LinkedIn, then the theme switch, all small squares alike. A thin
// line sets the switch apart, since it changes the page while the two links
// leave it.
export const Tools = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Divider = styled.span`
  width: 1px;
  height: 20px;
  background: ${({ theme }) => theme.colors.brand.line};
`;
