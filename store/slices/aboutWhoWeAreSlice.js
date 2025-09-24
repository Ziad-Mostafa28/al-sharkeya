import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/axiosInstance";

export const fetchWhoWeAre = createAsyncThunk(
  "aboutWhoWeAre/fetchWhoWeAre",
  async (lang, thunkAPI) => {
    try {
      const response = await axiosInstance.get("/about/who-we-are", {
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

const aboutWhoWeAreSlice = createSlice({
  name: "aboutWhoWeAre",
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWhoWeAre.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWhoWeAre.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchWhoWeAre.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default aboutWhoWeAreSlice.reducer;
