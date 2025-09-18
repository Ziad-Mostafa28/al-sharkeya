import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/axiosInstance";

// 🔹 Thunk
export const fetchCertificationsData = createAsyncThunk(
  "certifications/fetchCertificationsData",
  async (lang, thunkAPI) => {
    try {
      const response = await axiosInstance.get("/certifications", {
        headers: {
          "Accept-Language": lang,
        },
      });
      
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data || "Failed to fetch certifications"
      );
    }
  }
);

// 🔹 Slice
const certificationsSlice = createSlice({
  name: "certifications",
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCertificationsData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCertificationsData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchCertificationsData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default certificationsSlice.reducer;
