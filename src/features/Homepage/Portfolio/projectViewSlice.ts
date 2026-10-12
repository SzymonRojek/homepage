import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { projects } from "./projectsData";

export type Side = "developer" | "tester";

interface ProjectViewState {
  // The repo of the open case study; all are closed by default.
  openRepo: string | null;
  // The column a link asked for (#case-study-<repo>-tester), to scroll to it.
  side: Side | null;
}

const caseStudyRepos = projects
  .filter(({ caseStudy }) => caseStudy)
  .map(({ repo }) => repo);

// #case-study-<repo> opens a case study, and #case-study-<repo>-developer or
// -tester also points at one of its columns, e.g. a CV link for a developer
// role: /homepage/#case-study-talent-outreach-developer
export const parseCaseStudyHash = (hash = window.location.hash) => {
  const match = /^#case-study-(.+?)(?:-(developer|tester))?$/.exec(
    decodeURIComponent(hash),
  );
  const repo = match?.[1];

  return repo && caseStudyRepos.includes(repo)
    ? { openRepo: repo, side: (match[2] as Side | undefined) ?? null }
    : { openRepo: null, side: null };
};

const initialState: ProjectViewState = parseCaseStudyHash();

// Shared by the project cards and the address (#case-study-... links).
const projectViewSlice = createSlice({
  name: "projectView",
  initialState,
  reducers: {
    openCaseStudy: (state, { payload }: PayloadAction<string | null>) => {
      state.openRepo = payload;
      state.side = null;
    },
    // A #case-study-... address typed or pasted while the page is open.
    openFromAddress: (
      state,
      { payload }: PayloadAction<{ openRepo: string; side: Side | null }>,
    ) => {
      state.openRepo = payload.openRepo;
      state.side = payload.side;
    },
  },
});

export const { openCaseStudy, openFromAddress } = projectViewSlice.actions;

const selectProjectViewState = (state: { projectView: ProjectViewState }) =>
  state.projectView;

export const selectOpenRepo = (state: { projectView: ProjectViewState }) =>
  selectProjectViewState(state).openRepo;

export const selectSide = (state: { projectView: ProjectViewState }) =>
  selectProjectViewState(state).side;

export default projectViewSlice.reducer;
