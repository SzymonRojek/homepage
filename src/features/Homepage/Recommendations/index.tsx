import {
  headline,
  recommendations,
  recommendationsHeading,
} from "../recommendationsData";
import { BigLineMark, HiddenSectionHeader } from "../Section";
import {
  QuoteBand,
  Pull,
  List,
  Column,
  Item,
  Quote,
  Caption,
  Byline,
  Highlight,
  Watermark,
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
// large and still (the heading is for screen readers only), then each
// recommendation in full with its key words marked and a faint LinkedIn mark
// in its corner, so it's clear where they come from.
export const Recommendations = () => (
  <QuoteBand $band="quote" aria-labelledby="recommendations">
    <HiddenSectionHeader id="recommendations">
      {recommendationsHeading}
    </HiddenSectionHeader>
    <Pull>
      <blockquote>
        <p>
          “…{lead}
          <BigLineMark>{headline.highlight}</BigLineMark>.”
        </p>
      </blockquote>
    </Pull>
    {/* A <ul> can hold only <li>, and the two columns need a wrapper each,
        so the list is built from roles; the columns are invisible to screen
        readers, which hear one list of all the recommendations. */}
    <List role="list" aria-label="Recommendations from LinkedIn">
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
                {/* Decorative: the list's name says LinkedIn for screen
                    readers. Not a link: the originals aren't linked. */}
                <Watermark aria-hidden="true" focusable="false" />
              </Item>
            ),
          )}
        </Column>
      ))}
    </List>
  </QuoteBand>
);
