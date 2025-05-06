import { colors } from "@/src/ui/colors";
import { scaleHeight } from "@/src/ui/metrics";
import { typographyStyles } from "@/src/ui/typographyStyles";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 16,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: scaleHeight(10),
    marginBottom: scaleHeight(20),
  },
  header: {
    color: colors.white,
    ...typographyStyles.body,
  },
  loader: {
    marginTop: scaleHeight(50),
  },
  loaderContainer: {
    padding: 20,
    alignItems: "center",
  },
});
