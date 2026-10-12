import styled from "styled-components";
import { Chips } from "../../Section";
import { Button, SecondaryButtonLink } from "../../ButtonLink";

export const Card = styled.li<{ $expanded: boolean }>`
  display: flex;
  flex-direction: column;
  padding: 24px;
  background: ${({ theme }) => theme.colors.boxBackground};
  border: 1px solid
    ${({ theme, $expanded }) =>
      $expanded ? theme.colors.textPrimary : theme.colors.headerLine};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.boxShadow};
  transition: border-color 0.2s;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    padding: 20px;
  }
`;

export const Name = styled.h3`
  margin: 0;
  font-size: 20px;
  font-weight: 800;
  line-height: 1.3;
  color: ${({ theme }) => theme.colors.textPrimary};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 17px;
  }
`;

export const Teaser = styled.p`
  flex-grow: 1;
  margin: 16px 0 0;
  line-height: 1.6;
`;

export const Facts = styled(Chips)`
  margin-top: 16px;
`;

export const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
`;

export const ToggleButton = styled(Button)``;

export const SmallLink = styled(SecondaryButtonLink)``;
