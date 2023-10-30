import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: "Cart",
    initialState: {
        movies: [],
        totalMovies: 0
    },
    reducers:{
        addToCart: (state, action)=>{
            const NewMovie = action.payload;
            let existingMovie = state.movies.find((movie)=> movie.id === NewMovie.imdbID);
            state.totalMovies++;
            if(!existingMovie){
                state.movies.push({
                    id: NewMovie.id,
                    title: NewMovie.Title,
                    year: NewMovie.Year,
                    quantity: 1,
                })
            }else{
                existingMovie = existingMovie.quantity++;
            }   
        }
    }
})

export const cartActions = cartSlice.actions;
export default cartSlice;