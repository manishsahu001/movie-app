import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name: 'ui',
    initialState: {favListVisible: false, btnClass: false, InputClass: false, isAuth: false},
    reducers:{
        toggle(state){
            state.favListVisible = !state.favListVisible;
        },
        setBtnClass(state){
            state.btnClass = !state.btnClass;
        },
        setInputClass(state){
            state.InputClass = !state.InputClass;
        },

    }
});

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;