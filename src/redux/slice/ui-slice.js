import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name: 'ui',
    initialState: {favListVisible: false},
    reducers:{
        toggle(state){
            state.favListVisible = !state.favListVisible;
        }
    }
});

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;