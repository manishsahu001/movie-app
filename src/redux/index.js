import {createSlice} from '@reduxjs/toolkit'

const initialState = {counter: 0}

const counterReducer = createSlice({
    name: "counter",
    initialState: initialState,
    reducers:{
        increment: (state)=>{
            state.counter++;
        },
        decrement: (state)=>{
            state.counter--;
        }
    }
});

export const {increment, decrement} = counterReducer.actions
export default counterReducer.reducer