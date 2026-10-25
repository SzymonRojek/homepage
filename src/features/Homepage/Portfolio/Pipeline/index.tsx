import { withNewTab } from "../../../../common/newTab";
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
// Each link's words live once: in the link itself (or the badge's alt text)
// and in the aria-label that adds the new-tab warning.
const badgeLabel = "CI status";
const testsLabel = "See the end-to-end tests";

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
      <a
        href={workflowURL}
        aria-label={withNewTab(badgeLabel)}
        target="_blank"
        rel="noreferrer"
      >
        <img src={badgeURL} alt={badgeLabel} height={20} loading="lazy" />
      </a>
      <Link
        href={testsURL}
        aria-label={withNewTab(testsLabel)}
        target="_blank"
        rel="noreferrer"
      >
        {testsLabel}
      </Link>
    </Footer>
  </div>
);
