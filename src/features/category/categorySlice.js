import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const addAsyncCategories = createAsyncThunk(
  "products/addAsyncCategories",
  async (payload, { rejectWithValue }) => {
    try {
      const respons = await axios.post(
        "http://localhost:3001/Categories/",
        payload.values,
      );

      // console.log(respons.data);
      return respons.data;
    } catch (error) {
      // console.log(error);

      return rejectWithValue([], error);
    }
  },
);

export const getAsyncCategories = createAsyncThunk(
  "categories/getAsyncCategories",
  async (_, { rejectWithValue }) => {
    try {
      const respons = await axios.get("http://localhost:3001/categories/");
      console.log(respons.data);

      return respons.data;
    } catch (error) {
      // console.log(error);

      return rejectWithValue([], error);
    }
  },
);

export const getSearchAsyncCategories = createAsyncThunk(
  "categories/getSearchAsyncCategories",
  async (_, { rejectWithValue }) => {
    try {
      const respons = await axios.get("http://localhost:3001/categories/");

      console.log(respons.data);

      return respons.data;
    } catch (error) {
      // console.log(error);

      return rejectWithValue([], error);
    }
  },
);

const categorySlice = createSlice({
  name: "categories",
  initialState: {
    loading: false,
    categories: [],
    error: null,
  },
  reducers: {},
  extraReducers: {
    [addAsyncCategories.fulfilled]: (state, action) => {
      state.categories.push(action.payload);
    },
    [getAsyncCategories.fulfilled]: (state, action) => {
      // console.log(action.payload);
      return { ...state, categories: action.payload, loading: false };
    },
    [getAsyncCategories.pending]: (state, action) => {
      return { ...state, loading: true, categories: [] };
    },
    [getAsyncCategories.rejected]: (state, action) => {
      return {
        ...state,
        loading: false,
        categories: [],
        error: action.error.message,
      };
    },
  },
});

// export const { increment, decrement, incrementByAmount, remove, update, add, search } =
//   categorySlice.actions;
export default categorySlice.reducer;
