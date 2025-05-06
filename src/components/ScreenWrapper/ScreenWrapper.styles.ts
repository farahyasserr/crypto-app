import { colors } from "@/src/ui/colors";
import { Platform, StyleSheet } from "react-native";

const createStyles = (noSafeArea?: boolean, backgroundColor?: string) =>
  StyleSheet.create({
    safeArea: {
      backgroundColor: backgroundColor ? backgroundColor : colors.background,
      paddingTop: noSafeArea ? 0 : Platform.OS === "ios" ? 0 : 20,
      flex: 1,
    },
  });

export { createStyles };
