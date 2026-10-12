import type { Story as StoryData } from "../projectsData";
import {
  Steps,
  Step,
  StepNumber,
  StepTitle,
  Brief,
  Comparison,
  List,
  ValueList,
  NextStep,
} from "./styled";

// How a project solved its problem: brief, research, solution and value.
// The research is a two-column table that stacks into cards on phones.
export const Story = ({
  story: { brief, researchAgainst, research, solution, value, nextStep },
}: {
  story: StoryData;
}) => (
  <Steps aria-label="How I solved it">
    <Step>
      <StepNumber aria-hidden="true">1</StepNumber>
      <StepTitle>Brief</StepTitle>
      <Brief>{brief}</Brief>
    </Step>

    <Step>
      <StepNumber aria-hidden="true">2</StepNumber>
      <StepTitle>Research</StepTitle>
      <Comparison>
        <thead>
          <tr>
            <th scope="col">{researchAgainst}</th>
            <th scope="col">My design</th>
          </tr>
        </thead>
        <tbody>
          {research.map(({ market, mine }) => (
            <tr key={market}>
              <td data-label={researchAgainst}>{market}</td>
              <td data-label="My design">{mine}</td>
            </tr>
          ))}
        </tbody>
      </Comparison>
    </Step>

    <Step>
      <StepNumber aria-hidden="true">3</StepNumber>
      <StepTitle>Solution</StepTitle>
      <List>
        {solution.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </List>
    </Step>

    <Step>
      <StepNumber aria-hidden="true">4</StepNumber>
      <StepTitle>Value</StepTitle>
      <ValueList>
        {value.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ValueList>
      {nextStep && <NextStep>{nextStep}</NextStep>}
    </Step>
  </Steps>
);
