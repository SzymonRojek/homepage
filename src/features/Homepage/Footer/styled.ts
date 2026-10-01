import styled from "styled-components";
import { SubHeader } from "../SubHeader";
import { ButtonLink, ButtonLinks } from "../ButtonLink";
import Talk from "./talk.svg?react";

export const Wrapper = styled.footer`
  margin-top: 120px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin-top: 48px;
  }
`;

export const Card = styled.section`
  padding: 56px;
  color: ${({ theme }) => theme.colors.contact.text};
  background: ${({ theme }) => theme.colors.contact.background};
  box-shadow: ${({ theme }) => theme.boxShadow};
  border-radius: ${({ theme }) => theme.borderRadiusSmall};
  overflow: hidden;
  transition: background 0.3s;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    padding: 32px 16px;
  }
`;

export const Content = styled.div`
  max-width: 640px;
`;

export const Heading = styled(SubHeader)`
  display: flex;
  align-items: center;
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
  font-size: 18px;
  line-height: 1.5;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 15px;
  }
`;

export const Buttons = styled(ButtonLinks)``;

export const ContactButton = styled(ButtonLink)`
  color: ${({ theme }) => theme.colors.contact.buttonText};
  background: ${({ theme }) => theme.colors.contact.buttonBackground};
  border-color: ${({ theme }) => theme.colors.contact.buttonBackground};

  &:hover {
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.contact.text};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.contact.text};
    outline-offset: 3px;
  }
`;

export const SecondaryContactButton = styled(ContactButton)`
  color: ${({ theme }) => theme.colors.contact.text};
  background: transparent;
  border-color: ${({ theme }) => theme.colors.contact.text};

  &:hover {
    box-shadow: inset 0 0 0 1px ${({ theme }) => theme.colors.contact.text};
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

  p {
    margin: 0;
  }
`;
