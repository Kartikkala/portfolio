import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    selectedProject: null,
    isOverlayOpen: false,
    imageId : null,
    mouseInsideProject : false,
};

export const projectSlice = createSlice({
    name: 'project',
    initialState,
    reducers: {
        setMouseInsideProject: (state, action) =>{
            state.mouseInsideProject = action.payload
        },
        // Call this when user clicks a project
        openProject: (state, action) => {
            state.selectedProject = action.payload.project;
            state.imageId = action.payload.imageId;
            state.isOverlayOpen = true;
        },
        // Call this when user clicks "Close" on the overlay
        closeProject: (state) => {
            state.isOverlayOpen = false;
        },
    },
});

export const { openProject, closeProject, setMouseInsideProject } = projectSlice.actions;
export default projectSlice.reducer;