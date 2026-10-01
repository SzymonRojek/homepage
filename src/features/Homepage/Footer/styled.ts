import styled from "styled-components";
import { Icon } from "../Icon";
import { SubHeader } from "../SubHeader";
import { ButtonLinks } from "../ButtonLink";

export const Wrapper = styled.footer`
  margin-top: 120px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin-top: 48px;
  }
`;

export const Card = styled.section`
  padding: 56px 32px;
  text-align: center;
  background: ${({ theme }) => theme.colors.boxBackground};
  box-shadow: ${({ theme }) => theme.boxShadow};
  border-radius: ${({ theme }) => theme.borderRadiusSmall};
  transition: background 0.3s;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    padding: 32px 16px;
    text-align: left;
  }
`;

export const Heading = styled(SubHeader)``;

export const StyledIcon = styled(Icon)`
  vertical-align: bottom;
`;

export const Paragraph = styled.p`
  max-width: 560px;
  margin: 16px auto 0;
  font-size: 18px;
  line-height: 1.5;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin-left: 0;
    font-size: 15px;
  }
`;

export const Buttons = styled(ButtonLinks)`
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    justify-content: flex-start;
  }
`;

export const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  margin-top: 32px;
  padding: 0 4px;
  font-size: 14px;

  p {
    margin: 0;
  }
`;
