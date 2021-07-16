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
        I'm always open to new projects whenever I have time. If you have
        a&nbsp; website, dashboard or a mobil app in mind and need some help to
        make your ideas come to life, feel free to contact me
      </Paragraph>
      <SocialIcons />
    </Address>
  </Wrapper>
);
