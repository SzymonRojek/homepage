import szymonRojekProfile from "./szymonRojekProfile.jpg";
import { email } from "../email";
import { profile } from "../profile";
import { SplitPortrait } from "./SplitPortrait";
import {
  Wrapper,
  Details,
  Availability,
  Location,
  Name,
  Title,
  Tagline,
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
  <Wrapper id="top">
    <SplitPortrait src={szymonRojekProfile} name={profile.name} />
    <Details>
      <Availability>{profile.availability}</Availability>
      <Name>{profile.name}</Name>
      <Title>{profile.title}</Title>
      <Tagline>{profile.tagline}</Tagline>
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
