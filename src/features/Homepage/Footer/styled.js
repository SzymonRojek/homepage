import styled from "styled-components";
import { Icon } from "../Icon";

export const Wrapper = styled.footer`
  padding: 0 5px 0 5px;
  margin-top: 120px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin-top: 48px;
  }
`;

export const LetsTalk = styled.h2`
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: initial;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    padding-bottom: 4px;
  }
`;

export const Address = styled.address`
  font-style: unset;
`;

export const EmailWrapper = styled.div`
  margin: 24px 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin: 18px 0;
  }
`;

export const EmailLink = styled.a`
  margin-top: 10px;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 32px;
  font-weight: 900;
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 18px;
  }
`;

export const Paragraph = styled.p`
  max-width: 430px;
  font-size: 18px;
  line-height: 1.4;
  margin: 0;
  text-align: justify;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 14px;
  }
`;

export const StyledIcon = styled(Icon)`
  vertical-align: bottom;
`;
