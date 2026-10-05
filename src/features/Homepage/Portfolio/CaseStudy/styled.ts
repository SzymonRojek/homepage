import styled from "styled-components";

export const Article = styled.article`
  margin-top: 32px;
  padding: 40px;
  background: ${({ theme }) => theme.colors.boxBackground};
  border: 6px solid ${({ theme }) => theme.colors.tile.border};
  border-radius: ${({ theme }) => theme.borderRadiusSmall};
  box-shadow: ${({ theme }) => theme.boxShadow};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin-top: 24px;
    padding: 20px;
  }
`;

export const Kicker = styled.p`
  margin: 0;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Title = styled.h3`
  margin: 8px 0 0;
  font-size: 28px;
  color: ${({ theme }) => theme.colors.tile.header};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 20px;
  }
`;

export const Meta = styled.p`
  margin: 8px 0 0;
  font-size: 15px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 13px;
  }
`;

export const Summary = styled.p`
  max-width: 760px;
  margin: 20px 0 0;
  font-size: 18px;
  line-height: 1.5;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 15px;
  }
`;

export const Impact = styled.dl`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  margin: 28px 0 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    gap: 12px;
    margin-top: 20px;
  }
`;

// The label comes first in the markup (dt before dd); the number is shown on top.
export const Stat = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: flex-end;
  gap: 6px;
  padding: 16px;
  background: ${({ theme }) => theme.colors.site.background};
  border-radius: ${({ theme }) => theme.borderRadiusSmall};
`;

export const StatValue = styled.dd`
  margin: 0;
  font-size: 32px;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.primary};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 24px;
  }
`;

export const StatLabel = styled.dt`
  font-size: 14px;
  line-height: 1.4;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 13px;
  }
`;

export const Links = styled.p`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  margin: 24px 0 0;
`;

export const Details = styled.details`
  margin-top: 24px;
  padding-top: 20px;
  border-top: 1px solid ${({ theme }) => theme.colors.headerLine};
`;

export const Toggle = styled.summary`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  list-style: none;

  &::-webkit-details-marker {
    display: none;
  }

  &::before {
    content: "▸";
    content: "▸" / "";
    transition: transform 0.2s;
  }

  details[open] > &::before {
    transform: rotate(90deg);
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 4px;
  }
`;

export const Part = styled.section`
  margin-top: 32px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin-top: 24px;
  }
`;

export const PartTitle = styled.h4`
  margin: 0;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.textPrimary};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 17px;
  }
`;

export const Text = styled.p`
  max-width: 760px;
  margin: 12px 0 0;
  line-height: 1.6;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 15px;
  }
`;

export const BulletList = styled.ul`
  max-width: 760px;
  margin: 12px 0 0;
  padding-left: 20px;
  line-height: 1.6;

  li + li {
    margin-top: 6px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 15px;
  }
`;

export const TableWrapper = styled.div`
  margin-top: 12px;
  overflow-x: auto;

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
  }
`;

export const Table = styled.table`
  width: 100%;
  min-width: 640px;
  border-collapse: collapse;
  font-size: 15px;
  line-height: 1.5;

  th,
  td {
    padding: 12px;
    text-align: left;
    vertical-align: top;
    border-bottom: 1px solid ${({ theme }) => theme.colors.headerLine};
  }

  thead th {
    font-size: 13px;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.primary};
  }

  tbody th {
    width: 30%;
    color: ${({ theme }) => theme.colors.textPrimary};
  }

  /* On phones each decision becomes a stacked card instead of a wide row. */
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    min-width: 0;
    font-size: 14px;

    thead {
      position: absolute;
      width: 1px;
      height: 1px;
      overflow: hidden;
      clip-path: inset(50%);
    }

    tr,
    th,
    td {
      display: block;
    }

    tbody th {
      width: auto;
      padding: 16px 0 4px;
      border: none;
    }

    td {
      padding: 4px 0;
      border: none;
    }

    td::before {
      content: attr(data-label) ": ";
      font-weight: 700;
      color: ${({ theme }) => theme.colors.primary};
    }

    tr {
      padding-bottom: 12px;
      border-bottom: 1px solid ${({ theme }) => theme.colors.headerLine};
    }
  }
`;

export const QualityList = styled.dl`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin: 12px 0 0;

  dt {
    font-weight: 700;
    color: ${({ theme }) => theme.colors.textPrimary};
  }

  dd {
    margin: 6px 0 0;
    line-height: 1.6;
  }

  > div {
    padding: 16px;
    background: ${({ theme }) => theme.colors.site.background};
    border-radius: ${({ theme }) => theme.borderRadiusSmall};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 15px;
  }
`;
