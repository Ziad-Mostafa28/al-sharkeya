import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/axiosInstance";

// Thunk لجلب بيانات العملاء
export const fetchCustomersData = createAsyncThunk(
  "customers/fetchCustomersData",
  async (lang, thunkAPI) => {
    try {
      const response = await axiosInstance.get("/customers", {
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

const customersSlice = createSlice({
  name: "customers",
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCustomersData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCustomersData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchCustomersData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default customersSlice.reducer;
