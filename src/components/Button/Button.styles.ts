import { colors } from "@/src/ui/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  button: {
    paddingVertical: 13,
    paddingHorizontal: 10,
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  primary: {
    backgroundColor: colors.primary,
  },
  secondary: {
    backgroundColor: colors.blue,
  },
  disabled: {
    backgroundColor: colors.grey,
    opacity: 0.7,
  },
  fullWidth: {
    width: "100%",
  },
  autoWidth: {
    width: "auto",
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: 16,
    color: colors.black,
  },
});
