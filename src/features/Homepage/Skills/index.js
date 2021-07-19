import { Section, StyledHeader, List, Item, Dot } from "./styled";
import blueDot from "./dot.png";

export const Skills = ({ title, skills }) => (
  <Section>
    <StyledHeader>{title}</StyledHeader>
    <List>
      {skills.map((skill) => (
        <Item key={skill}>
          <Dot src={blueDot} />
          {skill}
        </Item>
      ))}
    </List>
  </Section>
);
