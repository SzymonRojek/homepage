import styled from "styled-components";

export const EducationList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const EducationItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 16px;
  padding: 16px 0;

  & + & {
    border-top: 1px solid ${({ theme }) => theme.colors.headerLine};
  }

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    padding: 12px 0;
  }
`;

export const EducationTitle = styled.p`
  margin: 0;
  font-size: 17px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textPrimary};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 15px;
  }
`;

export const School = styled.p`
  margin: 4px 0 0;
  font-size: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 14px;
  }
`;

export const Year = styled.span`
  flex-shrink: 0;
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 14px;
  }
`;
