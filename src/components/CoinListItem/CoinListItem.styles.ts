import { colors } from "@/src/ui/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  coinListItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 12,
    backgroundColor: "#1E1E1E",
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
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 16,
  },
  coinListName: {
    color: "#999999",
    fontSize: 12,
  },
  coinListItemRight: {
    alignItems: "flex-end",
  },
  priceChangeContainer: {
    marginBottom: 5,
  },
  priceChangeBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    fontSize: 12,
    fontWeight: "bold",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },
  miniChart: {
    marginVertical: 5,
    borderRadius: 8,
  },
  coinListPrice: {
    color: "#FFFFFF",
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
