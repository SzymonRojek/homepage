import { FlowDiagram } from "../FlowDiagram";
import { Pipeline } from "../Pipeline";
import { Story } from "../Story";
import { type CaseStudy as CaseStudyData, type Lens } from "../projectsData";
import {
  Article,
  Kicker,
  Title,
  Summary,
  Lenses,
  LensCard,
  LensLabel,
  LensTitle,
  LensHeadline,
  LensPoints,
  LensStack,
  LensPipeline,
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
  caseStudy: CaseStudyData;
  // Closed, it stays in the page but hidden.
  open?: boolean;
}

const lensTitles = {
  developer: { label: "Developer view", title: "How I built it" },
  tester: { label: "Automation view", title: "How I proved it works" },
};

// Each column has its own id (#case-study-<repo>-tester / -developer), so a
// portrait half or a CV link can open the case study at that side.
const LensColumn = ({
  id,
  side,
  lens: { headline, points, stack, pipeline },
}: {
  id: string;
  side: "developer" | "tester";
  lens: Lens;
}) => (
  <LensCard
    $side={side}
    id={`${id}-${side}`}
    tabIndex={-1}
    aria-labelledby={`${id}-${side}-title`}
  >
    <LensLabel $side={side}>{lensTitles[side].label}</LensLabel>
    <LensTitle id={`${id}-${side}-title`}>{lensTitles[side].title}</LensTitle>
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
  caseStudy,
  open = true,
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
    <Article id={id} aria-labelledby={`${id}-title`} tabIndex={-1} $open={open}>
      <Kicker>Case study</Kicker>
      <Title id={`${id}-title`}>{title}</Title>
      {/* With a story, its brief says the same thing in plainer words. */}
      {!story && <Summary>{summary}</Summary>}

      {story && <Story story={story} />}

      {/* Tester first: testing is the profession, coding is self-taught. */}
      <Lenses>
        <LensColumn id={id} side="tester" lens={tester} />
        <LensColumn id={id} side="developer" lens={developer} />
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
