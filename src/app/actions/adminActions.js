
import axios from "axios";
import { deleteUserFailure, deleteUserReq, deleteUserSuccess, getUserFailure, getUserReq, getUserSuccess, gettUsersFailure, gettUsersReq, gettUsersSuccess, sellerReq, sellerReqFailure, sellerReqSuccess } from "../reducers/adminReducer";
const baseUrl = import.meta.env.VITE_BACKEND_URL; // Include protocol in base URL


export const getUsers = () => async (dispatch) => {
  try {
    dispatch(gettUsersReq());
    const response = await axios.get(`${baseUrl}/api/user/all`);

    const users = response.data;
    dispatch(gettUsersSuccess(users));
  } catch (error) {
    console.log(error);
    dispatch(gettUsersFailure());
  }
};


export const getUser = (username) => async (dispatch) => {
  try {
    console.log(username);
    dispatch(getUserReq());
    const response = await axios.get(`${baseUrl}/api/user/${username}`);

    const user = response.data;
    console.log(user);
    dispatch(getUserSuccess(user));
  } catch (error) {
    console.log(error);
    dispatch(getUserFailure());
  }
};

export const deleteUser = (username) => async (dispatch) => {
  try {
    console.log(username);
    dispatch(deleteUserReq());
    const response = await axios.delete(`${baseUrl}/api/user/${username}`);

    const user = response.data;
    console.log(user);
    dispatch(deleteUserSuccess(user));
  } catch (error) {
    console.log(error);
    dispatch(deleteUserFailure());
  }
};


export const getSellerReqs = (token) => async (dispatch) => {
  try {
    dispatch(sellerReq());
    // console.log(`token in admin actions ${token}`);
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.get(`${baseUrl}/api/user/reqSeller`,config);

    const users = response.data;
    dispatch(sellerReqSuccess(users));
  } catch (error) {
    console.log(error);
    dispatch(sellerReqFailure());
  }
};

