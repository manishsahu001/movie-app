import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name: 'ui',
    initialState: {favListVisible: false, btnClass: false, InputClass: false, dark: true},
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
        toggleTheme(state){
            state.dark = !state.dark;
        }
    }
});

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;