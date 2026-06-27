import {
  createSlice,
  createAsyncThunk,
  isPending,
  isRejected,
} from "@reduxjs/toolkit";
import BaseURL from "../API/BaseURL";

export const LoginAPI = createAsyncThunk("Login/Data", async (LoginData) => {
  const response = await BaseURL.post("auth/login", LoginData);
  return response.data;
});

export const SignUpAPI = createAsyncThunk("SignUp/Data", async (SignUpData) => {
  const response = await BaseURL.post("auth/signup", SignUpData);
  return response.data;
});

export const RecoverAPI = createAsyncThunk("Recover/Data", async (RecoverData) => {
  const response = await BaseURL.post("auth/recover", RecoverData);
  return response.data;
});

export const Data = createSlice({
  name: "RegisterData",
  initialState: {
    isNewMember: false,
    hasForgetPassword: false,
    Buyer: true,
    agreeToTerms: false,
    isLoading: false,
    error: null,
    token: null,
  },
  reducers: {
    member: (state) => {
      state.isNewMember = !state.isNewMember;
    },
    Buyer: (state) => {
      state.Buyer = !state.Buyer;
      state.agreeToTerms = false;
    },
    agreeToTerms: (state) => {
      state.agreeToTerms = !state.agreeToTerms;
    },
    forgetPassword: (state) => {
      state.hasForgetPassword = !state.hasForgetPassword;
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(isPending(LoginAPI, SignUpAPI, RecoverAPI), (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addMatcher(isRejected(LoginAPI, SignUpAPI, RecoverAPI), (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(LoginAPI.fulfilled, (state, action) => {
        state.isLoading = false;
        state.token = action.payload.token;
      })
      .addCase(SignUpAPI.fulfilled, (state, action) => {
        state.isLoading = false;
        state.token = action.payload.token;
      })
      .addCase(RecoverAPI.fulfilled, (state) => {
        state.isLoading = false;
        state.hasForgetPassword = false; 
      });
  },
});

export const { member, Buyer, agreeToTerms, forgetPassword } = Data.actions;
export default Data.reducer;
