import styled from "styled-components";
import { Highlight, Highlights } from "../MainHeader/styled";

export const Card = styled.div`
  padding: 32px;
  background: ${({ theme }) => theme.colors.boxBackground};
  box-shadow: ${({ theme }) => theme.boxShadow};
  border-radius: ${({ theme }) => theme.borderRadiusSmall};
  transition: background 0.3s;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    padding: 16px;
  }
`;

export const SkillList = styled(Highlights)`
  gap: 12px;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    gap: 8px;
    margin: 0;
  }
`;

export const Skill = styled(Highlight)`
  background: ${({ theme }) => theme.colors.site.background};
`;

export const Tools = styled.p`
  margin: 24px 0 0;
  padding-top: 20px;
  line-height: 1.5;
  border-top: 1px solid ${({ theme }) => theme.colors.headerLine};

  strong {
    color: ${({ theme }) => theme.colors.textPrimary};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin-top: 16px;
    padding-top: 12px;
    font-size: 14px;
  }
`;
