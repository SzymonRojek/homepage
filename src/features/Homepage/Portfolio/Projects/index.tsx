import { useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../../../../core/hooks";
import {
  OtherProjects,
  OtherIntro,
  OtherItem,
  OtherList,
  GroupTitle,
  Description,
  Tile,
  Link,
  Links,
  LinksRow,
  List,
  Name,
  LinksValue,
  Meta,
  Cards,
} from "./styled";
import { repoUrl, type Project } from "../projectsData";
import { CaseStudy } from "../CaseStudy";
import { ProjectCard } from "../ProjectCard";
import {
  openCaseStudy,
  openFromAddress,
  parseCaseStudyHash,
  selectOpenRepo,
  selectSide,
  type Side,
} from "../projectViewSlice";

interface ProjectsProps {
  projects: Project[];
}

// Keep the address in step with the open case study, so it can be shared,
// without a jump: only the #hash changes.
const setHash = (hash: string) =>
  window.history.replaceState(
    null,
    "",
    `${window.location.pathname}${window.location.search}#${hash}`,
  );

// When a case study opens, or a portrait half asks for one of its columns,
// bring it into sight and move focus there, so keyboard and screen-reader
// users land on what they asked for. The first render is left to
// useInitialScroll.
const useRevealCaseStudy = (openRepo: string | null, side: Side | null) => {
  const previous = useRef(`${openRepo}-${side}`);

  useEffect(() => {
    const current = `${openRepo}-${side}`;
    if (previous.current === current) {
      return;
    }
    previous.current = current;

    if (!openRepo) {
      return;
    }
    const id = side
      ? `case-study-${openRepo}-${side}`
      : `case-study-${openRepo}`;
    const target = document.getElementById(id);
    target?.scrollIntoView();
    target?.focus({ preventScroll: true });
  }, [openRepo, side]);
};

const otherIntro =
  "A front-end background helps me understand what I test and write maintainable UI automation.";

export const Projects = ({ projects }: ProjectsProps) => {
  const openRepo = useAppSelector(selectOpenRepo);
  const side = useAppSelector(selectSide);
  const dispatch = useAppDispatch();
  useRevealCaseStudy(openRepo, side);

  // On load the address is read once (index.tsx); a #case-study-...
  // address typed or pasted later, while the page is open, opens it too.
  useEffect(() => {
    const onHashChange = () => {
      const { openRepo: linked, side: linkedSide } = parseCaseStudyHash();
      if (linked) {
        dispatch(openFromAddress({ openRepo: linked, side: linkedSide }));
      }
    };

    window.addEventListener("hashchange", onHashChange);
    // An address that changed after the page loaded but before this listener
    // was ready (a busy phone, a quick click) would be missed: read it once.
    onHashChange();
    return () => window.removeEventListener("hashchange", onHashChange);
  }, [dispatch]);

  const caseStudies = projects.filter(({ caseStudy }) => caseStudy);

  const toggle = (repo: string) => {
    const next = repo === openRepo ? null : repo;
    dispatch(openCaseStudy(next));
    setHash(next ? `case-study-${next}` : "projects");
  };

  const testProjects = projects.filter(
    ({ category, caseStudy }) => category === "Testing" && !caseStudy,
  );
  const otherProjects = projects.filter(({ category }) => category === "Other");

  return (
    <>
      {caseStudies.length > 0 && (
        <Cards aria-label="Case studies">
          {caseStudies.map((project) => (
            <ProjectCard
              key={project.repo}
              project={project}
              expanded={project.repo === openRepo}
              onToggle={() => toggle(project.repo)}
            />
          ))}
        </Cards>
      )}

      {/* All of them, the closed ones hidden: search engines and AI tools
          that read the page's HTML find every case study. */}
      {caseStudies.map(
        ({ title, repo, caseStudy }) =>
          caseStudy && (
            <CaseStudy
              key={repo}
              title={title}
              repo={repo}
              caseStudy={caseStudy}
              open={repo === openRepo}
            />
          ),
      )}

      {testProjects.length > 0 && (
        <List aria-label="Test projects">
          {testProjects.map(
            ({ title, repo, language, description, demoUrl }) => (
              <Tile key={repo}>
                <Name>{title}</Name>
                <Meta>
                  {repo} · {language}
                </Meta>
                <Description>{description}</Description>
                <Links>
                  {demoUrl && (
                    <LinksRow>
                      <dt>Demo:</dt>
                      <LinksValue>
                        <Link target="_blank" rel="noreferrer" href={demoUrl}>
                          Live demo
                        </Link>
                      </LinksValue>
                    </LinksRow>
                  )}
                  <LinksRow>
                    <dt>Code:</dt>
                    <LinksValue>
                      <Link
                        target="_blank"
                        rel="noreferrer"
                        href={repoUrl(repo)}
                      >
                        GitHub Repository
                      </Link>
                    </LinksValue>
                  </LinksRow>
                </Links>
              </Tile>
            ),
          )}
        </List>
      )}

      {otherProjects.length > 0 && (
        <OtherProjects aria-labelledby="other-projects">
          <GroupTitle id="other-projects">Other projects</GroupTitle>
          <OtherIntro>{otherIntro}</OtherIntro>
          <OtherList>
            {otherProjects.map(({ title, repo, description, demoUrl }) => (
              <OtherItem key={repo}>
                <strong>{title}</strong>
                <span> · {description}</span>{" "}
                {demoUrl && (
                  <>
                    <Link target="_blank" rel="noreferrer" href={demoUrl}>
                      Live demo
                    </Link>{" "}
                  </>
                )}
                <Link target="_blank" rel="noreferrer" href={repoUrl(repo)}>
                  Code
                </Link>
              </OtherItem>
            ))}
          </OtherList>
        </OtherProjects>
      )}
    </>
  );
};
