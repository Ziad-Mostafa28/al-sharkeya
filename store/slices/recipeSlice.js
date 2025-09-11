import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/axiosInstance";

export const fetchRecipesData = createAsyncThunk(
  "recipes/fetchRecipesData",
  async (lang, thunkAPI) => {
    try {
      const response = await axiosInstance.get("/recipes", {
        
        headers: {
          "Accept-Language": lang,
        },
      });
      
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || "Failed to fetch recipes");
    }
  }
);

const recipesSlice = createSlice({
  name: "recipes",
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecipesData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRecipesData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchRecipesData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default recipesSlice.reducer;
