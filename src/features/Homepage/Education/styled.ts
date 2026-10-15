import styled from "styled-components";

// "Next up" on the left, what I've already done in a grid on the right.
export const Layout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.4fr;
  gap: 24px;
  align-items: start;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    grid-template-columns: 1fr;
  }
`;

// What I'm working on now, on the deep-green brand band.
export const Next = styled.article`
  padding: 28px;
  color: ${({ theme }) => theme.colors.brand.text};
  background: ${({ theme }) => theme.colors.brand.background};
  border-radius: ${({ theme }) => theme.borderRadius};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    padding: 24px 20px;
  }
`;

export const NextLabel = styled.p`
  margin: 0;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.brand.accent};
`;

export const NextTitle = styled.h3`
  margin: 10px 0 0;
  font-size: 26px;
  font-weight: 800;
  line-height: 1.2;
  color: ${({ theme }) => theme.colors.brand.text};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 22px;
  }
`;

export const NextDetail = styled.p`
  margin: 10px 0 0;
  font-size: 15px;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.brand.muted};
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px 28px;
  margin: 0;
  padding: 8px 0 0;
  list-style: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    grid-template-columns: 1fr;
    gap: 18px;
  }
`;

export const Year = styled.p`
  margin: 0;
  font-size: 13px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.qa.accent};
`;

export const Title = styled.h3`
  margin: 2px 0 0;
  font-size: 17px;
  line-height: 1.3;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const Detail = styled.p`
  margin: 4px 0 0;
  font-size: 14px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.muted};
`;
