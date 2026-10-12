import styled from "styled-components";
import { ButtonLink } from "../ButtonLink";
import { contentColumn } from "../../../core/App/contentColumn";

// A full-width footer on the deep-green band, so the page closes the way the
// hero opens it, with the soft yellow ring in the bottom-left corner.
export const Wrapper = styled.footer`
  position: relative;
  overflow: hidden;
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

// A short letter at the end of the page: my photo on the left, the text and
// the button on the right, the pair centred with equal space on both sides.
export const Letter = styled.section`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 36px;
  padding-top: 64px;

  > div {
    max-width: 36em;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    flex-direction: column;
    gap: 18px;
    padding-top: 44px;
  }
`;

export const Photo = styled.img`
  flex: none;
  width: 96px;
  height: 96px;
  object-fit: cover;
  object-position: 60% 30%;
  border: 3px solid ${({ theme }) => theme.colors.brand.accent};
  border-radius: 50%;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    width: 72px;
    height: 72px;
  }
`;

export const Heading = styled.h2`
  margin: 0;
  font-size: 32px;
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.colors.brand.text};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 26px;
  }
`;

// What matters to me in a team, in my own words.
export const Note = styled.p`
  margin: 14px 0 0;
  font-size: 17px;
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.brand.muted};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 16px;
  }
`;

export const Invite = styled(Note)`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.brand.text};
`;

export const ContactButton = styled(ButtonLink)`
  margin-top: 22px;
  color: ${({ theme }) => theme.colors.brand.onAccent};
  background: ${({ theme }) => theme.colors.brand.accent};

  &:hover {
    background: ${({ theme }) => theme.colors.brand.accentHover};
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
