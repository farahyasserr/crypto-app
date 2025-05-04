import { colors } from "@/src/ui/colors";
import { scaleHeight } from "@/src/ui/metrics";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.white,
    marginTop: scaleHeight(10),
    marginBottom: scaleHeight(20),
  },
  loader: {
    marginTop: scaleHeight(50),
  },
  loaderContainer: {
    padding: 20,
    alignItems: "center",
  },
});
