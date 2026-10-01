import szymonRojekProfile from "./szymonRojekProfile.jpg";
import { email } from "../email";
import { profile } from "../profile";
import {
  Wrapper,
  Avatar,
  Details,
  Availability,
  Name,
  Title,
  Summary,
  Highlights,
  Highlight,
} from "./styled";
import {
  ButtonLink,
  ButtonLinks,
  SecondaryButtonLink,
  EnvelopeIcon,
  LinkedInIcon,
} from "../ButtonLink";

export const MainHeader = () => (
  <Wrapper>
    <Avatar src={szymonRojekProfile} alt={profile.name} />
    <Details>
      <Name>{profile.name}</Name>
      <Title>{profile.title}</Title>
      <Availability>
        {profile.availability} · {profile.relocation}
      </Availability>
      <Summary>{profile.bio}</Summary>
      <Highlights aria-label="Key skills">
        {profile.highlights.map((highlight) => (
          <Highlight key={highlight}>{highlight}</Highlight>
        ))}
      </Highlights>
      <ButtonLinks>
        <ButtonLink href={`mailto:${email}`} title={email}>
          <EnvelopeIcon aria-hidden="true" />
          Get in touch
        </ButtonLink>
        <SecondaryButtonLink
          href={profile.linkedinUrl}
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInIcon aria-hidden="true" />
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
