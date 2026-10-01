import styled from "styled-components";

export const Card = styled.article`
  padding: 32px;
  background: ${({ theme }) => theme.colors.boxBackground};
  box-shadow: ${({ theme }) => theme.boxShadow};
  border-radius: ${({ theme }) => theme.borderRadiusSmall};
  transition: background 0.3s;

  & + & {
    margin-top: 24px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    padding: 16px;

    & + & {
      margin-top: 16px;
    }
  }
`;

export const JobHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 16px;
  padding-bottom: 16px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.headerLine};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    flex-direction: column;
    gap: 4px;
  }
`;

export const Role = styled.h3`
  margin: 0;
  font-size: 22px;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.textPrimary};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 17px;
  }
`;

export const Company = styled.p`
  margin: 8px 0 0;
  font-size: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 14px;
  }
`;

export const Period = styled.p<{ $current: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
  margin: 0;
  padding: 4px 12px;
  font-size: 14px;
  font-weight: 600;
  white-space: nowrap;
  color: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 999px;

  ${({ $current, theme }) =>
    $current &&
    `
    &::before {
      content: "";
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: ${theme.colors.primary};
    }
  `}

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin-top: 8px;
    font-size: 12px;
    padding: 2px 10px;
  }
`;

export const Groups = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    grid-template-columns: 1fr;
    margin-top: 0;
  }
`;

export const Group = styled.div`
  padding: 0 24px;

  &:first-child {
    padding-left: 0;
  }

  &:last-child {
    padding-right: 0;
  }

  & + & {
    border-left: 1px solid ${({ theme }) => theme.colors.headerLine};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    padding: 20px 0 0;

    & + & {
      margin-top: 20px;
      border-left: none;
      border-top: 1px solid ${({ theme }) => theme.colors.headerLine};
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    padding-top: 16px;

    & + & {
      margin-top: 16px;
    }
  }
`;

export const GroupTitle = styled.h4`
  margin: 0;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.primary};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 12px;
  }
`;

export const Points = styled.ul`
  margin: 12px 0 0;
  padding-left: 18px;
  font-size: 16px;
  line-height: 1.5;

  li::marker {
    color: ${({ theme }) => theme.colors.primary};
  }

  li + li {
    margin-top: 10px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 14px;
  }
`;

export const EducationList = styled.ul`
  margin: 16px 0 0;
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
