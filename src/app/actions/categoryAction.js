import axios from "axios";
import {
  getAllCategoriesFailure,
  getAllCategoriesReq,
  getAllCategoriesSuccess,
} from "../reducers/categoryReducer";
const baseUrl = import.meta.env.VITE_BACKEND_URL; // Include protocol in base URL

export const getAllCategories = () => async (dispatch) => {
  try {
    dispatch(getAllCategoriesReq());
    // console.log(`token in admin actions ${token}`);
    // const config = {
    //   headers: {
    //     Authorization: `Bearer ${token}`,
    //   },
    // };
    const response = await axios.get(`${baseUrl}/api/category/all`);

    const categories = response.data;
    // console.log(categories);
    dispatch(getAllCategoriesSuccess(categories));
  } catch (error) {
    console.log(error);
    dispatch(getAllCategoriesFailure());
  }
};
