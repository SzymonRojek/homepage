import styled from "styled-components";
import { SubHeader } from "../SubHeader";
import { ButtonLink, ButtonLinks } from "../ButtonLink";
import Talk from "./talk.svg?react";

export const Wrapper = styled.footer`
  margin-top: 64px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin-top: 44px;
  }
`;

// The deep-green brand band again, so the page opens and closes with it.
export const Card = styled.section`
  position: relative;
  padding: 56px;
  color: ${({ theme }) => theme.colors.brand.text};
  background: ${({ theme }) => theme.colors.brand.background};
  border-radius: ${({ theme }) => theme.borderRadius};
  overflow: hidden;

  /* The same soft yellow ring as on the hero, here in the opposite corner. */
  &::before {
    content: "";
    position: absolute;
    bottom: -160px;
    left: -140px;
    width: 380px;
    height: 380px;
    border: 64px solid ${({ theme }) => theme.colors.brand.accent};
    border-radius: 50%;
    opacity: 0.12;
    pointer-events: none;
  }

  *:focus-visible {
    outline-color: ${({ theme }) => theme.colors.brand.accent};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    padding: 32px 16px;
  }
`;

// The contact card is one call to action, so it is centred.
export const Content = styled.div`
  position: relative;
  max-width: 680px;
  margin: 0 auto;
  text-align: center;
`;

export const Heading = styled(SubHeader)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  color: inherit;
`;

export const HeadingIcon = styled(Talk)`
  flex-shrink: 0;
  width: 32px;
  height: 32px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    width: 22px;
    height: 22px;
  }
`;

export const Paragraph = styled.p`
  margin: 16px 0 0;
  color: ${({ theme }) => theme.colors.brand.muted};
  font-size: 18px;
  line-height: 1.5;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 15px;
  }
`;

export const Buttons = styled(ButtonLinks)`
  justify-content: center;
`;

export const ContactButton = styled(ButtonLink)`
  color: ${({ theme }) => theme.colors.brand.onAccent};
  background: ${({ theme }) => theme.colors.brand.accent};

  &:hover {
    background: ${({ theme }) => theme.colors.brand.accentHover};
  }
`;

export const SecondaryContactButton = styled(ButtonLink)`
  padding: 10px 19px;
  color: ${({ theme }) => theme.colors.brand.text};
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.brand.controlBorder};

  &:hover {
    background: ${({ theme }) => theme.colors.brand.control};
  }
`;

export const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  margin-top: 32px;
  padding: 0 4px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.muted};

  p {
    margin: 0;
  }
`;
