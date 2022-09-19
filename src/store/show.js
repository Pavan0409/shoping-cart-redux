import { createSlice } from "@reduxjs/toolkit";

const showSlice  = createSlice({
    name:'show',
    initialState:{cartVisible:false},
    reducers:{
        toggle(state){
            state.cartVisible = !state.cartVisible;
        },
    }
})

export const showActions = showSlice.actions;
export default showSlice;