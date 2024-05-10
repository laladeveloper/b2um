
import axios from "axios";
import { getUserFailure, getUserReq, getUserSuccess, gettUsersFailure, gettUsersReq, gettUsersSuccess } from "../reducers/adminReducer";
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