import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Base API slice with shared configuration
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://coingeko.burjx.com/", // TODO: create BASE_URL and use it
  }),
  endpoints: () => ({}),
  tagTypes: ["Coins", "CoinData"], // TODO: Create tag types
});
