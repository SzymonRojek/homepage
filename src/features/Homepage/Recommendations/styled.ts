import styled from "styled-components";
import { Card } from "../Section";

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin: 0;
  padding: 0;
  list-style: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

export const Quote = styled(Card).attrs({ as: "figure" })`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 0;

  /* A big yellow quotation mark: a person speaking, not a feature list. */
  &::before {
    content: "“";
    height: 0.55em;
    font-family: ${({ theme }) => theme.fontDisplay};
    font-size: 64px;
    font-weight: 800;
    line-height: 1;
    color: ${({ theme }) => theme.colors.brand.accent};
  }

  blockquote {
    flex: 1;
    margin: 16px 0 0;
    font-size: 17px;
    line-height: 1.6;
    color: ${({ theme }) => theme.colors.textPrimary};
  }

  blockquote p {
    margin: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    blockquote {
      font-size: 16px;
    }
  }
`;

export const Caption = styled.figcaption`
  margin-top: 20px;
  padding-top: 16px;
  font-size: 14px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.muted};
  border-top: 1px solid ${({ theme }) => theme.colors.headerLine};

  strong {
    display: block;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.textPrimary};
  }
`;

export const Source = styled.p`
  margin: 20px 0 0;
  font-size: 15px;

  a {
    font-weight: 600;
    color: ${({ theme }) => theme.colors.primary};
    text-underline-offset: 3px;
  }
`;
