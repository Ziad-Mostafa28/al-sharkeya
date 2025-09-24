import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/axiosInstance";

// thunk
export const fetchAboutHistory = createAsyncThunk(
  "aboutHistory/fetchAboutHistory",
  async (lang) => {
    const response = await axiosInstance.get(`/about/history`, {
      headers: {
        "Accept-Language": lang,
      },
    });
    return response.data;
  }
);

const aboutHistorySlice = createSlice({
  name: "aboutHistory",
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAboutHistory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAboutHistory.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchAboutHistory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default aboutHistorySlice.reducer;
