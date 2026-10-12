import { Section, SectionHeader } from "../Section";
import { profile } from "../profile";
import { recommendations } from "../recommendationsData";
import { List, Quote, Caption, Source } from "./styled";

// What people I worked with wrote on LinkedIn, word for word. The link lets
// a recruiter check the originals.
export const Recommendations = () => (
  <Section aria-labelledby="recommendations">
    <SectionHeader id="recommendations">What colleagues say</SectionHeader>
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
    <Source>
      <a
        href={`${profile.linkedinUrl}details/recommendations/`}
        target="_blank"
        rel="noreferrer"
      >
        Read them on LinkedIn
      </a>
    </Source>
  </Section>
);
