import { githubProfileUrl } from "./Portfolio/githubUserName";
import { profile } from "./profile";
import {
  automationSkills,
  programmingSkills,
  testTypes,
  testingSkills,
} from "./skillsData";

export const siteUrl = "https://szymonrojek.com/";

// What search engines read about the page (schema.org JSON-LD): WebSite gives
// the name Google shows for the site, ProfilePage says the page is about one
// person. Built from the page's own content, so the two never disagree; the
// build writes it into the <head> (scripts/prerender.ts).
export const structuredData = () =>
  ({
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "WebSite", name: profile.name, url: siteUrl },
      {
        "@type": "ProfilePage",
        url: siteUrl,
        mainEntity: {
          "@type": "Person",
          name: profile.name,
          jobTitle: profile.title,
          url: siteUrl,
          image: `${siteUrl}szymon-rojek.jpg`,
          homeLocation: { "@type": "Place", name: profile.basedIn },
          knowsAbout: [
            ...testingSkills,
            ...automationSkills,
            ...programmingSkills,
            // The test types read as one word each on the page ("Functional
            // · Regression · …"), under a "Test types:" label. Here each has
            // to stand alone, so it carries the noun with it.
            ...testTypes.map((type) => `${type} testing`),
          ],
          sameAs: [profile.linkedinUrl, githubProfileUrl],
        },
      },
    ],
  }) as const;

// JSON for a <script> tag: an escaped "<" can't close the tag early.
export const structuredDataJson = (data: unknown = structuredData()) =>
  JSON.stringify(data).replace(/</g, "\\u003c");
