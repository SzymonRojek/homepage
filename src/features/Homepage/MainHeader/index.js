import szymonRojekProfile from "./szymonRojekProfile.jpg";
import personIcon from "./person.png";
import { email } from "../email";
import {
  Wrapper,
  Avatar,
  Details,
  ThisIs,
  Name,
  Summary,
  PersonIcon,
  StyledButtonLink,
  ButtonIcon,
} from "./styled";

export const MainHeader = () => (
  <Wrapper>
    <Avatar src={szymonRojekProfile} alt="Szymon Rojek" />
    <Details>
      <ThisIs>this is</ThisIs>
      <Name>Szymon Rojek</Name>
      <Summary>
        <PersonIcon src={personIcon} alt="" />
        I'm passionate about JavaScript and React, ready for my Junior Front End
        Developer role.
      </Summary>
      <StyledButtonLink href={`mailto:${email}`} title={email}>
        <ButtonIcon />
        Hire Me
      </StyledButtonLink>
    </Details>
  </Wrapper>
);
