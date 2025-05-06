import { colors } from "@/src/ui/colors";
import { scaleHeight } from "@/src/ui/metrics";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  coinListItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 12,
    backgroundColor: colors.grey2,
    borderRadius: 12,
    marginBottom: 10,
  },
  verticalContainer: {
    justifyContent: "space-between",
    flex: 1,
  },
  coinListItemLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  coinListIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  coinListSymbol: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: 16,
  },
  coinListName: {
    color: colors.placeholder,
    fontSize: 12,
  },
  coinListItemRight: {
    alignItems: "flex-end",
  },
  priceChangeContainer: {
    marginBottom: scaleHeight(5),
  },
  priceChangeBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    fontSize: 12,
    fontWeight: "bold",
    backgroundColor: colors.lightGrey,
  },
  miniChart: {
    marginVertical: 5,
    borderRadius: 8,
  },
  coinListPrice: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: 16,
  },
  priceUp: {
    color: colors.primary,
  },
  priceDown: {
    color: colors.red,
  },
});
