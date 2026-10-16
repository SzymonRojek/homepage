import { email } from "../email";
import { profile } from "../profile";
import { SocialIcons } from "./SocialIcons";
import {
  Wrapper,
  Inner,
  Letter,
  Heading,
  Message,
  Note,
  Invite,
  ContactButton,
  Bottom,
} from "./styled";
import { EnvelopeIcon } from "../ButtonLink";

// The end of the page reads like a short note, not a contact form: the thanks
// on the left, my words about teamwork and one "Email me" on the right.
// LinkedIn and GitHub sit in the line underneath.
export const Footer = () => (
  <Wrapper>
    <Inner>
      <Letter aria-labelledby="contact">
        <Heading id="contact">Thanks for reading this far.</Heading>
        <Message>
          <Note>{profile.teamNote}</Note>
          <Invite>{profile.contactInvite}</Invite>
          <ContactButton href={`mailto:${email}`} aria-label="Send me an email">
            <EnvelopeIcon aria-hidden="true" />
            Email me
          </ContactButton>
        </Message>
      </Letter>
      <Bottom>
        {/* The static copy of the page carries the build's year. Should a
            visit fall in a new year before the next deploy, React keeps that
            year instead of failing to take the copy over. */}
        <p suppressHydrationWarning>
          {profile.name} © {new Date().getFullYear()}
        </p>
        <SocialIcons />
      </Bottom>
    </Inner>
  </Wrapper>
);
