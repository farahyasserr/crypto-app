import { Coin, CoinOHLC } from "../../models/Coin";

// Get All Coins
interface GetAllCoinsRequest {
  page: number;
  pageSize: number;
}

interface GetAllCoinsResponse {
  data: Coin[];
  page: number;
  pageSize: number;
  totalItems: number;
  totalPages: number;
}

// Get Coin OHLC
interface GetCoinOHLCRequest {
  productId: number;
  days: "1" | "7" | "30" | "365" | "max";
}

type GetCoinOHLCResponse = CoinOHLC[];

export type {
  GetAllCoinsRequest,
  GetAllCoinsResponse,
  GetCoinOHLCRequest,
  GetCoinOHLCResponse,
};
