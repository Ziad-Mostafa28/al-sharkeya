import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/axiosInstance";

export const submitSupplierForm = createAsyncThunk(
  "suppliers/submitSupplierForm",
  async ({ formData, lang }, thunkAPI) => {
    try {
      const response = await axiosInstance.post("/suppliers/submit-form", formData, {
        headers: {
          "Accept-Language": lang,
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data.msg;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data?.msg);
    }
  }
);

const suppliersSlice = createSlice({
  name: "suppliers",
  initialState: {
    loading: false,
    successMessage: null,
    errorMessage: null,
  },
  reducers: {
    resetSupplierFormState: (state) => {
      state.loading = false;
      state.successMessage = null;
      state.errorMessage = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitSupplierForm.pending, (state) => {
        state.loading = true;
        state.successMessage = null;
        state.errorMessage = null;
      })
      .addCase(submitSupplierForm.fulfilled, (state, action) => {
        state.loading = false;
        state.successMessage = action.payload;
      })
      .addCase(submitSupplierForm.rejected, (state, action) => {
        state.loading = false;
        state.errorMessage = action.payload;
      });
  },
});

export const { resetSupplierFormState } = suppliersSlice.actions;

export default suppliersSlice.reducer;
