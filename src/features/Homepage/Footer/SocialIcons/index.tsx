import { withNewTab } from "../../../../common/newTab";
import { socials } from "./social";
import { Item, Link, List } from "./styled";

export const SocialIcons = () => (
  <List>
    {socials.map(({ name, url, Icon }) => (
      <Item key={name}>
        {/* aria-label names the link for screen readers and keyboards and
            says it opens a new tab; the title stays as the tooltip under a
            mouse. The icon is decoration. */}
        <Link
          href={url}
          aria-label={withNewTab(name)}
          title={name}
          target="_blank"
          rel="noreferrer"
        >
          <Icon aria-hidden="true" focusable="false" />
        </Link>
      </Item>
    ))}
  </List>
);
