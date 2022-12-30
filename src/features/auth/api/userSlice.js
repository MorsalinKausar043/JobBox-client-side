import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const userSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_DB_URL,
  }),

  endpoints: (builder) => ({}),
});

