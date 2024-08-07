import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/api",
    prepareHeaders: (headers, { getState }) => {
      const token = localStorage.getItem('token') || '';
      // console.log(token);
    
      if (token) {
        headers.set('Authorization', `${token}`);
      }
      return headers;
    },
  }),

  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: info => ({
        url: "/login",
        method: "POST",
        body: info,
      })
    }),
    registerUser: builder.mutation({
      query: (user) => ({
        url: '/register',
        method: 'POST',
        body: user,
      })
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `/user/${id}`,
        method: 'DELETE',
      })
    }),
    findUser: builder.query({
      query: (id) =>
      ({
        url:
          `/user/${id}`
      })
    }),
    getAllUser: builder.query({
      // query: () => '/users',
      query: ()=>({
        url: '/users',
        method: 'GET'
      })
    }),
    updateUser: builder.mutation({
      query: ({ id, data }) => ({
        url: `/user/${id}`,
        method: 'PUT',
        body: data,
      })
    }),

  }),
});

export const {
  useLoginUserMutation,
  useDeleteUserMutation,
  useFindUserQuery,
  useGetAllUserQuery,
  useRegisterUserMutation,
  useUpdateUserMutation,
} = apiSlice;