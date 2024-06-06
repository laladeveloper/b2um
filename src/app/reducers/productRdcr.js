import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: [],
  products: [],
  loading: false,
  prdctSuccess: null,
  prdctFailure: null,
  prdctMessage: null,
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
      state.prdctMessage = action.payload.message;
      state.prdctSuccess = action.payload.success;
    },
    createProductFail: (state, action) => {
      state.loading = false;
      state.prdctMessage = action.payload.message;
      state.prdctFailure = action.payload.success;
    },
    getProductReq: (state) => {
      state.loading = true;
    },
    getProductSuccess: (state,action) => {
      state.loading = false;
      state.products = action.payload.products;
      state.prdctMessage = action.payload.message;
      state.prdctSuccess = action.payload.success;

    },
    getProductFail: (state, action) => {
      state.loading = false;
      state.prdctMessage = action.payload.message;
      state.prdctFailure = action.payload.success;
    },
    clearProductMsgs: (state) => {
      state.prdctSuccess = null;
      state.prdctFailure = null;
      state.prdctMessage = null;
    },
  },
});

export const {
  createProductReq,
  createProductSuccess,
  createProductFail,
  getProductReq,
  getProductSuccess,
  getProductFail,
  clearProductMsgs,
} = productSlice.actions;

export default productSlice.reducer;
