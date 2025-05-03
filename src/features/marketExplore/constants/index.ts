import { ActiveTab, ActiveTimeframe, TabConfig } from "../types";

export const MARKET_SCREEN_TABS: TabConfig[] = [
  {
    key: ActiveTab.FEATURED,
    icon: "star",
    iconColor: "#FFD700",
    labelKey: "market.FEATURED",
  },
  {
    key: ActiveTab.TOP_GAINERS,
    icon: "rocket",
    iconColor: "#FF4500",
    labelKey: "market.TOP_GAINERS",
  },
  {
    key: ActiveTab.TOP_LOSERS,
    icon: "trending-down",
    iconColor: "#FF0000",
    labelKey: "market.TOP_LOSERS",
  },
];

export const PRODUCT_DETAILS_TIMEFRAMES = [
  {
    key: ActiveTimeframe.ONE_HOUR,
    labelKey: "market.ONE_HOUR",
  },
  {
    key: ActiveTimeframe.ONE_DAY,
    labelKey: "market.ONE_DAY",
  },
  {
    key: ActiveTimeframe.ONE_WEEK,
    labelKey: "market.ONE_WEEK",
  },
  {
    key: ActiveTimeframe.ONE_MONTH,
    labelKey: "market.ONE_MONTH",
  },
  {
    key: ActiveTimeframe.ONE_YEAR,
    labelKey: "market.ONE_YEAR",
  },
  {
    key: ActiveTimeframe.ALL,
    labelKey: "market.ALL",
  },
];
