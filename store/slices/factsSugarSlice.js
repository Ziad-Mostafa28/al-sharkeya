import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/axiosInstance";

export const fetchSugarFacts = createAsyncThunk(
  "sugarFacts/fetchSugarFacts",
  async (lang, thunkAPI) => {
    try {
      const response = await axiosInstance.get("/sugar-facts", {
        headers: {
          "Accept-Language": lang,
        },
      });      
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || "Failed to fetch sugar facts");
    }
  }
);

const sugarFactsSlice = createSlice({
  name: "sugarFacts",
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSugarFacts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSugarFacts.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchSugarFacts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default sugarFactsSlice.reducer;
