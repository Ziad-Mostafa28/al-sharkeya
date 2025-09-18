import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/axiosInstance";

export const fetchNewsData = createAsyncThunk(
  "news/fetchNewsData",
  async (lang, thunkAPI) => {
    try {
      const response = await axiosInstance.get("/news", {
        headers: {
          "Accept-Language": lang,
        },
        
      });

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || "Failed to fetch");
    }
  }
);

const NewsSlice = createSlice({
  name: "News",
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNewsData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchNewsData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchNewsData.rejected, (state, action) => {
        state.loading = false; 
        state.error = action.payload;
      });
  },
});

export default NewsSlice.reducer;
