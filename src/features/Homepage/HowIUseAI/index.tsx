import { sectionNumber } from "../sections";
import { howIUseAI } from "../howIUseAIData";
import {
  Block,
  Label,
  Heading,
  Columns,
  ColumnName,
  AgentCell,
  MeCell,
  MeText,
  Caption,
} from "./styled";

const { columns } = howIUseAI;
const [headingStart, headingEnd] = howIUseAI.heading.split(
  howIUseAI.headingHighlight,
);

// How I work with AI: the first section, before the testing method and the
// side projects. The line that holds it together, then two columns, what the
// tool does against what I do, so the division of labour is shown instead of
// claimed. A real table, so screen readers pair each cell with its column.
export const HowIUseAI = () => (
  <Block $band="ai" aria-labelledby="how-i-use-ai">
    <Label id="how-i-use-ai" data-number={sectionNumber("how-i-use-ai")}>
      {howIUseAI.title}
    </Label>
    <Heading as="p">
      {headingStart}
      <em>{howIUseAI.headingHighlight}</em>
      {headingEnd}
    </Heading>
    <Columns role="table">
      <Caption>What the agent does, and what I do</Caption>
      <thead>
        <tr role="row">
          <ColumnName role="columnheader" scope="col">
            {columns.agent}
          </ColumnName>
          <ColumnName role="columnheader" scope="col">
            {columns.me}
          </ColumnName>
        </tr>
      </thead>
      <tbody>
        {howIUseAI.rows.map(({ agent, me }) => (
          <tr key={me} role="row">
            <AgentCell role="cell" data-column={columns.agent}>
              {agent}
            </AgentCell>
            <MeCell role="cell" data-column={columns.me}>
              <MeText>{me}</MeText>
            </MeCell>
          </tr>
        ))}
      </tbody>
    </Columns>
  </Block>
);
