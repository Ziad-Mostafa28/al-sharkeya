import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/axiosInstance";

export const fetchRecipeDetails = createAsyncThunk(
  "recipeDetails/fetchRecipeDetails",
  async ({ id, lang }, thunkAPI) => {
    try {
      const response = await axiosInstance.get(`/recipes/${id}`, {
        headers: {
          "Accept-Language": lang,
        },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || "Failed to fetch recipe details");
    }
  }
);

const recipeDetailsSlice = createSlice({
  name: "recipeDetails",
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    clearRecipeDetails: (state) => {
      state.data = null;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecipeDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRecipeDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchRecipeDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearRecipeDetails } = recipeDetailsSlice.actions;
export default recipeDetailsSlice.reducer;
