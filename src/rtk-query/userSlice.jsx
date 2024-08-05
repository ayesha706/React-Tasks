import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api" }),
  endpoints: (builder) => ({
    loginUsers: builder.mutation({
      query: info => ({
        url: "/login",
        method: "POST",
        body: info,
      })
    }),

  }),
});

export const { useLoginUsersMutation} = apiSlice;