import { configureStore } from "@reduxjs/toolkit";
import { Data } from "../Slices/RegisterSlice";

export default configureStore({
  reducer: {
    registerData: Data.reducer,
  },
});
