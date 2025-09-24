import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/axiosInstance"; // مسار axios عندك

// thunk
export const fetchBoardMembers = createAsyncThunk(
  "aboutBoardMembers/fetchBoardMembers",
  async (lang, thunkAPI) => {
    try {
      const response = await axiosInstance.get("/about/board-members", {
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

// slice
const boardMembersSlice = createSlice({
  name: "aboutBoardMembers",
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBoardMembers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBoardMembers.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload; // API بترجع { data: [...] }
      })
      .addCase(fetchBoardMembers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default boardMembersSlice.reducer;
