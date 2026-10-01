import {
  Group,
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
import type { Project, ProjectCategory } from "../../../homepageSlice";

const categories: ProjectCategory[] = ["Testing", "Front-end"];

export const Repositories = ({ repositories }: { repositories: Project[] }) => (
  <>
    {categories.map((category) => {
      const projects = repositories.filter(
        (repository) => repository.category === category,
      );

      return (
        projects.length > 0 && (
          <Group key={category} aria-labelledby={`projects-${category}`}>
            <GroupTitle id={`projects-${category}`}>{category}</GroupTitle>
            <List>
              {projects.map(
                ({
                  id,
                  name,
                  description,
                  html_url,
                  homepage,
                  language,
                  stargazers_count,
                }) => (
                  <Tile key={id}>
                    <Name>{name}</Name>
                    {(language || stargazers_count > 0) && (
                      <Meta>
                        {language}
                        {language && stargazers_count > 0 && " · "}
                        {stargazers_count > 0 && (
                          <span aria-label={`${stargazers_count} stars`}>
                            ★ {stargazers_count}
                          </span>
                        )}
                      </Meta>
                    )}
                    {description && <Description>{description}</Description>}
                    <Links>
                      {homepage && (
                        <LinksRow>
                          <dt>Demo:</dt>
                          <LinksValue>
                            <Link
                              target="_blank"
                              rel="noreferrer"
                              href={homepage}
                            >
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
                            href={html_url}
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
          </Group>
        )
      );
    })}
  </>
);
