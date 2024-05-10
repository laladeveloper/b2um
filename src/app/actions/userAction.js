// userActions.js

import {
  loginFail,
  loginRequest,
  loginSuccess,
  logoutFail,
  logoutRequest,
  logoutSuccess,
  registerFail,
  registerRequest,
  registerSuccess
} from "../reducers/userReducer";
// http://localhost:5173/register
const baseUrl = import.meta.env.VITE_BACKEND_URL; // Include protocol in base URL
// console.log(baseUrl);
// console.log(JSON.stringify(baseUrl));
export const registerUser = (userData) => async (dispatch) => {
  try {
    dispatch(registerRequest());
    console.log(userData);
    console.log(JSON.stringify(baseUrl));
    console.log(`${baseUrl}/api/user/new`);
    const response = await fetch(`${baseUrl}/api/user/new`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // body: userData,
      body: JSON.stringify(userData),
      // mode: "no-cors", // Set request mode to 'no-cors'
      // body: JSON.stringify(userData),
    });
    

     console.log(response);
    const data = await response.json();
     if (data) {
       localStorage.setItem("user", JSON.stringify(data));
     }
     console.log(data)
    if (data.success) {
      // Dispatch an action to indicate successful registration
      dispatch(registerSuccess(data));
      return data;
    } else {
      // Dispatch an action to indicate registration failure
      dispatch(registerFail(data));
      throw new Error(data.message);
    }
  } catch (error) {
    // Dispatch an action to indicate registration failure
    console.log(error);
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

export const logout = () => async (dispatch)=>{
  try {
    dispatch(logoutRequest());
    const successMsg ={
      success:true,
      message:"Logout Successful"
    }
    dispatch(logoutSuccess(successMsg));
    localStorage.removeItem("user");
  } catch (error) {
    console.log(error);
    const failMsg = {
      success:false,
      message:"Logout Failed. Please try again later"
    }
    dispatch(logoutFail(failMsg))
  }
}
