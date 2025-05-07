import apiEndpoints from "../api";
import { apiSlice, Tags } from "../apiSlice";
import {
  GetAllCoinsRequest,
  GetAllCoinsResponse,
  GetCoinOHLCRequest,
  GetCoinOHLCResponse,
} from "./coinApiTypes";

export const coinApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // Get all coins with pagination
    getAllCoins: builder.query<GetAllCoinsResponse, GetAllCoinsRequest>({
      query: ({ page, pageSize }) => ({
        url: apiEndpoints.getAllCoins("usd", page, pageSize),
      }),
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      // Merge incoming data with existing data
      merge: (currentCache, newItems) => {
        if (newItems.page === 1) {
          return newItems;
        }

        return {
          ...newItems,
          data: [...currentCache.data, ...newItems.data],
        };
      },
      // Only trigger cache update if the page is different
      forceRefetch({ currentArg, previousArg }) {
        return currentArg?.page !== previousArg?.page;
      },
      providesTags: [Tags.COINS],
    }),

    // Get OHLC data for a specific coin
    getCoinOHLC: builder.query<GetCoinOHLCResponse, GetCoinOHLCRequest>({
      query: ({ productId, days }) => ({
        url: apiEndpoints.getCoinOhlc(productId, days),
      }),
      providesTags: (result, error, arg) => [
        { type: Tags.COIN_DATA, id: arg.productId },
      ],
    }),
  }),
});

// Export the auto-generated hooks
export const { useGetAllCoinsQuery, useGetCoinOHLCQuery } = coinApi;
