import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./slice/ui-slice";
import favSlice from './slice/favorite'

import apiSlice from "./slice/api-slice";
import searchSlice from "./slice/search-slice";

const store = configureStore({
    reducer: {
        ui: uiSlice,
        favorite: favSlice,
        apiSlice: apiSlice,
        search: searchSlice
    }
});

export default store;