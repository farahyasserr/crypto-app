// TODO: Create BASE_URL and use it in the api endpoints

const apiEndpoints = {
  getAllCoins: (currency: string, page: number, pageSize: number) =>
    `https://coingeko.burjx.com/coin-prices-all?currency=${currency}&page=${page}&pageSize=${pageSize}`,
  getCoinOhlc: (productId: number, days: string) =>
    `https://coingeko.burjx.com/coin-ohlc?productId=${productId}&days=${days}`,
};

export default apiEndpoints;
