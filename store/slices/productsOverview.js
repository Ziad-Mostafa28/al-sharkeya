import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/axiosInstance";

// ✅ Fetch Products Overview Data
export const fetchProductsOverviewData = createAsyncThunk(
  "productsOverview/fetchProductsOverviewData",
  async (lang, thunkAPI) => {
    try {
      const response = await axiosInstance.get("/products/overview", {
        headers: {
          "Accept-Language": lang,
        },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data || "Failed to fetch products overview"
      );
    }
  }
);

const productsOverviewSlice = createSlice({
  name: "productsOverview",
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsOverviewData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProductsOverviewData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchProductsOverviewData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default productsOverviewSlice.reducer;
