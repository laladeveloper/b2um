import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  success: null,
  allCategories: [],
  signleCategory: null,
  failure: null,
  message: null,
};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    getAllCategoriesReq: (state) => {
      state.loading = true;
    },
    getAllCategoriesSuccess: (state, action) => {
      state.loading = false;
      state.allCategories = action.payload.categories;
      state.success = action.payload.success;
      // console.log(action.payload);
    },
    getAllCategoriesFailure: (state) => {
      state.loading = false;
    },

    clearMsgs: (state) => {
      state.success = null;
      state.failure = null;
      state.message = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  getAllCategoriesReq,
  getAllCategoriesSuccess,
  getAllCategoriesFailure,
  clearMsgs,
} = categorySlice.actions;

export default categorySlice.reducer;
