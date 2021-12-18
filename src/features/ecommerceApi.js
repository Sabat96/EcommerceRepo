import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

 const ecommerceApi = createApi({
  reducerPath: "ecommerceApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
  }),
  endpoints: (builder) => ({


    getProducts: builder.query({
      query: () => `products`,
    }),

    // getProductById: builder.query({
    //   query: ({id}) => `products`,
    // }),

     getProductById: builder.query({
      query: ({ id }) => ({
        url: `products/${id}`,
        method: "GET",
      }),
    }),


    // login: builder.mutation({
    //   query: ({ email, password }) => ({
    //     url: `login`,
    //     method: "POST",
    //     body: { email, password },
    //   }),
    // }),
    // register: builder.mutation({
    //   query: ({ username, email, password }) => ({
    //     url: `register`,
    //     method: "POST",
    //     body: { username, email, password },
    //   }),
    // }),
  }),
});

// export const { useGetProductsQuery, useLoginMutation, useRegisterMutation } = ecommerceApi;
export const { useGetProductsQuery, useGetProductByIdQuery } = ecommerceApi;
export default ecommerceApi;