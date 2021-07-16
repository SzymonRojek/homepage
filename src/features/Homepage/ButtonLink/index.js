import styled from "styled-components";

const ButtonLink = styled.a`
  padding: 12px 16px;
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.buttonLink.text};
  text-decoration: none;
  border: 1px solid ${({ theme }) => theme.colors.buttonLink.border};
  border-radius: ${({ theme }) => theme.borderRadiusSmall};
  background: ${({ theme }) => theme.colors.primary};
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.buttonLink.shadow};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 18px;
  }
`;

export default ButtonLink;
