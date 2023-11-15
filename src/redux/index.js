import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./slice/ui-slice";
import favSlice from './slice/favorite'

import apiSlice from "./slice/api-slice";

const store = configureStore({
    reducer: {
        ui: uiSlice,
        favorite: favSlice,
        apiSlice: apiSlice
    }
});

export default store;