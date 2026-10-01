import szymonRojekProfile from "./szymonRojekProfile.jpg";
import { email } from "../email";
import { profile } from "../profile";
import {
  Wrapper,
  Avatar,
  Details,
  ThisIs,
  Name,
  Title,
  Subtitle,
  Summary,
  Location,
  Buttons,
  StyledButtonLink,
  SecondaryButtonLink,
  ButtonIcon,
} from "./styled";

export const MainHeader = () => (
  <Wrapper>
    <Avatar src={szymonRojekProfile} alt={profile.name} />
    <Details>
      <ThisIs>this is</ThisIs>
      <Name>{profile.name}</Name>
      <Title>{profile.title}</Title>
      <Subtitle>{profile.subtitle}</Subtitle>
      <Summary>{profile.bio}</Summary>
      <Location>{profile.location}</Location>
      <Buttons>
        <StyledButtonLink href={`mailto:${email}`} title={email}>
          <ButtonIcon />
          Get in touch
        </StyledButtonLink>
        <SecondaryButtonLink
          href={profile.linkedinUrl}
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </SecondaryButtonLink>
        {profile.cvFile && (
          <SecondaryButtonLink
            href={`${import.meta.env.BASE_URL}${profile.cvFile}`}
            download
          >
            Download CV
          </SecondaryButtonLink>
        )}
      </Buttons>
    </Details>
  </Wrapper>
);
