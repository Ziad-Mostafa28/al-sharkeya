import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/axiosInstance";

// Fetch product by ID
export const fetchProductsData = createAsyncThunk(
  "products/fetchProductsData",
  async (id, thunkAPI) => {
    try {
      const response = await axiosInstance.get(`/products/${id}`);
      // ⚠️ هنا ناخد فقط response.data.data وليس كامل response
      return response.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data || { message: "Failed to fetch products" }
      );
    }
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProductsData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload; // الآن هذا فقط object الـ data من الـ API
      })
      .addCase(fetchProductsData.rejected, (state, action) => {
        state.loading = false;
        // نتأكد أن error نص وليس object
        state.error = action.payload?.message || action.payload || "Failed to fetch products";
      });
  },
});

export default productsSlice.reducer;
