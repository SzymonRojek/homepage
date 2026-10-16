import { Section, SectionLabel } from "../Section";
import { sectionNumber } from "../sections";
import {
  automationSkills,
  languages,
  programmingSkills,
  testingSkills,
  tools,
} from "../skillsData";
import { education } from "../experienceData";
import {
  Grid,
  Group,
  LearningGroup,
  GroupTitle,
  SkillList,
  Skill,
  Course,
  NextTag,
  Tools,
  Languages,
} from "./styled";

const groups = [
  { accent: "qa", title: "Testing & data", skills: testingSkills },
  { accent: "automation", title: "Test automation", skills: automationSkills },
  { accent: "dev", title: "Programming", skills: programmingSkills },
] as const;

// What I can do, in three short lists, and what I'm learning, as a fourth on
// a soft card: the course I'm preparing for first, tagged "Next", then the
// ones I've done, newest first. The page's last section, as on a UK CV.
export const Skills = () => (
  // On the page's colour, between the white Experience and References bands.
  <Section aria-labelledby="skills">
    <SectionLabel id="skills" data-number={sectionNumber("skills")}>
      Skills &amp; learning
    </SectionLabel>
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
      <LearningGroup>
        <GroupTitle $accent="learning">Learning</GroupTitle>
        <SkillList aria-label="Courses and certifications">
          {education.map(({ title, detail, year, next }) => (
            <Skill key={title}>
              {title}
              {next && <NextTag>Next</NextTag>}
              <Course>{next ? detail : `${year} · ${detail}`}</Course>
            </Skill>
          ))}
        </SkillList>
      </LearningGroup>
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
