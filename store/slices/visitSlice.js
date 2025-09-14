// store/slices/visitSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/axiosInstance";

export const submitVisitForm = createAsyncThunk(
  "visit/submitVisitForm",
  async ({ formData, lang }, thunkAPI) => {
    try {
      const response = await axiosInstance.post(
        "/visits/submit-form",
        formData,
        { headers: { "Accept-Language": lang } }
      );
      return response.data.msg;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.msg || "Failed to submit visit request"
      );
    }
  }
);

const visitSlice = createSlice({
  name: "visit",
  initialState: {
    loading: false,
    successMessage: null,
    errorMessage: null,
    submitted: false, // 💡 نستخدمها علشان نقفل الكالندر بعد أول اختيار
  },
  reducers: {
    resetVisitState: (state) => {
      state.loading = false;
      state.successMessage = null;
      state.errorMessage = null;
      state.submitted = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitVisitForm.pending, (state) => {
        state.loading = true;
        state.successMessage = null;
        state.errorMessage = null;
      })
      .addCase(submitVisitForm.fulfilled, (state, action) => {
        state.loading = false;
        state.successMessage = action.payload;
        state.submitted = true; // ✅ بعد النجاح نعتبره خلاص اختار يوم
      })
      .addCase(submitVisitForm.rejected, (state, action) => {
        state.loading = false;
        state.errorMessage = action.payload;
      });
  },
});

export const { resetVisitState } = visitSlice.actions;

export default visitSlice.reducer;
