import { Link } from "../Projects/styled";
import type { Pipeline as PipelineData } from "../projectsData";
import {
  Terminal,
  TerminalBar,
  Dots,
  FileName,
  Checks,
  Result,
  Footer,
} from "./styled";

// A CI run drawn as a terminal: the checks every change must pass.
export const Pipeline = ({
  pipeline: { name, checks, result, badgeURL, workflowURL, testsURL },
}: {
  pipeline: PipelineData;
}) => (
  <div>
    <Terminal>
      <TerminalBar aria-hidden="true">
        <Dots>
          <span />
          <span />
          <span />
        </Dots>
        <FileName>{name}</FileName>
      </TerminalBar>
      <Checks aria-label="CI checks">
        {checks.map((check) => (
          <li key={check}>{check}</li>
        ))}
      </Checks>
      <Result>{result}</Result>
    </Terminal>
    <Footer>
      <a href={workflowURL} target="_blank" rel="noreferrer">
        <img src={badgeURL} alt="CI status" height={20} />
      </a>
      <Link href={testsURL} target="_blank" rel="noreferrer">
        See the end-to-end tests
      </Link>
    </Footer>
  </div>
);
