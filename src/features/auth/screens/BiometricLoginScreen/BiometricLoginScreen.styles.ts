import { colors } from "@/src/ui/colors";
import { HORIZONTAL_SCREEN_PADDING, scaleHeight } from "@/src/ui/metrics";
import { typographyStyles } from "@/src/ui/typographyStyles";
import { Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get("window");
const CIRCLE_SIZE = width * 0.6;

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
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
});
