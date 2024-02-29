"use client";
import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import counter2Slice from "./counter2Slice";

export const store = configureStore({
  reducer: {
    counter1: counterSlice,
    counter2: counter2Slice,
  },
});
