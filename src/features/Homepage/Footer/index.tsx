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
      <StyledIcon src={talkIcon} alt="" />
    </LetsTalk>
    <Address>
      <EmailWrapper>
        <EmailLink href={`mailto:${email}`}>{email}</EmailLink>
      </EmailWrapper>
      <Paragraph>
        Thanks for visiting. If you would like to talk about testing, data
        quality or a new opportunity, send me an email or message me on
        LinkedIn.
      </Paragraph>
      <SocialIcons />
    </Address>
  </Wrapper>
);
