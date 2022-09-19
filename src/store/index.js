import { configureStore } from '@reduxjs/toolkit';
import showSlice from './show';

const store = configureStore({
    reducer:{show:showSlice.reducer},
})

export default store;