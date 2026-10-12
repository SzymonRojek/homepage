import { FlowDiagram } from "../FlowDiagram";
import { Pipeline } from "../Pipeline";
import { Story } from "../Story";
import type { ProjectView } from "../LensSwitch";
import {
  repoUrl,
  type CaseStudy as CaseStudyData,
  type Lens,
} from "../projectsData";
import {
  Article,
  Kicker,
  Title,
  Meta,
  Summary,
  Lenses,
  LensCard,
  LensLabel,
  LensTitle,
  LensHeadline,
  LensPoints,
  LensStack,
  LensPipeline,
  Links,
  PrimaryLink,
  SecondaryLink,
  Details,
  Toggle,
  Part,
  PartTitle,
  Text,
  BulletList,
  TableWrapper,
  Table,
  QualityList,
} from "./styled";
import { Chip } from "../../Section";

interface CaseStudyProps {
  title: string;
  repo: string;
  language: string;
  demoUrl?: string;
  caseStudy: CaseStudyData;
  view?: ProjectView;
}

const lensTitles = {
  developer: { label: "Developer view", title: "How I built it" },
  tester: { label: "Automation view", title: "How I proved it works" },
};

const LensColumn = ({
  side,
  lens: { headline, points, stack, pipeline },
}: {
  side: "developer" | "tester";
  lens: Lens;
}) => (
  <LensCard $side={side}>
    <LensLabel $side={side}>{lensTitles[side].label}</LensLabel>
    <LensTitle>{lensTitles[side].title}</LensTitle>
    <LensHeadline>{headline}</LensHeadline>
    {points.length > 0 && (
      <LensPoints $side={side}>
        {points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </LensPoints>
    )}
    {pipeline && (
      <LensPipeline>
        <Pipeline pipeline={pipeline} />
      </LensPipeline>
    )}
    <LensStack aria-label={`${lensTitles[side].label} stack`}>
      {stack.map((item) => (
        <Chip key={item}>{item}</Chip>
      ))}
    </LensStack>
  </LensCard>
);

export const CaseStudy = ({
  title,
  repo,
  language,
  demoUrl,
  caseStudy,
  view = "both",
}: CaseStudyProps) => {
  const id = `case-study-${repo}`;
  const {
    summary,
    story,
    developer,
    tester,
    problem,
    constraints,
    diagrams,
    decisions,
    quality,
    lessons,
  } = caseStudy;

  return (
    <Article id={id} aria-labelledby={`${id}-title`}>
      <Kicker>Case study</Kicker>
      <Title id={`${id}-title`}>{title}</Title>
      <Meta>
        {repo} · {language}
      </Meta>
      <Links>
        {demoUrl && (
          <PrimaryLink href={demoUrl} target="_blank" rel="noreferrer">
            Live demo
          </PrimaryLink>
        )}
        <SecondaryLink href={repoUrl(repo)} target="_blank" rel="noreferrer">
          GitHub Repository
        </SecondaryLink>
      </Links>
      {/* With a story, its brief says the same thing in plainer words. */}
      {!story && <Summary>{summary}</Summary>}

      {story && <Story story={story} />}

      <Lenses $single={view !== "both"}>
        {view !== "tester" && <LensColumn side="developer" lens={developer} />}
        {view !== "developer" && <LensColumn side="tester" lens={tester} />}
      </Lenses>

      <Details>
        <Toggle>Read the full case study</Toggle>

        <Part>
          <PartTitle>Problem</PartTitle>
          {problem.map((paragraph) => (
            <Text key={paragraph}>{paragraph}</Text>
          ))}
        </Part>

        <Part>
          <PartTitle>Constraints</PartTitle>
          <BulletList>
            {constraints.map((constraint) => (
              <li key={constraint}>{constraint}</li>
            ))}
          </BulletList>
        </Part>

        <Part>
          <PartTitle>Architecture</PartTitle>
          {diagrams.map(({ title: diagramTitle, steps }) => (
            <FlowDiagram
              key={diagramTitle}
              title={diagramTitle}
              steps={steps}
            />
          ))}
        </Part>

        <Part>
          <PartTitle>Key decisions and trade-offs</PartTitle>
          <TableWrapper
            tabIndex={0}
            role="region"
            aria-label="Key decisions and trade-offs"
          >
            <Table>
              <thead>
                <tr>
                  <th scope="col">Decision</th>
                  <th scope="col">Why</th>
                  <th scope="col">Trade-off</th>
                </tr>
              </thead>
              <tbody>
                {decisions.map(({ decision, why, tradeOff }) => (
                  <tr key={decision}>
                    <th scope="row">{decision}</th>
                    <td data-label="Why">{why}</td>
                    <td data-label="Trade-off">{tradeOff}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </TableWrapper>
        </Part>

        <Part>
          <PartTitle>
            Testing, performance, accessibility and security
          </PartTitle>
          <QualityList>
            {quality.map(({ area, text }) => (
              <div key={area}>
                <dt>{area}</dt>
                <dd>{text}</dd>
              </div>
            ))}
          </QualityList>
        </Part>

        <Part>
          <PartTitle>Lessons learned</PartTitle>
          <BulletList>
            {lessons.map((lesson) => (
              <li key={lesson}>{lesson}</li>
            ))}
          </BulletList>
        </Part>
      </Details>
    </Article>
  );
};
