import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/axiosInstance";

export const fetchDownloadBrochure = createAsyncThunk(
  "downloadBrochure/fetchDownloadBrochure",
  async (lang, thunkAPI) => {
    try {
      const response = await axiosInstance.get("/download-brochure", {
        headers: {
          "Accept-Language": lang,
        },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data || "Failed to fetch brochure data"
      );
    }
  }
);

const downloadBrochureSlice = createSlice({
  name: "downloadBrochure",
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDownloadBrochure.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDownloadBrochure.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchDownloadBrochure.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default downloadBrochureSlice.reducer;
