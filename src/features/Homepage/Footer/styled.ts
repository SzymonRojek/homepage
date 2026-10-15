import styled from "styled-components";
import { ButtonLink } from "../ButtonLink";
import { contentColumn } from "../../../core/App/contentColumn";

// A full-width footer on the deep-green band, so the page closes the way the
// hero opens it, with the soft yellow ring in the bottom-left corner.
// "clip", not "hidden": a hidden overflow is a scroll container, and a jump to
// #contact at the end of the page scrolled the footer itself, cutting off
// the space above its heading.
export const Wrapper = styled.footer`
  position: relative;
  overflow: clip;
  margin-top: 56px;
  color: ${({ theme }) => theme.colors.brand.text};
  background: ${({ theme }) => theme.colors.brand.background};

  &::before {
    content: "";
    position: absolute;
    bottom: -170px;
    left: -150px;
    width: 400px;
    height: 400px;
    border: 72px solid ${({ theme }) => theme.colors.brand.accent};
    border-radius: 50%;
    opacity: 0.12;
    pointer-events: none;
  }

  *:focus-visible {
    outline-color: ${({ theme }) => theme.colors.brand.accent};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin-top: 40px;
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
  padding-top: 64px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    gap: 18px;
    padding-top: 44px;
  }
`;

// As large as the hero's headline style, so the page ends the way it opens.
export const Heading = styled.h2`
  margin: 0;
  font-size: 46px;
  font-weight: 800;
  line-height: 1.05;
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.colors.brand.text};
  text-wrap: balance;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 32px;
  }
`;

// About 70 characters a line, as in the hero's bio.
export const Message = styled.div`
  max-width: 36em;
`;

// What matters to me in a team, in my own words.
export const Note = styled.p`
  margin: 0;
  font-size: 17px;
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.brand.muted};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 16px;
  }
`;

export const Invite = styled(Note)`
  margin-top: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.brand.text};
`;

// As wide as its words. On phones it sits on the right, closing the note.
export const ContactButton = styled(ButtonLink)`
  margin-top: 24px;
  color: ${({ theme }) => theme.colors.brand.onAccent};
  background: ${({ theme }) => theme.colors.brand.accent};

  &:hover {
    background: ${({ theme }) => theme.colors.brand.accentHover};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    display: flex;
    width: fit-content;
    margin-left: auto;
  }
`;

// The last line: copyright on the left, GitHub and LinkedIn on the right.
export const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  margin-top: 56px;
  padding: 20px 0 28px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.brand.muted};
  border-top: 1px solid ${({ theme }) => theme.colors.brand.line};

  p {
    margin: 0;
  }

  a {
    color: ${({ theme }) => theme.colors.brand.text};
  }

  a:hover {
    color: ${({ theme }) => theme.colors.brand.accent};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin-top: 40px;
  }
`;
