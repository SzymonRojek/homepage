import szymonRojekProfile from "./szymonRojekProfile.jpg";
import { profile } from "../profile";
import { SplitPortrait } from "./SplitPortrait";
import {
  Wrapper,
  Band,
  BandInner,
  Details,
  Eyebrow,
  NameAndTitle,
  Headline,
  Highlight,
  Summary,
  NextRole,
} from "./styled";

// The tagline is the big headline, its last words on a tilted green block.
const [before, after] = profile.tagline.split(profile.taglineHighlight);

// The deep-green brand band: the tagline as the headline, the roles I want
// and where I can work, and the photo rising from the band's bottom edge.
// Contact lives in the top bar and the footer, so the hero has no button of
// its own. The headline is the h1 and starts with my name and title, which
// only screen readers and search engines get: on screen the top bar shows
// my name and the line over the headline my title.
export const MainHeader = () => (
  <Wrapper id="top">
    <Band>
      <BandInner>
        <Details>
          <Eyebrow>{profile.eyebrow}</Eyebrow>
          <Headline>
            {/* The space stays outside the hidden part: a trailing space inside
                it is dropped from the heading's accessible name. */}
            <NameAndTitle>{`${profile.name}, ${profile.title}:`}</NameAndTitle>{" "}
            {before}
            <Highlight>{profile.taglineHighlight}</Highlight>
            {after}
          </Headline>
          <Summary>{profile.bio}</Summary>
          <NextRole>
            <dt>{profile.lookingFor.label}</dt>
            <dd>{profile.lookingFor.value}</dd>
          </NextRole>
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
