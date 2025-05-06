import { colors } from "@/src/ui/colors";
import { scaleHeight, scaleWidth } from "@/src/ui/metrics";
import { typographyStyles } from "@/src/ui/typographyStyles";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.grey,
    borderRadius: 100,
    paddingHorizontal: scaleWidth(10),
    marginStart: scaleWidth(10),
  },
  searchInput: {
    color: colors.white,
    flex: 1,
    height: "auto",
    minHeight: scaleHeight(40),
    paddingStart: scaleWidth(5),
    paddingVertical: scaleHeight(8),
    ...typographyStyles.body,
  },
  icon: {
    marginStart: scaleWidth(5),
  },
});
