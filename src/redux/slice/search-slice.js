import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const searchMovives = createAsyncThunk("search/SearchMovies", async (movie)=>{
      
      const response = await fetch(`https://www.omdbapi.com/?apikey=6095e741&s=${movie}`)
      const data = await response.json();
      return data.Search;
})

const SearchSlice = createSlice({
    name: "search",
    initialState: {
        searchTerm: '',
        searchResults: [],
        loading: false
    },

    reducers: {
        setSearchTerm: (state, action)=>{
            state.searchTerm = action.payload;
        }
    },

    extraReducers: (builder) =>{
        builder
        .addCase(searchMovives.pending, (state)=>{
            state.loading = true;
        })
        .addCase(searchMovives.fulfilled, (state, action)=>{
            state.loading = false;
            state.searchResults = action.payload.Search || []
        })
        .addCase(searchMovives.rejected, (state)=>{
            state.loading = false;
            state.searchResults = []
        })

    }
})

export const {setSearchTerm} = SearchSlice.actions;
export default SearchSlice.reducer;