import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    selectedProject: null,
    isOverlayOpen: false,
    rectPos : null
};

export const projectSlice = createSlice({
    name: 'project',
    initialState,
    reducers: {
        // Call this when user clicks a project
        openProject: (state, action) => {
            state.selectedProject = action.payload.project;
            state.rectPos = action.payload.rect;
            state.isOverlayOpen = true;
        },
        // Call this when user clicks "Close" on the overlay
        closeProject: (state) => {
            state.isOverlayOpen = false;
        },
    },
});

export const { openProject, closeProject } = projectSlice.actions;
export default projectSlice.reducer;