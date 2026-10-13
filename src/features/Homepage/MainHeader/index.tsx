import szymonRojekProfile from "./szymonRojekProfile.jpg";
import { profile } from "../profile";
import { SplitPortrait } from "./SplitPortrait";
import {
  Wrapper,
  Band,
  BandInner,
  Details,
  Availability,
  Name,
  Headline,
  Highlight,
  Underline,
  Summary,
  Where,
  WhereItem,
} from "./styled";

// The tagline is the big headline, with a hand-drawn underline under one word.
const [before, after] = profile.tagline.split(profile.taglineHighlight);

// The deep-green brand band: the tagline as the headline, where I can work,
// and the photo rising from the band's bottom edge. Contact lives in the top
// bar and the footer, so the hero has no button of its own. The name
// and title are in the top bar right above, so here they are the h1 for
// search engines and screen readers only.
export const MainHeader = () => (
  <Wrapper id="top">
    <Band>
      <BandInner>
        <Details>
          <Availability>{profile.availability}</Availability>
          <Name>{profile.name}</Name>
          <Headline>
            {before}
            <Highlight>
              {profile.taglineHighlight}
              <Underline
                viewBox="0 0 200 20"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path d="M3 14 C 50 4, 120 4, 197 10" />
              </Underline>
            </Highlight>
            {after}
          </Headline>
          <Summary>{profile.bio}</Summary>
          <Where aria-label="Location and right to work">
            {profile.location.map(({ label, value }) => (
              <WhereItem key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </WhereItem>
            ))}
          </Where>
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
