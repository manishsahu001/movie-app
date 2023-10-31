import { createSlice } from "@reduxjs/toolkit";

const favSlice = createSlice({
    name: 'favorite',
    initialState: {
        movies: [],
        totalMovies: 0,
    },

    reducers: {
        addToFav(state, action){
            const newMovie = action.payload;
            const existingMoive = state.movies.find(movie => movie.id === newMovie.imdbID);
            state.totalMovies++;
            if(!existingMoive){
                state.movies.push({
                    id: newMovie.imdbID,
                    poster: newMovie.Poster,
                    title: newMovie.Title,
                    type: newMovie.Type,
                    quantity: 1
                })
            }else{
                existingMoive.quantity++;
            }
            console.log(newMovie)
        },

        removeFromFav(state, action){
            const id = action.payload;
            let existingMovie = state.movies.find((movie)=> movie.id === id);
            state.totalMovies--;
            if(existingMovie.quantity === 1){
                state.movies = state.movies.filter((movie)=> movie.id !== id);
            }else{
                existingMovie.quantity--;
            }
        }
    }
});

export const favActions = favSlice.actions;
export default favSlice.reducer;