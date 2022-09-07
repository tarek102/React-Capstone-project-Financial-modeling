import { configureStore } from "@reduxjs/toolkit";
import cryptoReducer from "./crypto/cryptoReducer";

const store = configureStore({
  reducer: {
    crypto: cryptoReducer,
  },
});

export default store;


