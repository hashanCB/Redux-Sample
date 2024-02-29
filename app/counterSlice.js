import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  name: "hashan",
};

export const counterSlice = createSlice({
  name: "counterx",
  initialState,
  reducers: {
    increment: (s) => {
      s.value += 1;
    },
    decrement: (s) => {
      s.value -= 1;
    },
    chagename: (s, action) => {
      s.name = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, chagename } = counterSlice.actions;

export default counterSlice.reducer;
