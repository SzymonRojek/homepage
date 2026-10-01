import type { ReactNode } from "react";
import { Section, StyledHeader, List, Item, Dot } from "./styled";
import blueDot from "./dot.png";

interface SkillsProps {
  title: ReactNode;
  skills: string[];
}

export const Skills = ({ title, skills }: SkillsProps) => (
  <Section>
    <StyledHeader>{title}</StyledHeader>
    <List>
      {skills.map((skill) => (
        <Item key={skill}>
          <Dot src={blueDot} alt="" />
          {skill}
        </Item>
      ))}
    </List>
  </Section>
);
