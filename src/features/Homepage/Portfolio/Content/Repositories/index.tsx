import {
  AlsoBuilt,
  AlsoBuiltIntro,
  AlsoBuiltItem,
  AlsoBuiltList,
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
import type { Project } from "../../../homepageSlice";

const alsoBuiltIntro =
  "A front-end background helps me understand what I test and write maintainable UI automation.";

export const Repositories = ({ repositories }: { repositories: Project[] }) => {
  const testProjects = repositories.filter(
    ({ category }) => category === "Testing",
  );
  const frontEndProjects = repositories.filter(
    ({ category }) => category === "Front-end",
  );

  return (
    <>
      {testProjects.length > 0 && (
        <List aria-label="Test projects">
          {testProjects.map(
            ({
              id,
              name,
              title,
              description,
              html_url,
              homepage,
              language,
              stargazers_count,
            }) => (
              <Tile key={id}>
                <Name>{title}</Name>
                <Meta>
                  {[name, language].filter(Boolean).join(" · ")}
                  {stargazers_count > 0 && (
                    <>
                      {" · "}
                      <span aria-label={`${stargazers_count} stars`}>
                        ★ {stargazers_count}
                      </span>
                    </>
                  )}
                </Meta>
                {description && <Description>{description}</Description>}
                <Links>
                  {homepage && (
                    <LinksRow>
                      <dt>Demo:</dt>
                      <LinksValue>
                        <Link target="_blank" rel="noreferrer" href={homepage}>
                          Live demo
                        </Link>
                      </LinksValue>
                    </LinksRow>
                  )}
                  <LinksRow>
                    <dt>Code:</dt>
                    <LinksValue>
                      <Link target="_blank" rel="noreferrer" href={html_url}>
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

      {frontEndProjects.length > 0 && (
        <AlsoBuilt aria-labelledby="also-built">
          <GroupTitle id="also-built">Also built</GroupTitle>
          <AlsoBuiltIntro>{alsoBuiltIntro}</AlsoBuiltIntro>
          <AlsoBuiltList>
            {frontEndProjects.map(
              ({ id, title, description, html_url, homepage }) => (
                <AlsoBuiltItem key={id}>
                  <strong>{title}</strong>
                  {description && <span> · {description}</span>}{" "}
                  {homepage && (
                    <>
                      <Link target="_blank" rel="noreferrer" href={homepage}>
                        Live demo
                      </Link>{" "}
                    </>
                  )}
                  <Link target="_blank" rel="noreferrer" href={html_url}>
                    Code
                  </Link>
                </AlsoBuiltItem>
              ),
            )}
          </AlsoBuiltList>
        </AlsoBuilt>
      )}
    </>
  );
};
