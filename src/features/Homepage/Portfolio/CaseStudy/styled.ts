import styled from "styled-components";
import { Chips } from "../../Section";

type Side = "developer" | "tester";
const accent = (side: Side) => (side === "developer" ? "dev" : "qa");

export const Article = styled.article`
  margin-top: 32px;
  padding: 40px;
  background: ${({ theme }) => theme.colors.boxBackground};
  border: 1px solid ${({ theme }) => theme.colors.headerLine};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.boxShadow};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin-top: 20px;
    padding: 20px;
  }
`;

export const Kicker = styled.p`
  display: inline-block;
  margin: 0;
  padding: 4px 10px;
  font-family: ${({ theme }) => theme.fontMono};
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textPrimary};
  background: ${({ theme }) => theme.colors.site.background};
  border: 1px solid ${({ theme }) => theme.colors.headerLine};
  border-radius: 6px;
`;

export const Title = styled.h3`
  margin: 16px 0 0;
  font-size: 30px;
  font-weight: 900;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.colors.tile.header};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 22px;
  }
`;

export const Meta = styled.p`
  margin: 8px 0 0;
  font-family: ${({ theme }) => theme.fontMono};
  font-size: 14px;
  color: ${({ theme }) => theme.colors.muted};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 13px;
  }
`;

export const Summary = styled.p`
  max-width: 820px;
  margin: 16px 0 0;
  font-size: 18px;
  line-height: 1.6;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 15px;
  }
`;

// Tester and developer side by side; one column on tablets and phones.
export const Lenses = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-top: 28px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

export const LensCard = styled.section<{ $side: Side }>`
  display: flex;
  flex-direction: column;
  padding: 24px;
  background: ${({ theme, $side }) => theme.colors[accent($side)].soft};
  border: 1px solid ${({ theme, $side }) => theme.colors[accent($side)].border};
  border-left: 4px solid
    ${({ theme, $side }) => theme.colors[accent($side)].accent};
  border-radius: 12px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    padding: 16px;
  }
`;

export const LensLabel = styled.p<{ $side: Side }>`
  margin: 0;
  font-family: ${({ theme }) => theme.fontMono};
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${({ theme, $side }) => theme.colors[accent($side)].accent};
`;

export const LensTitle = styled.h4`
  margin: 6px 0 0;
  font-size: 20px;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.textPrimary};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 18px;
  }
`;

export const LensHeadline = styled.p`
  margin: 8px 0 0;
  font-weight: 600;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const LensPoints = styled.ul<{ $side: Side }>`
  flex-grow: 1;
  display: grid;
  align-content: start;
  gap: 10px;
  margin: 16px 0 0;
  padding: 0;
  list-style: none;
  font-size: 16px;
  line-height: 1.55;

  li {
    position: relative;
    padding-left: 24px;
  }

  li::before {
    content: "${({ $side }) => ($side === "developer" ? "›" : "✓")}";
    content: "${({ $side }) => ($side === "developer" ? "›" : "✓")}" / "";
    position: absolute;
    left: 0;
    top: 0;
    font-weight: 900;
    color: ${({ theme, $side }) => theme.colors[accent($side)].accent};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 15px;
  }
`;

export const LensPipeline = styled.div`
  flex-grow: 1;
  margin-top: 16px;
`;

export const LensStack = styled(Chips)`
  margin-top: 20px;
`;

export const Details = styled.details`
  margin-top: 28px;
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
    border: 1px solid ${({ theme }) => theme.colors.headerLine};
    border-radius: 12px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 15px;
  }
`;
