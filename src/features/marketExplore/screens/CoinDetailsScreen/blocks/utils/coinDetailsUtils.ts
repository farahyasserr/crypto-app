import { ActiveTimeframe } from "@/src/features/marketExplore/types";

// Convert timeframe to days for the API
export const getTimeframeInDays = (
  timeframe: ActiveTimeframe
): "1" | "7" | "30" | "365" | "max" => {
  switch (timeframe) {
    case ActiveTimeframe.ONE_HOUR:
      return "1";
    case ActiveTimeframe.ONE_DAY:
      return "1";
    case ActiveTimeframe.ONE_WEEK:
      return "7";
    case ActiveTimeframe.ONE_MONTH:
      return "30";
    case ActiveTimeframe.ONE_YEAR:
      return "365";
    case ActiveTimeframe.ALL:
      return "max";
    default:
      return "1";
  }
};
