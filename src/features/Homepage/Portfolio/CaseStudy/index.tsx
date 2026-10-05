import { FlowDiagram } from "../FlowDiagram";
import { Link } from "../Projects/styled";
import { repoUrl, type CaseStudy as CaseStudyData } from "../projectsData";
import {
  Article,
  Kicker,
  Title,
  Meta,
  Summary,
  Impact,
  Stat,
  StatValue,
  StatLabel,
  Links,
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

interface CaseStudyProps {
  title: string;
  repo: string;
  language: string;
  demoUrl?: string;
  caseStudy: CaseStudyData;
}

export const CaseStudy = ({
  title,
  repo,
  language,
  demoUrl,
  caseStudy,
}: CaseStudyProps) => {
  const id = `case-study-${repo}`;
  const {
    summary,
    impact,
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
      <Summary>{summary}</Summary>

      <Impact aria-label="Impact">
        {impact.map(({ value, label }) => (
          <Stat key={label}>
            <StatLabel>{label}</StatLabel>
            <StatValue>{value}</StatValue>
          </Stat>
        ))}
      </Impact>

      <Links>
        <Link href={repoUrl(repo)} target="_blank" rel="noreferrer">
          GitHub Repository
        </Link>
        {demoUrl && (
          <Link href={demoUrl} target="_blank" rel="noreferrer">
            Live demo
          </Link>
        )}
      </Links>

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
