import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/axiosInstance";

export const fetchPrivacyPolicy = createAsyncThunk(
  "privacyPolicy/fetchPrivacyPolicy",
  async (lang) => {
    const response = await axiosInstance.get(`/settings`, {
      headers: {
        "Accept-Language": lang, 
      },
    });
    return response.data;
  }
);

const privacyPolicySlice = createSlice({
  name: "privacyPolicy",
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPrivacyPolicy.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPrivacyPolicy.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchPrivacyPolicy.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default privacyPolicySlice.reducer;
