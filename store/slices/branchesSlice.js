import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/axiosInstance";

export const fetchBranchesData = createAsyncThunk(
  "branches/fetchBranchesData",
  async (lang, thunkAPI) => {
    try {
      const response = await axiosInstance.get("/branches", {
        headers: {
          "Accept-Language": lang,
        },
      });      
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || "Failed to fetch branches");
    }
  }
);

const branchesSlice = createSlice({
  name: "branches",
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBranchesData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBranchesData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchBranchesData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default branchesSlice.reducer;
