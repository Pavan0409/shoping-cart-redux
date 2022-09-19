import { configureStore } from '@reduxjs/toolkit';
import showSlice from './showReducer';
import cartSlice from './cartReducer';

const store = configureStore({
    reducer:{show:showSlice.reducer, cart:cartSlice.reducer},
})

export default store;