import { describe, expect, it } from "vitest";
import projectViewReducer, {
  openCaseStudy,
  openFromAddress,
  parseCaseStudyHash,
  selectOpenRepo,
  selectSide,
} from "./projectViewSlice";

const read = (state: ReturnType<typeof projectViewReducer>) => ({
  openRepo: selectOpenRepo({ projectView: state }),
  side: selectSide({ projectView: state }),
});

describe("projectViewSlice", () => {
  it("starts with every case study closed", () => {
    expect(read(projectViewReducer(undefined, { type: "init" }))).toEqual({
      openRepo: null,
      side: null,
    });
  });

  it("opens and closes a case study, forgetting any side", () => {
    const sided = projectViewReducer(
      undefined,
      openFromAddress({ openRepo: "talent-outreach", side: "developer" }),
    );
    const opened = projectViewReducer(sided, openCaseStudy("homepage"));
    expect(read(opened)).toEqual({ openRepo: "homepage", side: null });

    const closed = projectViewReducer(opened, openCaseStudy(null));
    expect(read(closed)).toEqual({ openRepo: null, side: null });
  });

  it("an address typed while the page is open sets the case study and side", () => {
    const state = projectViewReducer(
      undefined,
      openFromAddress({ openRepo: "homepage", side: "developer" }),
    );

    expect(read(state)).toEqual({ openRepo: "homepage", side: "developer" });
  });
});

describe("parseCaseStudyHash", () => {
  it("opens the case study named in the address", () => {
    expect(parseCaseStudyHash("#case-study-homepage")).toEqual({
      openRepo: "homepage",
      side: null,
    });
  });

  it("also reads the column, even for a repo name with dashes", () => {
    expect(parseCaseStudyHash("#case-study-talent-outreach-developer")).toEqual(
      { openRepo: "talent-outreach", side: "developer" },
    );
    expect(parseCaseStudyHash("#case-study-talent-outreach")).toEqual({
      openRepo: "talent-outreach",
      side: null,
    });
  });

  it("keeps everything closed for other addresses", () => {
    const closed = { openRepo: null, side: null };
    expect(parseCaseStudyHash("")).toEqual(closed);
    expect(parseCaseStudyHash("#projects")).toEqual(closed);
    expect(parseCaseStudyHash("#case-study-unknown")).toEqual(closed);
    expect(parseCaseStudyHash("#case-study-unknown-tester")).toEqual(closed);
  });
});
