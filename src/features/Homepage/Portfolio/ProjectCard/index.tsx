import { Chip } from "../../Section";
import { repoUrl, type Project } from "../projectsData";
import {
  Card,
  Name,
  Teaser,
  Facts,
  Actions,
  ToggleButton,
  SmallLink,
  Chevron,
  ExternalIcon,
  GitHubIcon,
} from "./styled";

interface ProjectCardProps {
  project: Project;
  expanded: boolean;
  onToggle: () => void;
}

// A short card that only points to the project: the name, one sentence and a
// few facts. The full case study opens below the cards: its button keeps one
// label, and the chevron (with aria-expanded) shows whether it is open. The
// two links leave the site, marked with an arrow and the GitHub mark.
export const ProjectCard = ({
  project: { title, repo, description, demoUrl, teaser, facts },
  expanded,
  onToggle,
}: ProjectCardProps) => (
  <Card $expanded={expanded}>
    <Name>{title}</Name>
    <Teaser>{teaser ?? description}</Teaser>
    {facts && (
      <Facts aria-label={`${title}: key facts`}>
        {facts.map((fact) => (
          <Chip key={fact}>{fact}</Chip>
        ))}
      </Facts>
    )}
    <Actions>
      <ToggleButton
        type="button"
        aria-expanded={expanded}
        aria-controls={expanded ? `case-study-${repo}` : undefined}
        onClick={onToggle}
      >
        Case study
        <Chevron aria-hidden="true" $expanded={expanded} />
      </ToggleButton>
      {demoUrl && (
        <SmallLink href={demoUrl} target="_blank" rel="noreferrer">
          <ExternalIcon aria-hidden="true" />
          Demo
        </SmallLink>
      )}
      <SmallLink href={repoUrl(repo)} target="_blank" rel="noreferrer">
        <GitHubIcon aria-hidden="true" />
        Code
      </SmallLink>
    </Actions>
  </Card>
);
