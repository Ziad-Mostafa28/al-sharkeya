import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/axiosInstance";

export const fetchSustainability = createAsyncThunk(
  "sustainability/fetchSustainability",
  async (lang, thunkAPI) => {
    try {
      const response = await axiosInstance.get("/sustainability", {
        headers: {
          "Accept-Language": lang,
        },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || "Failed to fetch sustainability data");
    }
  }
);

const sustainabilitySlice = createSlice({
  name: "sustainability",
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSustainability.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSustainability.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchSustainability.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default sustainabilitySlice.reducer;
