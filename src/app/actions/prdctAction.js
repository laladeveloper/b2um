import axios from "axios";
import {
  createProductFail,
  createProductReq,
  createProductSuccess,
  getAllProductsFail,
  getAllProductsReq,
  getAllProductsSuccess,
  getProductReq,
  getProductSuccess,
} from "../reducers/productRdcr";
const baseUrl = import.meta.env.VITE_BACKEND_URL; // Include protocol in base URL

export const listProduct = (productInfo, token) => async (dispatch) => {
  dispatch(createProductReq());
  console.log(token);
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const response = await axios.post(
      `${baseUrl}/api/product/new`,
      productInfo,
      config
    );
    console.log(response);
    const data = response.data;
    console.log(data);
    dispatch(createProductSuccess(data));
  } catch (error) {
    console.log(error);
    const failMsg = {
      success: false,
      message: `Please try later`,
    };
    dispatch(createProductFail(failMsg));
  }
};

export const getAllProducts = ()=> async (dispatch)=>{
  try {
    dispatch(getAllProductsReq())

    const response = await axios.get( `${baseUrl}/api/product/all`)
    const allproducts = response.data;
    dispatch(getAllProductsSuccess(allproducts));

  } catch (error) {
    console.log(error);
    dispatch(getAllProductsFail(error))
  }
}

export const getSellerProducts = (token) => async (dispatch) => {
  try {
    dispatch(getProductReq());
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.get(
      `${baseUrl}/api/product/all/seller`,
      config
    );
    //  console.log(response);
    const data = response.data;
     console.log(data);
    dispatch(getProductSuccess(data));
    console.log(`products dispatched`);
  } catch (error) {
    console.log(error);
  }
};
