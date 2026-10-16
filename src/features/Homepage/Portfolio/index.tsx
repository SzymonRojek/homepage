import { Fragment } from "react";
import { Projects } from "./Projects";
import {
  Section,
  HiddenSectionHeader,
  BigLine,
  SectionIntro,
} from "../Section";
import { projects, projectsHeadline, projectsIntro } from "./projectsData";
import { Sentence } from "./styled";

// One big line in the colours of code and testing (the heading is for screen
// readers only) and the intro.
export const Portfolio = () => (
  <Section aria-labelledby="projects">
    <HiddenSectionHeader id="projects">Projects</HiddenSectionHeader>
    <BigLine>
      {/* The space keeps the sentences apart for screen readers and in the
          page's text, where the line breaks don't show. */}
      {projectsHeadline.map(({ text, side }, index) => (
        <Fragment key={text}>
          {index > 0 && " "}
          <Sentence $side={side}>{text}</Sentence>
        </Fragment>
      ))}
    </BigLine>
    <SectionIntro>{projectsIntro}</SectionIntro>

    <Projects projects={projects} />
  </Section>
);
