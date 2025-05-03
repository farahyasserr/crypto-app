import { colors } from "@/src/ui/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: "row",
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#333",
  },
  tab: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    marginRight: 20,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: "#FFD700",
  },
  tabText: {
    color: colors.white,
    marginLeft: 5,
    fontSize: 16,
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
});
