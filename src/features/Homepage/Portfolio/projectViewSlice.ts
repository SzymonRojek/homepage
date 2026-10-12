import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type ProjectView = "both" | "developer" | "tester";

interface ProjectViewState {
  view: ProjectView;
}

const views: ProjectView[] = ["tester", "developer", "both"];

// A CV can link straight to one view, e.g. /homepage/?view=developer#projects.
// Without a valid ?view= the projects open in the tester (automation) view.
export const getInitialProjectView = (search = window.location.search) => {
  const view = new URLSearchParams(search).get("view");

  return views.find((option) => option === view) ?? "tester";
};

const initialState: ProjectViewState = { view: getInitialProjectView() };

// Shared by the view switch in Projects and the split portrait in the header.
const projectViewSlice = createSlice({
  name: "projectView",
  initialState,
  reducers: {
    setProjectView: (state, { payload }: PayloadAction<ProjectView>) => {
      state.view = payload;
    },
  },
});

export const { setProjectView } = projectViewSlice.actions;

const selectProjectViewState = (state: { projectView: ProjectViewState }) =>
  state.projectView;

export const selectProjectView = (state: { projectView: ProjectViewState }) =>
  selectProjectViewState(state).view;

export default projectViewSlice.reducer;
