import { headline, recommendations } from "../recommendationsData";
import {
  QuoteBand,
  HiddenHeading,
  Pull,
  Mark,
  List,
  Column,
  Item,
  Quote,
  Caption,
  Byline,
  Highlight,
} from "./styled";

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

// "Oct 2026" as a machine-readable date for <time>: "2026-10".
const toDateTime = (date: string) => {
  const [month, year] = date.split(" ");
  return `${year}-${String(months.indexOf(month) + 1).padStart(2, "0")}`;
};

const [lead] = headline.text.split(headline.highlight);

// The quote with its key words marked; the words themselves don't change.
const Marked = ({ text, highlight }: { text: string; highlight: string }) => {
  const [before, ...rest] = text.split(highlight);

  return rest.length ? (
    <>
      {before}
      <Highlight>{highlight}</Highlight>
      {rest.join(highlight)}
    </>
  ) : (
    text
  );
};

// Two columns: the first, third… recommendation on the left, the second,
// fourth… on the right, each keeping its place in the list (newest first)
// for the one-column layout.
const columns = [0, 1].map((side) =>
  recommendations
    .map((recommendation, order) => ({ recommendation, order }))
    .filter(({ order }) => order % 2 === side),
);

// What people I worked with wrote on LinkedIn, word for word: Jim's verdict
// large and still, then each recommendation in full with its key words
// marked.
export const Recommendations = () => (
  <QuoteBand $band="quote" aria-labelledby="recommendations">
    {/* The big quote is the visible heading; this one names the section for
        screen readers and search engines. */}
    <HiddenHeading id="recommendations">What colleagues say</HiddenHeading>
    <Pull>
      <blockquote>
        <p>
          “…{lead}
          <Mark>{headline.highlight}</Mark>.”
        </p>
      </blockquote>
    </Pull>
    {/* A <ul> can hold only <li>, and the two columns need a wrapper each,
        so the list is built from roles; the columns are invisible to screen
        readers, which hear one list of all the recommendations. */}
    <List role="list" aria-label="Recommendations">
      {columns.map((column, side) => (
        <Column key={side} role="none">
          {column.map(
            ({
              recommendation: { quote, highlight, name, role, date },
              order,
            }) => (
              <Item key={name} role="listitem" $order={order}>
                <Quote>
                  {/* The byline first, so screen readers also hear who
                      wrote it before what they wrote. */}
                  <Caption>
                    <Byline>
                      <strong>{name}</strong>
                      <time dateTime={toDateTime(date)}>{date}</time>
                    </Byline>
                    {role}
                  </Caption>
                  <blockquote>
                    <p>
                      <Marked text={quote} highlight={highlight} />
                    </p>
                  </blockquote>
                </Quote>
              </Item>
            ),
          )}
        </Column>
      ))}
    </List>
  </QuoteBand>
);
