import { Section, SectionHeader } from "../Section";
import { education, jobs } from "../experienceData";
import {
  Card,
  JobHeader,
  Role,
  Company,
  Period,
  Groups,
  GroupTitle,
  Points,
  Education,
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
          <Period>{period}</Period>
        </JobHeader>
        <Groups>
          {groups.map(({ title, points }) => (
            <div key={title}>
              <GroupTitle>{title}</GroupTitle>
              <Points>
                {points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </Points>
            </div>
          ))}
        </Groups>
      </Card>
    ))}
    <Card>
      <Role>Education and professional development</Role>
      <Education>
        {education.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </Education>
    </Card>
  </Section>
);
