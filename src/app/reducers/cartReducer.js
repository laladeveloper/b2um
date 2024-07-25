import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  success: null,
  orderID:null,
  sellerID:null,
  productID:null,
  qty:null,
  price:null,
  total:null,
  failure: null,
  message: null,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addproduct: (state) => {
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
      initialState
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  getAllCategoriesReq,
  getAllCategoriesSuccess,
  getAllCategoriesFailure,
  clearMsgs,
} = cartSlice.actions;

export default cartSlice.reducer;
