import { useState } from "react";
import { Section, SectionHeader, SectionIntro, Card } from "../Section";
import { spotTheBug, type BugLevel } from "../spotTheBugData";
import {
  Levels,
  LevelButton,
  Table,
  Pick,
  Checks,
  Footer,
  Feedback,
  Reveal,
  Next,
  type PickState,
} from "./styled";

interface RecordProps {
  level: BugLevel;
  onNext?: () => void;
}

// One level: a migrated record where every value may have changed its
// format and one changed its meaning. Nothing is timed; "Show me" gives the
// answer.
const Record = ({ level, onNext }: RecordProps) => {
  const [picked, setPicked] = useState<string[]>([]);
  const [revealed, setRevealed] = useState(false);
  const bug = level.fields.find(({ fine }) => !fine)?.field ?? "";
  const last = picked[picked.length - 1];
  const found = revealed || picked.includes(bug);

  const pick = (field: string) =>
    setPicked((current) =>
      current.includes(field) ? current : [...current, field],
    );

  const stateOf = (field: string): PickState => {
    if (field === bug) {
      return found ? "bug" : "open";
    }
    return picked.includes(field) ? "fine" : "open";
  };

  const message = found ? (
    <>
      <strong>{revealed ? "Here it is." : "Good catch."}</strong> {level.found}{" "}
      That's my day job.
    </>
  ) : (
    (level.fields.find(({ field }) => field === last)?.fine ?? "")
  );

  return (
    <>
      <Table>
        <caption>{spotTheBug.caption}</caption>
        <thead>
          <tr>
            <th scope="col">Field</th>
            <th scope="col">Old system</th>
            <th scope="col">New system</th>
          </tr>
        </thead>
        <tbody>
          {level.fields.map(({ field, before, after }) => (
            <tr key={field}>
              <th scope="row">{field}</th>
              <td>{before}</td>
              <td>
                <Pick
                  type="button"
                  $state={stateOf(field)}
                  aria-label={`${field} in the new system: ${after}`}
                  onClick={() => pick(field)}
                >
                  {after}
                </Pick>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Checks aria-label="Quick checks that pass">
        {level.checks.map((check) => (
          <li key={check}>{check}</li>
        ))}
      </Checks>
      <Footer>
        <Feedback role="status">{message}</Feedback>
        {!found && (
          <Reveal type="button" onClick={() => setRevealed(true)}>
            Show me
          </Reveal>
        )}
        {found && onNext && (
          <Next type="button" onClick={onNext}>
            Next level →
          </Next>
        )}
      </Footer>
    </>
  );
};

// A ten-second taste of my job, in three levels the visitor chooses.
export const SpotTheBug = () => {
  const [current, setCurrent] = useState(0);
  const { levels } = spotTheBug;
  const hasNext = current < levels.length - 1;

  return (
    <Section aria-labelledby="spot-the-bug">
      <SectionHeader id="spot-the-bug">{spotTheBug.title}</SectionHeader>
      <SectionIntro>{spotTheBug.intro}</SectionIntro>
      <Card>
        <Levels role="group" aria-label="Difficulty">
          {levels.map(({ name }, index) => (
            <LevelButton
              key={name}
              type="button"
              aria-pressed={index === current}
              onClick={() => setCurrent(index)}
            >
              Level {index + 1} · {name}
            </LevelButton>
          ))}
        </Levels>
        {/* A new level starts fresh: the key resets the picks. */}
        <Record
          key={current}
          level={levels[current]}
          onNext={hasNext ? () => setCurrent(current + 1) : undefined}
        />
      </Card>
    </Section>
  );
};
