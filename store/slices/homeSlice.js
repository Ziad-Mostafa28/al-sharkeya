import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/axiosInstance";

export const fetchHomeData = createAsyncThunk(
  "home/fetchHomeData",
  async (lang, thunkAPI) => {
    try {
      const response = await axiosInstance.get("/home", {
        
        headers: {
          "Accept-Language": lang,
        },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || "Failed to fetch");
    }
  }
);

const homeSlice = createSlice({
  name: "home",
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchHomeData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchHomeData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchHomeData.rejected, (state, action) => {
        state.loading = false; 
        state.error = action.payload;
      });
  },
});

export default homeSlice.reducer;
