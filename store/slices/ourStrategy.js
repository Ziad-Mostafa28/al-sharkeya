import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/axiosInstance";

// thunk
export const fetchStrategy = createAsyncThunk(
  "aboutStrategy/fetchStrategy",
  async (lang, thunkAPI) => {
    try {
      const response = await axiosInstance.get("/about/strategy", {
        
        headers: {
          "Accept-Language": lang,
        },
      });
      
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data || "Failed to fetch"
      );
    }
  }
);

const strategySlice = createSlice({
  name: "aboutStrategy",
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStrategy.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchStrategy.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchStrategy.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default strategySlice.reducer;
