import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/axiosInstance";

export const submitContactForm = createAsyncThunk(
  "contact/submitContactForm",
  async ({ formData, lang }, thunkAPI) => {
    try {
      const response = await axiosInstance.post("/contact-us/submit-form", formData, {
        headers: {
          "Accept-Language": lang,
        },
      });
      return response.data.msg; // 👈 هنرجع رسالة النجاح فقط
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data?.msg || "Failed to submit form");
    }
  }
);

const contactSlice = createSlice({
  name: "contact",
  initialState: {
    loading: false,
    successMessage: null,
    errorMessage: null,
  },
  reducers: {
    resetContactState: (state) => {
      state.loading = false;
      state.successMessage = null;
      state.errorMessage = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitContactForm.pending, (state) => {
        state.loading = true;
        state.successMessage = null;
        state.errorMessage = null;
      })
      .addCase(submitContactForm.fulfilled, (state, action) => {
        state.loading = false;
        state.successMessage = action.payload; // 👈 رسالة النجاح
      })
      .addCase(submitContactForm.rejected, (state, action) => {
        state.loading = false;
        state.errorMessage = action.payload; // 👈 رسالة الخطأ
      });
  },
});

export const { resetContactState } = contactSlice.actions;

export default contactSlice.reducer;
