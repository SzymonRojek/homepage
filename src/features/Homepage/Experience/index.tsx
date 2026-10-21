import { BandSection, SectionLabel } from "../Section";
import { sectionNumber } from "../sections";
import { jobs } from "../experienceData";
import { Job, Meta, Period, Company, Details, Role, Points } from "./styled";

// The job, right after "How I test": only what that section doesn't
// already say.
export const Experience = () => (
  // On a white band (one step up in the dark theme), after Projects on the
  // page's colour.
  <BandSection $band="card" aria-labelledby="experience">
    <SectionLabel id="experience" data-number={sectionNumber("experience")}>
      Experience
    </SectionLabel>
    {jobs.map(({ role, company, details, period, points }) => (
      <Job key={`${role}-${company}`} aria-label={`${role}, ${company}`}>
        <Meta>
          <Period>{period}</Period>
          <Company>{company}</Company>
          <Details>{details}</Details>
        </Meta>
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
  </BandSection>
);
