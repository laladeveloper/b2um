import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  success: null,
  allUsers: [],
  activeUsers:[],
  signleUser: null,
  sellerReqs:[],
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
      // console.log(action.payload);
    },
    getUserFailure: (state) => {
      state.loading = false;
    },
    deleteUserReq: (state) => {
      state.loading = true;
    },
    deleteUserSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
      state.success = action.payload.success;
      
    },
    deleteUserFailure: (state) => {
      state.loading = false;
    },
    sellerReq: (state) => {
      state.loading = true;
    },
    sellerReqSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
      state.success = action.payload.success;
      state.sellerReqs= action.payload.reqs;
      // console.log(action.payload);
      // console.log(action.payload.message);
      // console.log(action.payload.reqs);
    },
    sellerReqFailure: (state) => {
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
  deleteUserReq,
  deleteUserSuccess,
  deleteUserFailure,
  sellerReq,
  sellerReqSuccess,
  sellerReqFailure,
  clearMsgs,
} = adminSlice.actions;

export default adminSlice.reducer;
