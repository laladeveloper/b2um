import { createSlice } from "@reduxjs/toolkit";

const user = JSON.parse(localStorage.getItem("user"));
console.log(user);
const initialState = {
  user: user ? user.user : null,
  isAuthenticated: user ? user.success : false,
  loading: false,
  success: user ? user.success : null,
  token: user ? user.token : null,
  failure: null,
  message: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    registerRequest: (state) => {
      return {
        ...state,
        loading: true,
      };
    },
    registerSuccess: (state, action) => {
      // console.log(action.payload);
      state.loading = false;
      state.isAuthenticated = action.payload.success;
      state.user = action.payload.user;
      state.success = action.payload.message;
      state.token = action.payload.token;

      // console.log(`register success`);
    },
    registerFail: (state, action) => {
      // console.log(action);
      state.loading = false;
      state.isAuthenticated = action.payload.success;
      state.user = null;
      state.failure = action.payload.message;
      // console.log(`userreducer ${state.failure}`);
    },
    loginRequest: (state) => {
      return {
        ...state,
        loading: true,
      };
    },
    loginSuccess: (state, action) => {
      console.log(action.payload);
      state.loading = false;
      state.isAuthenticated = action.payload.success;
      state.user = action.payload.user;
      state.success = action.payload.message;
      state.token = action.payload.token;
    },
    loginFail: (state, action) => {
      // console.log(action.payload);
      state.loading = false;
      state.isAuthenticated = action.payload.success;
      state.user = null;
      state.failure = action.payload.message;
      // console.log(action.payload.message);
    },
    getUserRequest: (state) => {
      return {
        ...state,
        loading: true,
      };
    },
    getUserSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = action.payload.success;
      state.user = action.payload.user;
      state.success = action.payload.message;
      state.token = action.payload.token;
    },
    getUserFail: (state, action) => {
      // console.log(action.payload);
      state.loading = false;
      state.isAuthenticated = action.payload.success;
      state.user = null;
      state.failure = action.payload.message;
      // console.log(action.payload.message);
    },

    logoutRequest: (state) => {
      state.loading = true;
    },

    logoutSuccess: (state, action) => {
      state.loading = false;
      state.user = null;
      state.isAuthenticated = false;
      state.message = action.payload.message;
      state.success = action.payload.message;
      // console.log(action.payload.message);
    },
    logoutFail: (state, action) => {
      state.loading = false;
      state.failure = action.payload.message;
    },

    updateUserRequest: (state) => {
      return {
        ...state,
        loading: true,
      };
    },
    updateUserSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = action.payload.success;
      state.user = action.payload.user;
      state.success = action.payload.message;
    },
    updateUserFail: (state, action) => {
      // console.log(action.payload);
      return {
        ...state,
        loading: false,
        failure:action.payload.message
      }
      
    },
    clearMsgs: (state) => {
      state.success = null;
      state.failure = null;
      state.message = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  registerRequest,
  registerSuccess,
  registerFail,
  loginRequest,
  loginSuccess,
  loginFail,
  getUserRequest,
  getUserSuccess,
  getUserFail,
  logoutRequest,
  logoutSuccess,
  logoutFail,
  updateUserRequest,
  updateUserSuccess,
  updateUserFail,
  clearMsgs,
} = userSlice.actions;

export default userSlice.reducer;
