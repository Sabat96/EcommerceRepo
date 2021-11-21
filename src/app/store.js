import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query';
import { ProductsApi } from "../services/ProductsApi";

import userSlice from "../features/userSlice";
// import CardSlice from "../features/CardSlice";

export const store = configureStore({
  reducer: {
    /* count: countReducer */
    user: userSlice,
    // card: CardSlice,
    [ProductsApi.reducerPath]: ProductsApi.reducer,

  },
   middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ProductsApi.middleware),
});

setupListeners(store.dispatch)