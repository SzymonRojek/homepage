import styled from "styled-components";

export const Wrapper = styled.header`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 64px;
  align-items: center;
`;

export const Avatar = styled.img`
  width: 30vw;
  max-width: 384px;
  border-radius: 50%;
`;

export const Details = styled.div`
  margin-left: 66px;
`;

export const Introducement = styled.p`
  margin: 0;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: initial;
`;

export const Name = styled.h1`
  font-size: 38px;
  font-weight: 900;
  color: #252525;
  margin: 12px 0 0 0;
`;

export const Description = styled.p`
  font-size: 20px;
  font-weight: 400;
  line-height: 1.4;
  letter-spacing: 1px;
  margin: 36px 0 0 0;
  max-width: 650px;
`;

export const ButtonLink = styled.a`
  display: inline-flex;
  align-items: center;
  margin-top: 32px;
  padding: 12px 16px;
  color: white;
  font-size: 20.06px;
  font-weight: 600;
  background-color: #0366d6;
  text-decoration: none;
  letter-spacing: 1px;
  border-radius: 4px;
  border: 1px solid transparent;
  transition: box-shadow 0.3s;

  :hover {
    box-shadow: 0px 0px 1px 3px #69aeea;
  }
`;

export const ButtonText = styled.span`
  margin-left: 16px;
`;
