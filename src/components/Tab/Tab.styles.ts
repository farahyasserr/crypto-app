import { colors } from "@/src/ui/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
});
