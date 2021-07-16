import { Content } from "./Content";
// import { SubHeader } from "../SubHeader";
import { Section, Header, StyledGithubIcon, MyRecentProjects } from "./styled";
import { githubUsername } from "./githubUsername";

export const Portfolio = () => {
  return (
    <Section>
      <Header>
        <StyledGithubIcon />
        {/* <SubHeader>Portflio</SubHeader> */}
        <MyRecentProjects>My recent projects</MyRecentProjects>
      </Header>
      <Content />
    </Section>
  );
};
