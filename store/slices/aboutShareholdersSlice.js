import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/axiosInstance";

// thunk
// thunk
export const fetchAboutShareholders = createAsyncThunk(
  "aboutShareholders/fetchAboutShareholders",
  async (lang, thunkAPI) => {
    try {
      const response = await axiosInstance.get("/about/shareholders", {
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

const aboutShareholdersSlice = createSlice({
  name: "aboutShareholders",
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAboutShareholders.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAboutShareholders.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchAboutShareholders.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default aboutShareholdersSlice.reducer;
