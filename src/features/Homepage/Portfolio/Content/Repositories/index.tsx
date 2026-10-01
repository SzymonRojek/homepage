import {
  Description,
  Tile,
  Link,
  Links,
  LinksRow,
  List,
  Name,
  LinksValue,
} from "./styled";
import type { Repository } from "../../../homepageSlice";

export const Repositories = ({
  repositories,
}: {
  repositories: Repository[];
}) => (
  <List>
    {repositories.map(({ id, name, description, html_url }) => (
      <Tile key={id}>
        <Name>{name}</Name>
        {description && <Description>{description}</Description>}
        <Links>
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
    ))}
  </List>
);
