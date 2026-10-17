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
    margin-top: 28px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

// When and where. On phones the period moves to the right of the company,
// on the same line; the HTML keeps it first, so it is still read first.
export const Meta = styled.div`
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    display: grid;
    grid-template-columns: 1fr auto;
    column-gap: 16px;
    align-items: baseline;

    & > :nth-child(1) {
      grid-column: 2;
      grid-row: 1;
      white-space: nowrap;
    }

    & > :nth-child(2) {
      grid-column: 1;
      grid-row: 1;
      margin-top: 0;
    }

    & > :nth-child(3) {
      grid-column: 1 / -1;
    }
  }
`;

// Quiet, like a timestamp, as the dates on the recommendation cards.
export const Period = styled.p`
  margin: 0;
  font-size: 15px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.muted};
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
