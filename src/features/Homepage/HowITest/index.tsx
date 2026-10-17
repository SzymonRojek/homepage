import { SectionLabel } from "../Section";
import { sectionNumber } from "../sections";
import { howITest } from "../howITestData";
import {
  Block,
  Bug,
  Story,
  StoryTitle,
  StoryText,
  Steps,
  StepTitle,
  StepSummary,
  StepPoints,
} from "./styled";

const { story } = howITest;
const [titleStart, titleEnd] = story.title.split(story.highlight);

// Professional evidence, before the side projects, as one block (white in
// the light theme, deep green in the dark one): my story first, as what only I can say (the section's heading is for
// screen readers only), then the method in three steps, each a line and a
// few ticked points to skim.
export const HowITest = () => (
  <Block $band="story" aria-labelledby="how-i-test">
    <SectionLabel id="how-i-test" data-number={sectionNumber("how-i-test")}>
      {howITest.title}
    </SectionLabel>
    <Bug aria-hidden="true" focusable="false" />
    <Story aria-labelledby="how-i-test-story">
      <StoryTitle id="how-i-test-story">
        {titleStart}
        <em>{story.highlight}</em>
        {titleEnd}
      </StoryTitle>
      <StoryText>
        {story.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </StoryText>
    </Story>
    <Steps aria-label="How I test a data migration">
      {howITest.steps.map(({ title, summary, points }) => (
        <li key={title}>
          <StepTitle>{title}</StepTitle>
          <StepSummary>{summary}</StepSummary>
          <StepPoints>
            {points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </StepPoints>
        </li>
      ))}
    </Steps>
  </Block>
);
