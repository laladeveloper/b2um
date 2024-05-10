import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  success: null,
  allUsers: [],
  signleUser: null,
  failure: null,
  message: null,
};

export const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    gettUsersReq: (state) => {
      state.loading = true;
    },
    gettUsersSuccess: (state, action) => {
      state.loading = false;
      state.allUsers = action.payload.users;
      state.success = action.payload.success;
      // console.log(action.payload);
    },
    gettUsersFailure: (state) => {
      state.loading = false;
    },
    getUserReq: (state) => {
      state.loading = true;
    },
    getUserSuccess: (state, action) => {
      state.loading = false;
      state.signleUser = action.payload.user;
      state.success = action.payload.success;
      console.log(action.payload);
    },
    getUserFailure: (state) => {
      state.loading = false;
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
  gettUsersReq,
  gettUsersSuccess,
  gettUsersFailure,
  getUserReq,
  getUserSuccess,
  getUserFailure,
  clearMsgs,
} = adminSlice.actions;

export default adminSlice.reducer;
