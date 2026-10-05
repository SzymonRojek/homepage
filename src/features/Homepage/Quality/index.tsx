import { Section, SectionHeader } from "../Section";
import { Link } from "../Portfolio/Projects/styled";
import { quality } from "../qualityData";
import { Card, Intro, Checks, Footer } from "./styled";

export const Quality = () => (
  <Section aria-labelledby="quality">
    <SectionHeader id="quality">How this site is tested</SectionHeader>
    <Card>
      <Intro>{quality.intro}</Intro>
      <Checks>
        {quality.checks.map((check) => (
          <li key={check}>{check}</li>
        ))}
      </Checks>
      <Footer>
        <a href={quality.workflowURL} target="_blank" rel="noreferrer">
          <img src={quality.badgeURL} alt="CI status" height={20} />
        </a>
        <Link href={quality.testsURL} target="_blank" rel="noreferrer">
          See the end-to-end tests
        </Link>
        <Link href={quality.caseStudyAnchor}>
          Read how and why it's built this way
        </Link>
      </Footer>
    </Card>
  </Section>
);
