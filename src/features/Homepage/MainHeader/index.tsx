import szymonRojekProfile from "./szymonRojekProfile.jpg";
import { email } from "../email";
import { profile } from "../profile";
import {
  Wrapper,
  Avatar,
  Details,
  Availability,
  Location,
  Name,
  Title,
  Summary,
  Highlights,
  Highlight,
} from "./styled";
import {
  ButtonLink,
  ButtonLinks,
  IconButtonLink,
  EnvelopeIcon,
  LinkedInIcon,
} from "../ButtonLink";

export const MainHeader = () => (
  <Wrapper>
    <Avatar src={szymonRojekProfile} alt={profile.name} />
    <Details>
      <Name>{profile.name}</Name>
      <Title>{profile.title}</Title>
      <Availability>{profile.availability}</Availability>
      <Location>{profile.location.join(" · ")}</Location>
      <Summary>{profile.bio}</Summary>
      <Highlights aria-label="Key skills">
        {profile.highlights.map((highlight) => (
          <Highlight key={highlight}>{highlight}</Highlight>
        ))}
      </Highlights>
      <ButtonLinks>
        <ButtonLink href={`mailto:${email}`} title={email}>
          <EnvelopeIcon aria-hidden="true" />
          Email me
        </ButtonLink>
        <IconButtonLink
          href={profile.linkedinUrl}
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          title="LinkedIn"
        >
          <LinkedInIcon aria-hidden="true" />
        </IconButtonLink>
      </ButtonLinks>
    </Details>
  </Wrapper>
);
