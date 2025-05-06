import { scaleWidth } from "@/src/ui/metrics";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: "row",
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#333",
  },
  loader: {
    marginTop: 50,
  },
  featuredContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  scrollViewContent: {
    flexDirection: "row",
  },
  itemSeparator: {
    width: scaleWidth(10),
  },
});
