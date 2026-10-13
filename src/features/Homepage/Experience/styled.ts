import styled from "styled-components";

// One job a row, like a CV: when and where on the left, the role and what I
// do on the right. No card, a thin rule between jobs.
export const Job = styled.article`
  display: grid;
  grid-template-columns: 240px 1fr;
  gap: 48px;
  padding-top: 24px;
  border-top: 1px solid ${({ theme }) => theme.colors.headerLine};

  & + & {
    margin-top: 40px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

export const Period = styled.p`
  margin: 0;
  font-size: 15px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.qa.accent};
`;

export const Company = styled.p`
  margin: 6px 0 0;
  font-family: ${({ theme }) => theme.fontDisplay};
  font-size: 18px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const Details = styled.p`
  margin: 4px 0 0;
  font-size: 14px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.muted};
`;

export const Role = styled.h3`
  margin: 0;
  font-size: 28px;
  font-weight: 800;
  line-height: 1.15;
  color: ${({ theme }) => theme.colors.textPrimary};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 24px;
  }
`;

export const Points = styled.ul`
  margin: 16px 0 0;
  padding: 0;
  list-style: none;

  li {
    position: relative;
    padding: 10px 0 10px 22px;
    font-size: 16px;
    line-height: 1.6;
  }

  /* A small yellow dot instead of a bullet. */
  li::before {
    content: "";
    position: absolute;
    top: 20px;
    left: 0;
    width: 8px;
    height: 8px;
    background: ${({ theme }) => theme.colors.brand.accent};
    border-radius: 50%;
  }
`;
