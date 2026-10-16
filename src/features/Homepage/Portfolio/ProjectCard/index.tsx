import { repoUrl, type Project } from "../projectsData";
import {
  Card,
  Tag,
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

// A short card that only points to the project: what kind it is, the name,
// one sentence and a few facts. The featured project's card is large and
// deep green, the other one white beside it. The full case study opens below
// the cards: its button keeps one label, and the chevron (with aria-expanded)
// shows whether it is open. The two links leave the site, marked with an
// arrow and the GitHub mark.
export const ProjectCard = ({
  project: { title, repo, description, demoUrl, teaser, facts, tag, featured },
  expanded,
  onToggle,
}: ProjectCardProps) => {
  const $featured = featured === true;

  return (
    <Card $expanded={expanded} $featured={$featured}>
      {tag && <Tag $featured={$featured}>{tag}</Tag>}
      <Name $featured={$featured}>{title}</Name>
      <Teaser $featured={$featured}>{teaser ?? description}</Teaser>
      {facts && (
        <Facts aria-label={`${title}: key facts`} $featured={$featured}>
          {facts.map((fact) => (
            <li key={fact}>{fact}</li>
          ))}
        </Facts>
      )}
      <Actions>
        <ToggleButton
          type="button"
          aria-expanded={expanded}
          aria-controls={expanded ? `case-study-${repo}` : undefined}
          onClick={onToggle}
          $featured={$featured}
        >
          Case study
          <Chevron aria-hidden="true" $expanded={expanded} />
        </ToggleButton>
        {demoUrl && (
          <SmallLink
            href={demoUrl}
            target="_blank"
            rel="noreferrer"
            $featured={$featured}
          >
            <ExternalIcon aria-hidden="true" />
            Demo
          </SmallLink>
        )}
        <SmallLink
          href={repoUrl(repo)}
          target="_blank"
          rel="noreferrer"
          $featured={$featured}
        >
          <GitHubIcon aria-hidden="true" />
          Code
        </SmallLink>
      </Actions>
    </Card>
  );
};
