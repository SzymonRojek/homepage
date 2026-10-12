import { Section, SectionHeader } from "../Section";
import {
  automationSkills,
  languages,
  programmingSkills,
  testingSkills,
  tools,
} from "../skillsData";
import {
  Grid,
  Group,
  GroupTitle,
  SkillList,
  Skill,
  Tools,
  Languages,
} from "./styled";

// Testing is the profession (cyan), programming is self-taught (green), and
// automation is where the two meet (both colours).
const groups = [
  { accent: "qa", title: "Testing & data", skills: testingSkills },
  { accent: "both", title: "Test automation", skills: automationSkills },
  { accent: "dev", title: "Programming", skills: programmingSkills },
] as const;

export const Skills = () => (
  <Section aria-labelledby="skills">
    <SectionHeader id="skills">Skills</SectionHeader>
    <Grid>
      {groups.map(({ accent, title, skills }) => (
        <Group key={title}>
          <GroupTitle $accent={accent}>{title}</GroupTitle>
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
    <Languages>
      <strong>Languages:</strong>{" "}
      {languages
        .map(({ name, level }) => `${name} (${level.toLowerCase()})`)
        .join(" · ")}
    </Languages>
  </Section>
);
