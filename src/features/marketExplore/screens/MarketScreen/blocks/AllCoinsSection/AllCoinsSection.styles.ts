import { colors } from "@/src/ui/colors";
import { scaleHeight, scaleWidth } from "@/src/ui/metrics";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  allCoinsContainer: {
    flex: 1,
  },
  allCoinsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: scaleHeight(15),
  },
  allCoinsTitle: {
    color: colors.white,
    fontSize: 18,
    fontWeight: "bold",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.grey,
    borderRadius: 100,
    paddingHorizontal: scaleWidth(10),
    flex: 1,
    marginStart: scaleWidth(10),
  },
  searchInput: {
    color: colors.white,
    flex: 1,
    height: "auto",
    minHeight: scaleHeight(40),
    paddingStart: scaleWidth(5),
  },
  searchIcon: {
    marginStart: scaleWidth(5),
  },
});
