import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  name: "bandara",
};

export const counter2Slice = createSlice({
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
export const { increment, decrement, chagename } = counter2Slice.actions;

export default counter2Slice.reducer;
