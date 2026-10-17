import styled from "styled-components";
import { ButtonLink } from "../ButtonLink";
import { contentColumn } from "../../../core/App/contentColumn";

// A full-width footer on the hero's near-black, so the page closes the way
// the hero opens it, with the soft yellow ring in the bottom-left corner. It meets
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
  height: 24px;
  background: ${({ theme }) => theme.colors.brand.line};
`;
