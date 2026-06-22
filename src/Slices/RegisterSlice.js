import { createSlice } from "@reduxjs/toolkit";

export const Data = createSlice({
  name: "RegisterData",
  initialState: {
    buyerSignUpData: {},
    sellerSignUpData: {},
    login: {},
    isNewMember: false,
    hasForgetPassword: false,
    recoverData: {},
    Buyer: true,
  },
  reducers: {
    member: (state, action) => {
      state.isNewMember = !state.isNewMember;
      state.login = {};
      state.buyerSignUpData = {};
      state.sellerSignUpData = {};
    },
    Buyer: (state, action) => {
      state.Buyer = !state.Buyer;
      state.buyerSignUpData ={}
      state.sellerSignUpData ={}
    },
        signUp: (state, action) => {
      const [label, value] = action.payload;
      if (state.isNewMember) {
        if (state.Buyer) {
          state.buyerSignUpData[label] = value;
        } else {
          state.sellerSignUpData[label] = value;
        }
      }
    },
    login: (state, action) => {
      const [label, value] = action.payload;
      if (state.isNewMember !== true && state.hasForgetPassword === false) {
        state.login[label] = value;
      }
    },
    forgetPassword: (state, action) => {
      state.hasForgetPassword = !state.hasForgetPassword;
      state.login = {};
      state.recoverData = {};
    },
    recoverAccount: (state, action) => {
      const [label, value] = action.payload;
      if (state.hasForgetPassword) {
        state.recoverData[label] = value;
      }
    },
  },
});

export const { member, signUp, login, forgetPassword, recoverAccount , Buyer } =
  Data.actions;
export default Data.reducer;
