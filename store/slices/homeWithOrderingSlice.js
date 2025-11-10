import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/axiosInstance";

export const fetchHomeWithOrderingData = createAsyncThunk(
  "homeWithOrdering/fetchHomeWithOrderingData",
  async (lang, thunkAPI) => {
    try {
      const response = await axiosInstance.get("/home-with-ordering", {
        headers: {
          "Accept-Language": lang,
        },
      });
      
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data || "Failed to fetch home-with-ordering data"
      );
    }
  }
);

// 🔹 Slice
const homeWithOrderingSlice = createSlice({
  name: "homeWithOrdering",
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchHomeWithOrderingData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchHomeWithOrderingData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchHomeWithOrderingData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default homeWithOrderingSlice.reducer;
