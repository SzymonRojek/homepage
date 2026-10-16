import { repoUrl, type Project } from "../projectsData";
import { Gates } from "../Gates";
import { Stats } from "../Stats";
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
// one sentence and a few facts (or numbers, or the CI gates it passes). The featured project's card is large and
// deep green, the other one white beside it. The full case study opens below
// the cards: its button keeps one label, and the chevron (with aria-expanded)
// shows whether it is open. The two links leave the site, marked with an
// arrow and the GitHub mark.
export const ProjectCard = ({
  project: {
    title,
    repo,
    description,
    demoUrl,
    teaser,
    cardTitle,
    facts,
    gates,
    stats,
    tag,
    featured,
  },
  expanded,
  onToggle,
}: ProjectCardProps) => {
  const $featured = featured === true;
  // A card with its own heading says it there; under the project's name the
  // sentence falls back to the description.
  const sentence = cardTitle ? teaser : (teaser ?? description);

  return (
    <Card $expanded={expanded} $featured={$featured}>
      {tag && <Tag $featured={$featured}>{tag}</Tag>}
      <Name $featured={$featured}>{cardTitle ?? title}</Name>
      {sentence && <Teaser $featured={$featured}>{sentence}</Teaser>}
      {gates && <Gates title={title} gates={gates} />}
      {stats && <Stats title={title} stats={stats} featured={$featured} />}
      {!gates && !stats && facts && (
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
