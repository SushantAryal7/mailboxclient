// store.js
import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer from "./firebaseSlice";

const store = configureStore({
  reducer: authSliceReducer,
});

export default store;
