import { createGlobalStyle } from "styled-components";
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

export const Repositories = ({ repositories }) => (
  <List>
    {repositories.map(({ id, name, description, html_url }) => (
      <Tile key={id}>
        <Name>{name}</Name>
        <Description>{description}</Description>
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
