import szymonRojekProfile from "./szymonRojekProfile.jpg";
import personIcon from "./person.png";
import { email } from "../../email";
import {
  Wrapper,
  Avatar,
  Details,
  ThisIs,
  Name,
  Summary,
  Icon,
  StyledButtonLink,
  ButtonIcon,
} from "./styled";

export const MainHeader = () => {
  return (
    <Wrapper>
      <Avatar src={szymonRojekProfile} alt="Szymon Rojek" />
      <Details>
        <ThisIs>this is</ThisIs>
        <Name>Szymon Rojek</Name>
        <Summary>
          <Icon src={personIcon} alt="" />
          I'm a passionate Junior Frontend Developer in love with JavaScript &
          React, currently looking for first job opportunities.
        </Summary>
        <StyledButtonLink href={`mailto:${email}`} title={email}>
          <ButtonIcon />
          Hire Me
        </StyledButtonLink>
      </Details>
    </Wrapper>
  );
};
