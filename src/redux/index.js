import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./slice/ui-slice";
import favSlice from './slice/favorite'

const store = configureStore({
    reducer: {
        ui: uiSlice,
        favorite: favSlice
    }
});

export default store;