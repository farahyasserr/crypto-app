import { colors } from "@/src/ui/colors";
import { HORIZONTAL_SCREEN_PADDING, scaleHeight } from "@/src/ui/metrics";
import { typographyStyles } from "@/src/ui/typographyStyles";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    paddingHorizontal: HORIZONTAL_SCREEN_PADDING,
    alignItems: "center",
    flex: 1,
  },
  title: {
    ...typographyStyles.title,
    color: colors.white,
    width: "100%",
    marginTop: scaleHeight(20),
  },
  fingerprintContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
