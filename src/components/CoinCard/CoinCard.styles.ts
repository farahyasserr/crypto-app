import { colors } from "@/src/ui/colors";
import { scaleWidth } from "@/src/ui/metrics";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  coinCard: {
    backgroundColor: colors.darkGrey,
    borderRadius: 12,
    padding: 16,
    flex: 0,
    width: scaleWidth(180),
  },
  coinInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  coinIcon: {
    width: 30,
    height: 30,
    marginRight: scaleWidth(8),
  },
  coinSymbol: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: 16,
  },
  coinName: {
    color: colors.white,
    fontSize: 12,
    opacity: 0.5,
  },
  chartContainer: {
    marginVertical: 10,
    alignItems: "center",
  },
  chart: {
    borderRadius: 8,
  },
  priceContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  price: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: 16,
  },
  priceChange: {
    fontSize: 14,
    fontWeight: "bold",
  },
  priceUp: {
    color: colors.primary,
  },
  priceDown: {
    color: colors.red,
  },
});
