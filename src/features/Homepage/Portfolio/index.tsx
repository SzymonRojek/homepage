import { Projects } from "./Projects";
import { Section, SectionHeader, SectionIntro } from "../Section";
import { projects, projectsIntro } from "./projectsData";

export const Portfolio = () => (
  <Section aria-labelledby="projects">
    <SectionHeader id="projects">Projects</SectionHeader>
    <SectionIntro>{projectsIntro}</SectionIntro>

    <Projects projects={projects} />
  </Section>
);
