import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: [],
  loading: false,
  success: null,
  failure: null,
  message: null,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    createProductReq: (state) => {
      state.loading = true;
    },
    createProductSuccess: (state,action) => {
      state.loading = false;
      state.product = action.payload.product;
      state.message = action.payload.message;
      state.success = action.payload.success;
    },
    createProductFail: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
      state.failure = action.payload.success;
    },
    clearProductMsgs: (state) => {
      state.success = null;
      state.failure = null;
      state.message = null;
    },
  },
});

export const {
  createProductReq,
  createProductSuccess,
  createProductFail,
  clearProductMsgs,
} = productSlice.actions;

export default productSlice.reducer;
