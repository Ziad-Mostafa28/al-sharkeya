import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/axiosInstance";

export const fetchSugarHistory = createAsyncThunk(
  "sugarHistory/fetchSugarHistory",
  async (lang, thunkAPI) => {
    try {
      const response = await axiosInstance.get("/sugar-history", {
        headers: {
          "Accept-Language": lang,
        },
      });
      
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data || "Failed to fetch sugar history"
      );
    }
  }
);

const sugarHistorySlice = createSlice({
  name: "sugarHistory",
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSugarHistory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSugarHistory.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchSugarHistory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default sugarHistorySlice.reducer;
