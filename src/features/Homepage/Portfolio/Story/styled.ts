import styled from "styled-components";

// A numbered timeline: the line on the left joins the four steps.
export const Steps = styled.ol`
  display: grid;
  gap: 28px;
  margin: 32px 0 0;
  padding: 0;
  list-style: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    gap: 24px;
    margin-top: 24px;
  }
`;

export const Step = styled.li`
  position: relative;
  padding-left: 56px;

  &:not(:last-child)::after {
    content: "";
    position: absolute;
    top: 40px;
    bottom: -24px;
    left: 17px;
    width: 2px;
    background: ${({ theme }) => theme.colors.headerLine};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    padding-left: 44px;

    &:not(:last-child)::after {
      left: 13px;
      top: 32px;
    }
  }
`;

export const StepNumber = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  display: grid;
  place-items: center;
  width: 36px;
  height: 36px;
  font-family: ${({ theme }) => theme.fontMono};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.onPrimary};
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 50%;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    width: 28px;
    height: 28px;
    font-size: 14px;
  }
`;

export const StepTitle = styled.h4`
  margin: 0;
  padding-top: 5px;
  font-size: 20px;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.textPrimary};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    padding-top: 2px;
    font-size: 18px;
  }
`;

export const Brief = styled.p`
  max-width: 820px;
  margin: 10px 0 0;
  padding: 16px 20px;
  font-size: 19px;
  font-weight: 600;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.textPrimary};
  background: ${({ theme }) => theme.colors.site.background};
  border-left: 4px solid ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadiusSmall};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    padding: 12px 14px;
    font-size: 16px;
  }
`;

export const Comparison = styled.table`
  width: 100%;
  margin-top: 12px;
  border-collapse: separate;
  border-spacing: 0;
  font-size: 15px;
  line-height: 1.5;

  th,
  td {
    width: 50%;
    padding: 12px 16px;
    text-align: left;
    vertical-align: top;
    border-bottom: 1px solid ${({ theme }) => theme.colors.headerLine};
  }

  thead th {
    font-family: ${({ theme }) => theme.fontMono};
    font-size: 12px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  thead th:first-child {
    color: ${({ theme }) => theme.colors.muted};
  }

  thead th:last-child {
    color: ${({ theme }) => theme.colors.dev.accent};
  }

  td:last-child {
    font-weight: 600;
    color: ${({ theme }) => theme.colors.textPrimary};
    background: ${({ theme }) => theme.colors.dev.soft};
  }

  /* On phones each row becomes a card: what exists, then my answer. */
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 14px;

    thead {
      position: absolute;
      width: 1px;
      height: 1px;
      overflow: hidden;
      clip-path: inset(50%);
    }

    tr,
    td {
      display: block;
      width: auto;
    }

    tr + tr {
      margin-top: 12px;
    }

    td {
      padding: 10px 12px;
      border: 1px solid ${({ theme }) => theme.colors.headerLine};
    }

    td:first-child {
      border-bottom: none;
      border-radius: ${({ theme }) => theme.borderRadiusSmall}
        ${({ theme }) => theme.borderRadiusSmall} 0 0;
    }

    td:last-child {
      border-radius: 0 0 ${({ theme }) => theme.borderRadiusSmall}
        ${({ theme }) => theme.borderRadiusSmall};
    }

    td::before {
      content: attr(data-label);
      display: block;
      margin-bottom: 2px;
      font-family: ${({ theme }) => theme.fontMono};
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: ${({ theme }) => theme.colors.muted};
    }
  }
`;

export const List = styled.ul`
  max-width: 820px;
  margin: 12px 0 0;
  padding-left: 20px;
  line-height: 1.6;

  li + li {
    margin-top: 6px;
  }

  li::marker {
    color: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 15px;
  }
`;

export const ValueList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 12px;
  margin: 12px 0 0;
  padding: 0;
  list-style: none;

  li {
    position: relative;
    padding: 14px 16px 14px 44px;
    font-weight: 600;
    line-height: 1.5;
    color: ${({ theme }) => theme.colors.textPrimary};
    background: ${({ theme }) => theme.colors.qa.soft};
    border: 1px solid ${({ theme }) => theme.colors.qa.border};
    border-radius: ${({ theme }) => theme.borderRadius};
  }

  li::before {
    content: "✓";
    content: "✓" / "";
    position: absolute;
    top: 14px;
    left: 18px;
    font-weight: 900;
    color: ${({ theme }) => theme.colors.qa.accent};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 15px;
  }
`;

export const NextStep = styled.p`
  max-width: 820px;
  margin: 12px 0 0;
  font-size: 15px;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.muted};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 14px;
  }
`;
