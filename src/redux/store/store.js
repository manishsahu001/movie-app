import {configureStore} from '@reduxjs/toolkit'
import counterReducer  from '../index';
import cartSlice from './addToCart';
const store = configureStore({
    reducer: {
        counter: counterReducer,
        cart: cartSlice.reducer
    },
})

export default store;