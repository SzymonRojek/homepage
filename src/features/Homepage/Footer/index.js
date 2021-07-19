import { email } from "../email";
import { SocialIcons } from "./SocialIcons";
import talkIcon from "./talk.svg";
import { StyledIcon } from "./styled";
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
    <LetsTalk>
      Let's talk!
      <StyledIcon src={talkIcon} />
    </LetsTalk>
    <Address>
      <EmailWrapper>
        <EmailLink href={`mailto:${email}`}>{email}</EmailLink>
      </EmailWrapper>
      <Paragraph>
        Thank you for viewing my personal homepage portflio. I'm very excited to
        talk about new opportunities ahead.
      </Paragraph>
      <SocialIcons />
    </Address>
  </Wrapper>
);
