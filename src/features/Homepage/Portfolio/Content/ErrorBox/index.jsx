import { ButtonLink } from "../../../ButtonLink";
import { githubUserName } from "../../githubUserName";
import { Header, Paragraph, Wrapper } from "./styled";
import WarningIcon from "./warning.svg?react";

export const ErrorBox = () => (
  <Wrapper>
    <WarningIcon />
    <Header>Oooops! Something went&nbsp;wrong...</Header>
    <Paragraph>
      Sorry, failed to load GitHub&nbsp;projects. <br />
      You can check them directly&nbsp;on&nbsp;GitHub
    </Paragraph>
    <ButtonLink
      href={`https://github.com/${githubUserName}`}
      target="_blank"
      rel="noreferrer"
    >
      Go to GitHub
    </ButtonLink>
  </Wrapper>
);
