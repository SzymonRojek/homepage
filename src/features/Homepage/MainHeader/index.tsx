import szymonRojekProfile from "./szymonRojekProfile.jpg";
import { profile } from "../profile";
import { SplitPortrait } from "./SplitPortrait";
import {
  Wrapper,
  Band,
  BandInner,
  Details,
  NameAndTitle,
  Headline,
  Highlight,
  Underline,
  Summary,
  NextRole,
  Facts,
} from "./styled";

// The tagline is the big headline, with a hand-drawn underline under one word.
const [before, after] = profile.tagline.split(profile.taglineHighlight);

// The deep-green brand band: the tagline as the headline, the roles I want
// and where I can work, and the photo rising from the band's bottom edge.
// Contact lives in the top bar and the footer, so the hero has no button of
// its own. The headline is the h1 and starts with my name and title, which
// only screen readers and search engines get: the top bar shows them.
export const MainHeader = () => (
  <Wrapper id="top">
    <Band>
      <BandInner>
        <Details>
          <Headline>
            {/* The space stays outside the hidden part: a trailing space inside
                it is dropped from the heading's accessible name. */}
            <NameAndTitle>{`${profile.name}, ${profile.title}:`}</NameAndTitle>{" "}
            {before}
            <Highlight>
              {/* Before the word, not after: Chrome puts a space at the edge of
                  this positioned SVG in the heading's accessible name, and here
                  it merges with the space before the word ("wrong ." else). */}
              <Underline
                viewBox="0 0 200 20"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path d="M3 14 C 50 4, 120 4, 197 10" />
              </Underline>
              {profile.taglineHighlight}
            </Highlight>
            {after}
          </Headline>
          <Summary>{profile.bio}</Summary>
          <NextRole>
            <dt>{profile.lookingFor.label}</dt>
            <dd>{profile.lookingFor.value}</dd>
          </NextRole>
          <Facts aria-label="Location and right to work">
            {profile.facts.map((fact) => (
              <li key={fact}>{fact}</li>
            ))}
          </Facts>
        </Details>
        <SplitPortrait
          src={szymonRojekProfile}
          name={profile.name}
          captions={profile.portraitCaptions}
        />
      </BandInner>
    </Band>
  </Wrapper>
);
