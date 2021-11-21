import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const ProductsApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://serene-eyrie-59879.herokuapp.com/' }),
  endpoints: (builder) => ({
    getcategoryByName: builder.query({
      query: () => `categories`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetcategoryByNameQuery } = ProductsApi