import { Section, SectionHeader } from "../Section";
import { keySkills, tools } from "../skillsData";
import { Card, SkillList, Skill, Tools } from "./styled";

export const Skills = () => (
  <Section aria-labelledby="skills">
    <SectionHeader id="skills">Skills</SectionHeader>
    <Card>
      <SkillList aria-label="Core skills">
        {keySkills.map((skill) => (
          <Skill key={skill}>{skill}</Skill>
        ))}
      </SkillList>
      <Tools>
        <strong>Tools:</strong> {tools.join(" · ")}
      </Tools>
    </Card>
  </Section>
);
