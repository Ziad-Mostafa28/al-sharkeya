import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/axiosInstance";

// 🔹 Async thunk to fetch careers jobs data
export const fetchCareersJobsData = createAsyncThunk(
  "careersJobs/fetchCareersJobsData",
  async ({ lang, area_id = "", location_id = "" }, thunkAPI) => {
    try {
      let url = `/careers/jobs?`;

      if (area_id) url += `area_id=${area_id}&`;
      if (location_id) url += `location_id=${location_id}`;

      const response = await axiosInstance.get(url, {
        headers: {
          "Accept-Language": lang,
        },
      });

      console.log("Fetched Jobs Data:", response.data);
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
