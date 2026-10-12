import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type ProjectView = "both" | "developer" | "tester";

interface ProjectViewState {
  view: ProjectView;
}

const initialState: ProjectViewState = { view: "both" };

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
