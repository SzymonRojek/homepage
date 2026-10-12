import { Section, SectionHeader, Card } from "../Section";
import { education } from "../experienceData";
import {
  EducationList,
  EducationItem,
  EducationTitle,
  School,
  Year,
} from "./styled";

// Last on the page, as on a UK CV for someone with work experience.
export const Education = () => (
  <Section aria-labelledby="education">
    <SectionHeader id="education">Education & certifications</SectionHeader>
    <Card>
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
  </Section>
);
