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
import { DownloadIcon, EnvelopeIcon, LinkedInIcon } from "../ButtonLink";
import { getCvUrl } from "../cv";

export const Footer = () => {
  const cvUrl = getCvUrl();

  return (
    <Wrapper>
      <Card aria-labelledby="contact">
        <Content>
          <Heading id="contact">
            Let's talk
            <HeadingIcon aria-hidden="true" />
          </Heading>
          <Paragraph>{profile.contactText}</Paragraph>
          <Buttons>
            <ContactButton
              href={`mailto:${email}`}
              aria-label="Send me an email"
            >
              <EnvelopeIcon aria-hidden="true" />
              Email
            </ContactButton>
            <SecondaryContactButton
              href={profile.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Message me on LinkedIn"
            >
              <LinkedInIcon aria-hidden="true" />
              LinkedIn
            </SecondaryContactButton>
            {cvUrl && (
              <SecondaryContactButton
                href={cvUrl}
                download
                aria-label="Download CV"
                title="Download CV (PDF)"
              >
                <DownloadIcon aria-hidden="true" />
                CV
              </SecondaryContactButton>
            )}
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
};
