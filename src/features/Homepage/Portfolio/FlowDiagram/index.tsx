import { useId } from "react";
import { Wrapper, Title, Steps, Step } from "./styled";

interface FlowDiagramProps {
  title: string;
  steps: string[];
}

// A left-to-right flow drawn from data: an ordered list, so screen readers get
// the steps in order and the diagram can be edited without an image tool.
export const FlowDiagram = ({ title, steps }: FlowDiagramProps) => {
  const titleId = useId();

  return (
    <Wrapper>
      <Title id={titleId}>{title}</Title>
      <Steps aria-labelledby={titleId}>
        {steps.map((step) => (
          <Step key={step}>{step}</Step>
        ))}
      </Steps>
    </Wrapper>
  );
};
