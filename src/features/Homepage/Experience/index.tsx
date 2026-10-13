import { Section, SectionHeader } from "../Section";
import { jobs } from "../experienceData";
import { Job, Period, Company, Details, Role, Points } from "./styled";

// The job, right after "How I test at work": only what that section doesn't
// already say.
export const Experience = () => (
  <Section aria-labelledby="experience">
    <SectionHeader id="experience">Experience</SectionHeader>
    {jobs.map(({ role, company, details, period, points }) => (
      <Job key={`${role}-${company}`} aria-label={`${role}, ${company}`}>
        <div>
          <Period>{period}</Period>
          <Company>{company}</Company>
          <Details>{details}</Details>
        </div>
        <div>
          <Role>{role}</Role>
          <Points>
            {points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </Points>
        </div>
      </Job>
    ))}
  </Section>
);
