import { Section, SectionHeader } from "../Section";
import { howITest } from "../howITestData";
import {
  Intro,
  Band,
  StoryTitle,
  Punchline,
  StoryText,
  Steps,
  StepNumber,
  StepTitle,
  StepText,
  WhyItMatters,
} from "./styled";

const { story } = howITest;
const [titleStart, titleEnd] = story.title.split(story.highlight);

// Professional evidence, before the side projects: my story on the green
// band, then how I test a data migration in three steps.
export const HowITest = () => (
  <Section aria-labelledby="how-i-test">
    <SectionHeader id="how-i-test">{howITest.title}</SectionHeader>
    <Intro>{howITest.intro}</Intro>
    <Band aria-labelledby="how-i-test-story">
      <div>
        <StoryTitle id="how-i-test-story">
          {titleStart}
          <em>{story.highlight}</em>
          {titleEnd}
        </StoryTitle>
        <Punchline>{story.punchline}</Punchline>
      </div>
      <StoryText>
        {story.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </StoryText>
    </Band>
    <Steps aria-label="How I test a data migration">
      {howITest.steps.map(({ title, text }, index) => (
        <li key={title}>
          <StepNumber aria-hidden="true">
            {String(index + 1).padStart(2, "0")}
          </StepNumber>
          <StepTitle>{title}</StepTitle>
          <StepText>{text}</StepText>
        </li>
      ))}
    </Steps>
    <WhyItMatters>
      <strong>Why it matters:</strong> {howITest.whyItMatters}
    </WhyItMatters>
  </Section>
);
