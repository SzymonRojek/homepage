import { Section, SectionHeader } from "../Section";
import { devSkills, keySkills, tools } from "../skillsData";
import { Grid, Group, GroupTitle, SkillList, Skill, Tools } from "./styled";

const groups = [
  { side: "tester", title: "Testing & data", skills: keySkills },
  { side: "developer", title: "Development", skills: devSkills },
] as const;

export const Skills = () => (
  <Section aria-labelledby="skills">
    <SectionHeader id="skills">Skills</SectionHeader>
    <Grid>
      {groups.map(({ side, title, skills }) => (
        <Group key={side} $side={side}>
          <GroupTitle $side={side}>{title}</GroupTitle>
          <SkillList aria-label={`${title} skills`}>
            {skills.map((skill) => (
              <Skill key={skill}>{skill}</Skill>
            ))}
          </SkillList>
        </Group>
      ))}
    </Grid>
    <Tools>
      <strong>Tools:</strong> {tools.join(" · ")}
    </Tools>
  </Section>
);
