import {createSlice, AsyncThunk, createAsyncThunk} from '@reduxjs/toolkit'


const initialState = {
    movies: [],
    loading: true,
    error: null,
}

export const fetchMovies = createAsyncThunk(async ()=>{
    const response = await fetch("http://www.omdbapi.com/?apikey=6095e741&t=avatar")
    console.log(response)
    return response.json();

})

const counterReducer = createSlice({
    name: "counter",
    initialState: {
        counter: 0, 
        btnClsss: false,
        
    },
    reducers:{
        increment: (state)=>{
            state.counter++;
        },
        decrement: (state)=>{
            state.counter--;
        },
        addBtnClass: (state)=>{
            state.btnClsss = true;
        }
        
    }
});

export const {increment, decrement, addBtnClass} = counterReducer.actions
export default counterReducer.reducer