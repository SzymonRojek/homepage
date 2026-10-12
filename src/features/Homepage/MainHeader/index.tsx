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
  SecondaryTitle,
  Tagline,
  Summary,
} from "./styled";
import { ButtonLink, ButtonLinks, EnvelopeIcon } from "../ButtonLink";

// One clear path: who I am, what I do, how to reach me. One button only;
// LinkedIn is in the footer. The location sits under the button: UK
// recruiters need it, but it shouldn't compete.
export const MainHeader = () => (
  <Wrapper id="top">
    <SplitPortrait src={szymonRojekProfile} name={profile.name} />
    <Details>
      <Availability>{profile.availability}</Availability>
      <Name>{profile.name}</Name>
      <Title>
        {profile.title}
        <SecondaryTitle> · {profile.secondaryTitle}</SecondaryTitle>
      </Title>
      <Tagline>{profile.tagline}</Tagline>
      <Summary>{profile.bio}</Summary>
      <ButtonLinks>
        <ButtonLink href={`mailto:${email}`} title={email}>
          <EnvelopeIcon aria-hidden="true" />
          Email me
        </ButtonLink>
      </ButtonLinks>
      <Location>{profile.location.join(" · ")}</Location>
    </Details>
  </Wrapper>
);
