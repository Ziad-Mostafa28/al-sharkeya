import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/axiosInstance";

export const fetchFaqsData = createAsyncThunk(
  "faqs/fetchFaqsData",
  async (lang, thunkAPI) => {
    try {
      const response = await axiosInstance.get("/faqs", {
        
        headers: {
          "Accept-Language": lang,
        },
      });
      
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || "Failed to fetch FAQs");
    }
  }
);

const faqSlice = createSlice({
  name: "faqs",
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFaqsData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchFaqsData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchFaqsData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default faqSlice.reducer;
