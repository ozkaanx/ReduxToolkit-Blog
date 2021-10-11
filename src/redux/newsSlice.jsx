import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchNews = createAsyncThunk("news/getNews", async (page) => {
  const res = await axios(
    ` https://newsapi.org/v2/top-headlines?pageSize=4&country=tr&category=technology&apiKey=06cdb9957b82428fb3b6f762aeb1fa8a`
  );
  return res.data.articles;
 
});

export const newsSlice = createSlice({
  name: "news",
  initialState: {
    items: [],
    status:"idle",
    page : 1,
  },
  reducers: {},
  extraReducers: {
    [fetchNews.pending]: (state, action) => {
      state.status = 'loading';
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
