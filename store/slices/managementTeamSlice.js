import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/axiosInstance";

export const fetchManagementTeam = createAsyncThunk(
  "managementTeam/fetchManagementTeam",
  async (lang, thunkAPI) => {
    try {
      const response = await axiosInstance.get("/about/management-team", {
        headers: { "Accept-Language": lang },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data || "Failed to fetch"
      );
    }
  }
);

const managementTeamSlice = createSlice({
  name: "managementTeam",
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchManagementTeam.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchManagementTeam.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchManagementTeam.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default managementTeamSlice.reducer;
