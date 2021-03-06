export const CoinList = () =>
  `https://api.coingecko.com/api/v3/coins/markets?vs_currency=cad&order=market_cap_desc&per_page=100&page=1&sparkline=false`;

export const SingleCoin = (id: number) =>
  `https://api.coingecko.com/api/v3/coins/${id}?tickers=true&market_data=true&community_data=true&developer_data=false&sparkline=true`;

export const HistoricalChart = (id: number, days = 365) =>
  `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=cad&days=${days}`;

export const TrendingCoins = () =>
  `https://api.coingecko.com/api/v3/coins/markets?vs_currency=cad&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`;