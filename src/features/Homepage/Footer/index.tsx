import { email } from "../email";
import { profile } from "../profile";
import { SocialIcons } from "./SocialIcons";
import talkIcon from "./talk.svg";
import { ButtonLink, SecondaryButtonLink, EnvelopeIcon } from "../ButtonLink";
import {
  Wrapper,
  Card,
  Heading,
  StyledIcon,
  Paragraph,
  Buttons,
  Bottom,
} from "./styled";

export const Footer = () => (
  <Wrapper>
    <Card aria-labelledby="contact">
      <Heading id="contact">
        Let's talk
        <StyledIcon src={talkIcon} alt="" />
      </Heading>
      <Paragraph>{profile.contactText}</Paragraph>
      <Buttons>
        <ButtonLink href={`mailto:${email}`}>
          <EnvelopeIcon />
          Send me an email
        </ButtonLink>
        <SecondaryButtonLink
          href={profile.linkedinUrl}
          target="_blank"
          rel="noreferrer"
        >
          Message me on LinkedIn
        </SecondaryButtonLink>
      </Buttons>
    </Card>
    <Bottom>
      <p>
        © {new Date().getFullYear()} {profile.name}
      </p>
      <SocialIcons />
    </Bottom>
  </Wrapper>
);
