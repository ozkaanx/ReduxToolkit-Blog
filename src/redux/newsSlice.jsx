import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchNews = createAsyncThunk("news/getNews", async (page) => {
  const res = await axios(
    `https://inshortsapi.vercel.app/news?category=technology`
  );
  return res.data.data;
});

export const newsSlice = createSlice({
  name: "news",
  initialState: {
    items: [],
    status: "idle",
    page: 1,
  },
  reducers: {},
  extraReducers: {
    [fetchNews.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchNews.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = "succeeded";
    },
    [fetchNews.rejected]: (state, action) => {
      state.isLoading = false;
      state.status = "failed";
    },
  },
});

export default newsSlice.reducer;
