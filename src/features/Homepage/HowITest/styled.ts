import styled from "styled-components";

export const Highlight = styled.p`
  max-width: 820px;
  margin: 0;
  padding: 16px 20px;
  font-size: 18px;
  font-weight: 600;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.textPrimary};
  background: ${({ theme }) => theme.colors.qa.soft};
  border: 1px solid ${({ theme }) => theme.colors.qa.border};
  border-left: 4px solid ${({ theme }) => theme.colors.qa.accent};
  border-radius: ${({ theme }) => theme.borderRadiusSmall};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    padding: 12px 14px;
    font-size: 16px;
  }
`;

export const StepText = styled.p`
  max-width: 820px;
  margin: 8px 0 0;
  line-height: 1.6;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 15px;
  }
`;

export const WhyItMatters = styled.p`
  max-width: 820px;
  margin: 32px 0 0;
  padding-top: 20px;
  line-height: 1.6;
  border-top: 1px solid ${({ theme }) => theme.colors.headerLine};

  strong {
    color: ${({ theme }) => theme.colors.textPrimary};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 15px;
  }
`;
