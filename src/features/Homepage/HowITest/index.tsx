import { Section, SectionHeader, SectionIntro } from "../Section";
import { Steps, Step, StepNumber, StepTitle } from "../Portfolio/Story/styled";
import { howITest } from "../howITestData";
import { Highlight, StepText, WhyItMatters } from "./styled";

// Professional evidence, before the side projects: how I test a data
// migration, as a numbered timeline like the case-study stories.
export const HowITest = () => (
  <Section aria-labelledby="how-i-test">
    <SectionHeader id="how-i-test">{howITest.title}</SectionHeader>
    <SectionIntro>{howITest.intro}</SectionIntro>
    <Highlight>{howITest.highlight}</Highlight>
    <Steps aria-label="How I test a data migration">
      {howITest.steps.map(({ title, text }, index) => (
        <Step key={title}>
          <StepNumber aria-hidden="true">{index + 1}</StepNumber>
          <StepTitle as="h3">{title}</StepTitle>
          <StepText>{text}</StepText>
        </Step>
      ))}
    </Steps>
    <WhyItMatters>
      <strong>Why it matters:</strong> {howITest.whyItMatters}
    </WhyItMatters>
  </Section>
);
