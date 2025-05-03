import { Ionicons } from "@expo/vector-icons";

enum ActiveTab {
  FEATURED = "featured",
  TOP_GAINERS = "topGainers",
  TOP_LOSERS = "topLosers",
}

interface TabConfig {
  key: ActiveTab;
  icon: keyof typeof Ionicons.glyphMap;
  iconColor: string;
  labelKey: string;
}

enum ActiveTimeframe {
  ONE_HOUR = "1H",
  ONE_DAY = "1D",
  ONE_WEEK = "1W",
  ONE_MONTH = "1M",
  ONE_YEAR = "1Y",
  ALL = "ALL",
}

export { ActiveTab, ActiveTimeframe, TabConfig };
