import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchMovies = createAsyncThunk('home', async ()=>{
    const response = await fetch("https://www.omdbapi.com/?apikey=6095e741&s=toon")
    const data = await response.json();
    return data.Search;
})

const ApiSlice = createSlice({
    name: "movies",
    initialState: {
        movies: [],
        status: '',
        error: null
    },
    reducers: {},
    extraReducers: (builder)=>{
        builder.addCase(fetchMovies.pending, (state)=> {
            state.status = 'loading';
        })

        builder.addCase(fetchMovies.fulfilled, (state, action)=>{
            state.status = 'succeeded';
            state.movies = action.payload;
        })

        builder.addCase(fetchMovies.rejected, (state, action)=>{
            state.status = 'failed';
            state.error = action.error.message;
        })
    }
})

export default ApiSlice.reducer;