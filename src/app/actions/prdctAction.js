import axios from "axios";
import { createProductFail, createProductReq, createProductSuccess } from "../reducers/productRdcr";
const baseUrl = import.meta.env.VITE_BACKEND_URL; // Include protocol in base URL

export const listProduct = (productInfo, token) => async (dispatch) => {
 
  dispatch(createProductReq());

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
        success:false,
        message:`Please try later`
    }
    dispatch(createProductFail(failMsg))
  }

};
