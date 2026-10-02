import { Projects } from "./Projects";
import { Section, Header, StyledGithubIcon, MyRecentProjects } from "./styled";
import { SubHeader } from "../SubHeader";
import { projects } from "./projectsData";

export const Portfolio = () => (
  <Section>
    <Header>
      <StyledGithubIcon />
      <SubHeader>Test projects</SubHeader>
      <MyRecentProjects>Automation, API and end-to-end work</MyRecentProjects>
    </Header>

    <Projects projects={projects} />
  </Section>
);
