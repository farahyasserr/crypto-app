import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "./api";

export enum Tags {
  COINS = "Coins",
  COIN_DATA = "CoinData",
}

// Base API slice with shared configuration
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: () => ({}),
  tagTypes: [Tags.COINS, Tags.COIN_DATA],
});
