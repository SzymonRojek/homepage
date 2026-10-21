import styled from "styled-components";
import { contentColumn } from "../App/contentColumn";

export const Fallback = styled.main`
  ${contentColumn};
  padding-block: ${({ theme }) => theme.layout.section.desktop * 2}px;
  color: ${({ theme }) => theme.colors.site.text};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    padding-block: ${({ theme }) => theme.layout.section.mobile * 2}px;
  }
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 28px;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const Note = styled.p`
  margin: 12px 0 24px;
  max-width: 36em;
`;

export const Address = styled.p`
  margin: 0;
  font-family: ${({ theme }) => theme.fontMono};
  font-size: 16px;
  color: ${({ theme }) => theme.colors.textPrimary};
  user-select: text;
`;

export const Links = styled.p`
  display: flex;
  gap: 16px;
  margin: 16px 0 0;

  a {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
