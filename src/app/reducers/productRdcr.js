import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: [],
  sellerproducts: [],
  allproducts: [],
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
    createProductSuccess: (state, action) => {
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
    getProductSuccess: (state, action) => {
      state.loading = false;
      state.sellerproducts = action.payload.products;
      state.prdctMessage = action.payload.message;
      state.prdctSuccess = action.payload.success;
    },
    getProductFail: (state, action) => {
      state.loading = false;
      state.prdctMessage = action.payload.message;
      state.prdctFailure = action.payload.success;
    },

    getAllProductsReq: (state) => {
      state.loading = true;
    },
    getAllProductsSuccess: (state, action) => {
      (state.loading = false), (state.allproducts = action.payload.products);
    },
    getAllProductsFail: (state, action) => {
      state.loading = false;
      state.prdctMessage = action.payload.message;
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
  getAllProductsReq,
  getAllProductsSuccess,
  getAllProductsFail,
  clearProductMsgs,
} = productSlice.actions;

export default productSlice.reducer;
