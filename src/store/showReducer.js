import { createSlice } from "@reduxjs/toolkit";

const showSlice = createSlice({
  name: "show",
  initialState: { cartVisible: false, notification: null },
  reducers: {
    toggle(state) {
      state.cartVisible = !state.cartVisible;
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const showActions = showSlice.actions;
export default showSlice;
