import { Section, SectionHeader } from "../Section";
import { education, interests, jobs, languages } from "../experienceData";
import { Link } from "../Portfolio/Projects/styled";
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
  EducationList,
  EducationItem,
  EducationTitle,
  School,
  Year,
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
    <Card>
      <Role>Education and professional development</Role>
      <EducationList>
        {education.map(({ title, school, year }) => (
          <EducationItem key={title}>
            <div>
              <EducationTitle>{title}</EducationTitle>
              <School>{school}</School>
            </div>
            {year && <Year>{year}</Year>}
          </EducationItem>
        ))}
      </EducationList>
    </Card>
    <Card>
      <Role>Languages & interests</Role>
      <EducationList aria-label="Languages and interests">
        {languages.map(({ name, level }) => (
          <EducationItem key={name}>
            <EducationTitle>{name}</EducationTitle>
            <Year>{level}</Year>
          </EducationItem>
        ))}
        <EducationItem>
          <div>
            <EducationTitle>Interests</EducationTitle>
            <School>
              {interests.map(({ name, url, linkText }, index) => (
                <span key={name}>
                  {index > 0 && ", "}
                  {name}
                  {url && (
                    <>
                      {" ("}
                      <Link href={url} target="_blank" rel="noreferrer">
                        {linkText ?? url}
                      </Link>
                      {")"}
                    </>
                  )}
                </span>
              ))}
            </School>
          </div>
        </EducationItem>
      </EducationList>
    </Card>
  </Section>
);
