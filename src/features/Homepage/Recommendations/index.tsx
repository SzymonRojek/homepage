import {
  recommendations,
  recommendationsHeading,
  recommendationsTitle,
} from "../recommendationsData";
import {
  BandSection,
  BigLine,
  BigLineMark,
  BigLineRow,
  SectionLabel,
} from "../Section";
import { sectionNumber } from "../sections";
import { balanceColumns } from "./balanceColumns";
import {
  List,
  Column,
  Item,
  Quote,
  Caption,
  RoleLine,
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

// "Oct 2026" shortened for the card: "Oct ’26".
const toShortDate = (date: string) => {
  const [month, year] = date.split(" ");
  return `${month} ’${year.slice(-2)}`;
};

const [titleLead, titleLine] = recommendationsTitle.lines;
const [titleStart, titleEnd] = titleLine.split(recommendationsTitle.highlight);

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

// Two columns of about the same height, each card keeping its place in the
// list (newest first) for the one-column layout.
const columns = balanceColumns(recommendations);

// What people I worked with wrote on LinkedIn, word for word: one big line
// saying who they are, then each recommendation in full with its key words
// marked and a faint LinkedIn mark in its corner, so it's clear where they
// come from.
export const Recommendations = () => (
  // The last section, on its own band (white; one step up in the dark
  // theme), after Skills on the page's colour; the footer meets it.
  <BandSection $band="quote" aria-labelledby="recommendations">
    <SectionLabel
      id="recommendations"
      data-number={sectionNumber("recommendations")}
    >
      {recommendationsHeading}
    </SectionLabel>
    {/* The space keeps the lines apart for screen readers and in the page's
        text, where the line break doesn't show. */}
    <BigLine>
      <BigLineRow>{titleLead}</BigLineRow>{" "}
      <BigLineRow>
        {titleStart}
        <BigLineMark>{recommendationsTitle.highlight}</BigLineMark>
        {titleEnd}
      </BigLineRow>
    </BigLine>
    {/* A <ul> can hold only <li>, and the two columns need a wrapper each,
        so the list is built from roles; the columns are invisible to screen
        readers, which hear one list of all the recommendations. */}
    <List role="list" aria-label="Recommendations from LinkedIn">
      {columns.map((column, side) => (
        <Column key={side} role="none">
          {column.map(
            ({ item: { quote, highlight, name, role, date }, order }) => (
              <Item key={name} role="listitem" $order={order}>
                <Quote>
                  {/* The byline first, so screen readers also hear who
                      wrote it before what they wrote. */}
                  <Caption>
                    <strong>{name}</strong>
                    <RoleLine>
                      <span>{role}</span>
                      <time dateTime={toDateTime(date)}>
                        {toShortDate(date)}
                      </time>
                    </RoleLine>
                  </Caption>
                  <blockquote>
                    {quote.split("\n\n").map((paragraph) => (
                      <p key={paragraph}>
                        <Marked text={paragraph} highlight={highlight} />
                      </p>
                    ))}
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
  </BandSection>
);
