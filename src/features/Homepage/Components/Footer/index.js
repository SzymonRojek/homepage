import { email } from "../../email";
import { SocialIcons } from "./SocialIcons";
import {
  Address,
  LetsTalk,
  EmailWrapper,
  EmailLink,
  Paragraph,
  Wrapper,
} from "./styled";

export const Footer = () => (
  <Wrapper>
    <LetsTalk>Let's talk!</LetsTalk>
    <Address>
      <EmailWrapper>
        <EmailLink href={`mailto:${email}`}>{email}</EmailLink>
      </EmailWrapper>
      <Paragraph>
        Thank you for viewing my personal homepage portflio. <br />
        I'm very excited to talk about the new opportunity ahead.
      </Paragraph>
      <SocialIcons />
    </Address>
  </Wrapper>
);
