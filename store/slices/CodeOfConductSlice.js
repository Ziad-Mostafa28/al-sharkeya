import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/axiosInstance";

export const fetchCodeOfConductData = createAsyncThunk(
  "codeOfConduct/fetchCodeOfConductData",
  async (lang, thunkAPI) => {
    try {
      const response = await axiosInstance.get("/code-of-conduct", {
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

const codeOfConductSlice = createSlice({
  name: "codeOfConduct",
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCodeOfConductData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCodeOfConductData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchCodeOfConductData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default codeOfConductSlice.reducer;
