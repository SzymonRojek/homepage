import { useAppDispatch, useAppSelector } from "../../../core/hooks";
import { Projects } from "./Projects";
import { LensSwitch } from "./LensSwitch";
import { selectProjectView, setProjectView } from "./projectViewSlice";
import { Section, SectionHeader, SectionIntro } from "../Section";
import { Toolbar, ToolbarLabel } from "./styled";
import { projects, projectsIntro } from "./projectsData";

export const Portfolio = () => {
  const view = useAppSelector(selectProjectView);
  const dispatch = useAppDispatch();

  return (
    <Section aria-labelledby="projects">
      <SectionHeader id="projects">Projects</SectionHeader>
      <SectionIntro>{projectsIntro}</SectionIntro>
      <Toolbar>
        <ToolbarLabel aria-hidden="true">View as</ToolbarLabel>
        <LensSwitch
          view={view}
          onChange={(nextView) => dispatch(setProjectView(nextView))}
        />
      </Toolbar>

      <Projects projects={projects} view={view} />
    </Section>
  );
};
