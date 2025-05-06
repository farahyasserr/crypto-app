import { colors } from "@/src/ui/colors";
import { HORIZONTAL_SCREEN_PADDING, scaleHeight } from "@/src/ui/metrics";
import { typographyStyles } from "@/src/ui/typographyStyles";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundDark,
  },
  mainContainer: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: HORIZONTAL_SCREEN_PADDING,
    paddingBottom: scaleHeight(20),
  },
  title: {
    ...typographyStyles.title,
    color: colors.white,
    width: "100%",
    marginTop: 20,
  },
  fingerprintContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: "60%",
  },
  buttonContainer: {
    width: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: scaleHeight(60),
  },
});
