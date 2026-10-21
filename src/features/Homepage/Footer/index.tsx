import { CopyEmail } from "./CopyEmail";
import { profile } from "../profile";
import { ThemeSwitch } from "../../../common/ThemeSwitch";
import { SocialIcons } from "./SocialIcons";
import {
  Wrapper,
  Inner,
  Letter,
  Heading,
  Message,
  Note,
  Bottom,
  Tools,
  Divider,
} from "./styled";

// The end of the page reads like a short note, not a contact form: the thanks
// on the left, my words about teamwork and the address on the right, as a
// button that copies it.
// LinkedIn, GitHub and the theme switch sit in the line underneath.
export const Footer = () => (
  <Wrapper>
    <Inner>
      <Letter aria-labelledby="contact">
        <Heading id="contact">{profile.contactHeading}</Heading>
        <Message>
          <Note>{profile.teamNote}</Note>
          <CopyEmail />
        </Message>
      </Letter>
      <Bottom>
        {/* The static copy of the page carries the build's year. Should a
            visit fall in a new year before the next deploy, React keeps that
            year instead of failing to take the copy over. */}
        <p suppressHydrationWarning>
          {profile.name} © {new Date().getFullYear()}
        </p>
        <Tools>
          <SocialIcons />
          <Divider aria-hidden="true" />
          <ThemeSwitch />
        </Tools>
      </Bottom>
    </Inner>
  </Wrapper>
);
