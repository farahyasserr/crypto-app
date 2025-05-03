export interface Coin {
  productId: number;
  id: string;
  name: string;
  symbol: string;
  image: string;
  currentPrice: number;
  priceChangePercentage24h: number;
  sparkline: number[];
  marketCap: number;
  tradingVolume: number;
}

export type PriceData = {
  open: number;
  high: number;
  low: number;
  close: number;
};

export interface CoinOHLC {
  date: number; // Unix timestamp in milliseconds
  usd: PriceData;
  aed: PriceData;
  [currencyCode: string]: PriceData | number;
}
