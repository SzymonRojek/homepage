import React from "react";
import {
  Wrapper,
  Avatar,
  Details,
  Introducement,
  Name,
  Description,
  ButtonLink,
  ButtonText,
} from "./styled";
import { ReactComponent as MessageIcon } from "./message-icon.svg";
import szymonRojekProfile from "./szymonRojekProfile.jpg";

export const Header = () => {
  return (
    <Wrapper>
      <Avatar src={szymonRojekProfile} alt="Szymon Rojek - profile picture" />
      <Details>
        <Introducement>this is</Introducement>
        <Name>Szymon Rojek</Name>
        <Description>
          I'm a passionate Frontend Developer in love with React, currently
          looking for new job opportunities.
        </Description>
        <ButtonLink
          href={`mailto:${"sz.rojek@gmail.com"}`}
          title={"sz.rojek@gmail.com"}
        >
          <MessageIcon />
          <ButtonText>Hire Me</ButtonText>
        </ButtonLink>
      </Details>
    </Wrapper>
  );
};
