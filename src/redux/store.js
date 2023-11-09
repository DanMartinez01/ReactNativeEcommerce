import { configureStore } from "@reduxjs/toolkit";
import homeSlice from "./slices/homeSlice";
import authSlice from "./slices/authSlice";
import { ecApi } from "../services/ecApi";

export const store = configureStore({
  reducer: {
    homeSlice,
    [ecApi.reducerPath]: ecApi.reducer,
    authSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ecApi.middleware),
});
