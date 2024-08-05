import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
  reducerPath: 'users',
  endpoints: (build) => ({
    getUserByName: build.query({
      query: (name) => `${name}`,
    }),
  }),
})


export const { useGetUserByNameQuery } = api