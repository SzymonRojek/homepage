import { Section, SectionHeader } from "../Section";
import { jobs } from "../experienceData";
import {
  Card,
  JobHeader,
  Role,
  Company,
  Period,
  Groups,
  Group,
  GroupTitle,
  Points,
} from "./styled";

export const Experience = () => (
  <Section aria-labelledby="experience">
    <SectionHeader id="experience">Experience</SectionHeader>
    {jobs.map(({ role, company, details, period, groups }) => (
      <Card key={`${role}-${company}`}>
        <JobHeader>
          <div>
            <Role>{role}</Role>
            <Company>
              {company} · {details}
            </Company>
          </div>
          <Period $current={period.endsWith("present")}>{period}</Period>
        </JobHeader>
        <Groups>
          {groups.map(({ title, points }) => (
            <Group key={title}>
              <GroupTitle>{title}</GroupTitle>
              <Points>
                {points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </Points>
            </Group>
          ))}
        </Groups>
      </Card>
    ))}
  </Section>
);
