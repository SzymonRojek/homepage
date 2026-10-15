import { headline, recommendations } from "../recommendationsData";
import {
  QuoteBand,
  HiddenHeading,
  Pull,
  Mark,
  List,
  Quote,
  Caption,
} from "./styled";

const author = recommendations.find(({ name }) => name === headline.from);
const [lead] = headline.text.split(headline.highlight);

// What people I worked with wrote on LinkedIn, word for word: one sentence
// large, then the full recommendations as plain text.
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
      <figcaption>
        <strong>{headline.from}</strong>
        {author && `, ${author.role}`}
      </figcaption>
    </Pull>
    <List aria-label="Recommendations">
      {recommendations.map(({ quote, name, role, relation, date }) => (
        <li key={name}>
          <Quote>
            <blockquote>
              <p>{quote}</p>
            </blockquote>
            <Caption>
              <strong>{name}</strong>
              {role}, {relation} · {date}
            </Caption>
          </Quote>
        </li>
      ))}
    </List>
  </QuoteBand>
);
