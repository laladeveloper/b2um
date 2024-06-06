// userActions.js
import axios from "axios";
import {
  loginFail,
  loginRequest,
  loginSuccess,
  logoutFail,
  logoutRequest,
  logoutSuccess,
  registerFail,
  registerRequest,
  registerSuccess,
  updateUserFail,
  updateUserRequest,
  updateUserSuccess,
} from "../reducers/userReducer";
const baseUrl = import.meta.env.VITE_BACKEND_URL; // Include protocol in base URL

export const registerUser = (userData) => async (dispatch) => {
  try {
    dispatch(registerRequest());

    const response = await fetch(`${baseUrl}/api/user/new`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(userData),
    });

    const data = await response.json();

    if (data) {
      localStorage.setItem("user", JSON.stringify(data));
    }

    if (data.success) {
      dispatch(registerSuccess(data));
      return data;
    } else {
      dispatch(registerFail(data));
      throw new Error(data.message);
    }
  } catch (error) {
    dispatch(registerFail(error));
  }
};

export const loginUser = (username, password) => async (dispatch) => {
  try {
    dispatch(loginRequest());
    const response = await fetch(`${baseUrl}/api/user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // body:(username, password),
      body: JSON.stringify({ username, password }),

      // mode: "no-cors", // Set request mode to 'no-cors'
    });

    const data = await response.json();
    console.log(JSON.stringify(data));
    console.log(data);
    if (data.success === true) {
      localStorage.setItem("user", JSON.stringify(data));
      dispatch(loginSuccess(data));
      return data;
    } else if (response.status === 401) {
      const failMsg = {
        success: false,
        message: `Invalid username or password`,
      };
      dispatch(loginFail(data));

      return;
    }
  } catch (error) {
    console.log(error);
    const failMsg = {
      success: false,
      message: `Invalid username or password`,
    };
    dispatch(loginFail(failMsg));
  }
};

export const updateUser =  (token, updateData) => async (dispatch) => {
  try {

    // console.log(updateData);
    dispatch(updateUserRequest());
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      
      },
    };
    // make request with axios
    const response = await axios.put(
      `${baseUrl}/api/user/me`,
      updateData,
      config
    );
    
    // console.log(response);
    const data = await response.data;
    // console.log(data);

    if (data) {
      localStorage.removeItem("user");

      localStorage.setItem("user", JSON.stringify(data));
    }
    
    if (data.success) {
      localStorage.removeItem("user");
  
      localStorage.setItem("user", JSON.stringify(data));
      dispatch(updateUserSuccess(data));
      return data;
    } else {
      dispatch(updateUserFail(data));
      throw new Error(data.message);
    }
  } catch (error) {
    dispatch(registerFail(error));
  }
};

export const logout = () => async (dispatch) => {
  try {
    dispatch(logoutRequest());
    const successMsg = {
      success: true,
      message: "Logged out Successful",
    };
    dispatch(logoutSuccess(successMsg));
    localStorage.removeItem("user");
  } catch (error) {
    console.log(error);
    const failMsg = {
      success: false,
      message: "Logout Failed. Please try again later",
    };
    dispatch(logoutFail(failMsg));
  }
};
