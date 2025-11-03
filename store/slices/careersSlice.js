import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/axiosInstance";

// 🔹 Async thunk to fetch careers data
export const fetchCareersData = createAsyncThunk(
  "careers/fetchCareersData",
  async (lang, thunkAPI) => {
    try {
      const response = await axiosInstance.get("/careers", {
        headers: {
          "Accept-Language": lang,
        },
      });
      console.log(response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data || "Failed to fetch careers data"
      );
    }
  }
);

// 🔹 Slice
const careersSlice = createSlice({
  name: "careers",
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCareersData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCareersData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchCareersData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default careersSlice.reducer;
