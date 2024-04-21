"use server";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk("data/fetchData", async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  return data;
});

export const dataSlice = createSlice({
  name: "data",
  initialState: {
    items: [],
    status: "idle", // 'idle', 'loading', 'succeeded', 'failed'
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchData.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default dataSlice.reducer;
