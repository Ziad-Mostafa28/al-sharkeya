import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/axiosInstance";

export const fetchNewsDetails = createAsyncThunk(
  "newsDetails/fetchNewsDetails",
  async ({ id, lang }, thunkAPI) => {
    try {
      const response = await axiosInstance.get(`/news/${id}`, {
        headers: {
          "Accept-Language": lang,
        },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data || "Failed to fetch news details"
      );
    }
  }
);

const newsDetailsSlice = createSlice({
  name: "newsDetails",
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    clearNewsDetails: (state) => {
      state.data = null;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNewsDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchNewsDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchNewsDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearNewsDetails } = newsDetailsSlice.actions;
export default newsDetailsSlice.reducer;
