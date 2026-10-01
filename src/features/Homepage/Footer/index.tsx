import { email } from "../email";
import { profile } from "../profile";
import { SocialIcons } from "./SocialIcons";
import {
  Wrapper,
  Card,
  Content,
  Heading,
  HeadingIcon,
  Paragraph,
  Buttons,
  ContactButton,
  SecondaryContactButton,
  Bottom,
} from "./styled";
import { EnvelopeIcon, LinkedInIcon } from "../ButtonLink";

export const Footer = () => (
  <Wrapper>
    <Card aria-labelledby="contact">
      <Content>
        <Heading id="contact">
          Let's talk
          <HeadingIcon aria-hidden="true" />
        </Heading>
        <Paragraph>{profile.contactText}</Paragraph>
        <Buttons>
          <ContactButton href={`mailto:${email}`}>
            <EnvelopeIcon aria-hidden="true" />
            Send me an email
          </ContactButton>
          <SecondaryContactButton
            href={profile.linkedinUrl}
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon aria-hidden="true" />
            Message me on LinkedIn
          </SecondaryContactButton>
        </Buttons>
      </Content>
    </Card>
    <Bottom>
      <p>
        © {new Date().getFullYear()} {profile.name}
      </p>
      <SocialIcons />
    </Bottom>
  </Wrapper>
);
