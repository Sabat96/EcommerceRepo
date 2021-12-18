import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query';
// import { ProductsApi } from "../services/ProductsApi";
import  ecommerceApi from "../features/ecommerceApi.js"
import userSlice from "../features/userSlice";
import ProductSlice from "../features/ProductSlice";

export const store = configureStore({
  reducer: {
    /* count: countReducer */
    user: userSlice,
    Product: ProductSlice,
    [ecommerceApi.reducerPath]: ecommerceApi.reducer,

  },
  // middleware: (getDefaultMiddleware) => {
  //   getDefaultMiddleware().concat(ecommerceApi.middleware);
  // },
});

setupListeners(store.dispatch)