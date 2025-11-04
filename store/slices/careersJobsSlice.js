import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/axiosInstance";

// 🔹 Async thunk to fetch careers jobs data
export const fetchCareersJobsData = createAsyncThunk(
  "careersJobs/fetchCareersJobsData",
  async (lang, thunkAPI) => {
    try {
      const response = await axiosInstance.get("/careers/jobs", {
        headers: {
          "Accept-Language": lang,
        },
      });
      console.log(response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data || "Failed to fetch careers jobs data"
      );
    }
  }
);

// 🔹 Slice
const careersJobsSlice = createSlice({
  name: "careersJobs",
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCareersJobsData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCareersJobsData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchCareersJobsData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default careersJobsSlice.reducer;
