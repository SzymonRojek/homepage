import { Card, Title, List, Item, Dot } from "./styled";
import blueDot from "./dot.png";

interface SkillsProps {
  title?: string;
  skills: string[];
}

export const Skills = ({ title, skills }: SkillsProps) => (
  <Card>
    {title && <Title>{title}</Title>}
    <List>
      {skills.map((skill) => (
        <Item key={skill}>
          <Dot src={blueDot} alt="" />
          {skill}
        </Item>
      ))}
    </List>
  </Card>
);
