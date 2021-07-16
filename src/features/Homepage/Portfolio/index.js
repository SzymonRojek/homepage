import { Content } from "./Content";
import { SubHeader } from "../SubHeader";
import { Section, Header, StyleGithubIcon, MyRecentProjects } from "./styled";
import { githubUsername } from "./githubUsername";

export const Portfolio = () => {
  return (
    <Section>
      <Header>
        <StyleGithubIcon />
        <SubHeader>Portflio</SubHeader>
        <MyRecentProjects>My recent projects</MyRecentProjects>
      </Header>
      <Content />
    </Section>
  );
};
