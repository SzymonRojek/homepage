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
} from "./styled";
import { repoUrl, type Project } from "../projectsData";
import { CaseStudy } from "../CaseStudy";

const otherIntro =
  "A front-end background helps me understand what I test and write maintainable UI automation.";

export const Projects = ({ projects }: { projects: Project[] }) => {
  const caseStudies = projects.filter(({ caseStudy }) => caseStudy);
  const testProjects = projects.filter(
    ({ category, caseStudy }) => category === "Testing" && !caseStudy,
  );
  const otherProjects = projects.filter(({ category }) => category === "Other");

  return (
    <>
      {caseStudies.map(
        ({ title, repo, language, demoUrl, caseStudy }) =>
          caseStudy && (
            <CaseStudy
              key={repo}
              title={title}
              repo={repo}
              language={language}
              demoUrl={demoUrl}
              caseStudy={caseStudy}
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
