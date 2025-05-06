import { colors } from "@/src/ui/colors";
import { scaleHeight, scaleWidth } from "@/src/ui/metrics";
import { typographyStyles } from "@/src/ui/typographyStyles";
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
    paddingHorizontal: scaleWidth(10),
  },
  allCoinsTitle: {
    color: colors.white,
    ...typographyStyles.body,
  },
});
