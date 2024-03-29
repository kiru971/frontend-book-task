import { configureStore } from "@reduxjs/toolkit";
import LoginReducer from "./slice/LoginSlice";
import BookReducer from "./slice/BookSlice"


const Store = configureStore({
  reducer: {
    user: LoginReducer,
    book:BookReducer
   
  },
});

export default Store;