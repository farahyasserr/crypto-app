import { colors } from "@/src/ui/colors";
import { scaleWidth } from "@/src/ui/metrics";
import { typographyStyles } from "@/src/ui/typographyStyles";
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
    marginStart: scaleWidth(5),
    ...typographyStyles.body,
  },
});
