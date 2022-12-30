import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "../features/auth/api/userSlice";
import authSlice from "../features/auth/authSlice";

const store = configureStore({
  reducer: {
    [userSlice.reducerPath]: userSlice.reducer,
    auth: authSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userSlice.middleware),
});

export default store;
