import { Section, SectionHeader } from "../Section";
import { education } from "../experienceData";
import {
  Layout,
  Next,
  NextLabel,
  NextTitle,
  NextDetail,
  List,
  Year,
  Title,
  Detail,
} from "./styled";

const next = education.find((item) => item.next);
const done = education.filter((item) => !item.next);

// Last on the page, as on a UK CV: what I'm learning now, large, then the
// courses I've done, newest first.
export const Education = () => (
  <Section aria-labelledby="education">
    <SectionHeader id="education">Still learning</SectionHeader>
    <Layout>
      {next && (
        <Next aria-labelledby="education-next">
          <NextLabel>Next up</NextLabel>
          <NextTitle id="education-next">{next.title}</NextTitle>
          <NextDetail>{next.detail}</NextDetail>
        </Next>
      )}
      <List aria-label="Courses">
        {done.map(({ title, detail, year }) => (
          <li key={title}>
            <Year>{year}</Year>
            <Title>{title}</Title>
            <Detail>{detail}</Detail>
          </li>
        ))}
      </List>
    </Layout>
  </Section>
);
