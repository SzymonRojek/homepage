import szymonRojekProfile from "../MainHeader/szymonRojekProfile.jpg";
import { email } from "../email";
import { profile } from "../profile";
import { SocialIcons } from "./SocialIcons";
import {
  Wrapper,
  Inner,
  Letter,
  Photo,
  Heading,
  Note,
  Invite,
  ContactButton,
  Bottom,
} from "./styled";
import { EnvelopeIcon } from "../ButtonLink";

// The end of the page reads like a short letter, not a contact form. LinkedIn
// and GitHub sit in the line underneath.
export const Footer = () => (
  <Wrapper>
    <Inner>
      <Letter aria-labelledby="contact">
        <Photo src={szymonRojekProfile} alt="" loading="lazy" />
        <div>
          <Heading id="contact">Thanks for reading this far.</Heading>
          <Note>{profile.teamNote}</Note>
          <Invite>{profile.contactInvite}</Invite>
          <ContactButton href={`mailto:${email}`} aria-label="Send me an email">
            <EnvelopeIcon aria-hidden="true" />
            Email me
          </ContactButton>
        </div>
      </Letter>
      <Bottom>
        {/* The static copy of the page carries the build's year. Should a
            visit fall in a new year before the next deploy, React keeps that
            year instead of failing to take the copy over. */}
        <p suppressHydrationWarning>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <SocialIcons />
      </Bottom>
    </Inner>
  </Wrapper>
);
