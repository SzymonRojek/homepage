import { SectionLabel } from "../Section";
import { sectionNumber } from "../sections";
import { howITest } from "../howITestData";
import {
  Block,
  Bug,
  Story,
  StoryTitle,
  Punchline,
  StoryText,
  Steps,
  StepNumber,
  StepTitle,
  StepText,
} from "./styled";

const { story } = howITest;
const [titleStart, titleEnd] = story.title.split(story.highlight);

// Professional evidence, before the side projects, as one block on the deep
// green: my story first, as what only I can say (the section's heading is for
// screen readers only), then the method in three steps.
export const HowITest = () => (
  <Block $band="brand" aria-labelledby="how-i-test">
    <SectionLabel
      id="how-i-test"
      data-number={sectionNumber("how-i-test")}
      $onBrand
    >
      {howITest.title}
    </SectionLabel>
    <Bug aria-hidden="true" focusable="false" />
    <Story aria-labelledby="how-i-test-story">
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
    </Story>
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
  </Block>
);
