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
  Summary,
  Location,
} from "./styled";
import {
  ButtonLink,
  ButtonLinks,
  SecondaryButtonLink,
  EnvelopeIcon,
} from "../ButtonLink";

export const MainHeader = () => (
  <Wrapper>
    <Avatar src={szymonRojekProfile} alt={profile.name} />
    <Details>
      <ThisIs>this is</ThisIs>
      <Name>{profile.name}</Name>
      <Title>{profile.title}</Title>
      <Summary>{profile.bio}</Summary>
      <Location>{profile.location}</Location>
      <ButtonLinks>
        <ButtonLink href={`mailto:${email}`} title={email}>
          <EnvelopeIcon />
          Get in touch
        </ButtonLink>
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
      </ButtonLinks>
    </Details>
  </Wrapper>
);
