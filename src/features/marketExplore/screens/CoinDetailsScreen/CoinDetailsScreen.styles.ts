import { colors } from "@/src/ui/colors";
import {
  HORIZONTAL_SCREEN_PADDING,
  scaleHeight,
  scaleWidth,
} from "@/src/ui/metrics";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkGrey,
    padding: 16,
  },
  mainContainer: {
    paddingHorizontal: HORIZONTAL_SCREEN_PADDING,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.darkGrey,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: scaleHeight(10),
    marginBottom: scaleHeight(30),
    justifyContent: "space-between",
  },
  placeholderView: {
    width: 48,
    height: 48,
  },
  backButton: {
    width: 48,
    height: 48,
    borderRadius: 48 / 2,
    backgroundColor: colors.grey,
    justifyContent: "center",
    alignItems: "center",
    marginEnd: scaleWidth(15),
  },
  backButtonText: {
    color: colors.white,
    fontSize: 20,
  },
  coinInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  coinLogo: {
    width: 24,
    height: 24,
    borderRadius: 24 / 2,
    marginEnd: scaleWidth(10),
  },
  coinName: {
    color: colors.white,
    fontSize: 20,
    fontWeight: "600",
  },
  priceContainer: {
    marginBottom: 30,
  },
  priceText: {
    color: colors.white,
    fontSize: 36,
    fontWeight: "bold",
    marginBottom: 10,
  },
  changeContainer: {
    alignSelf: "flex-start",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    backgroundColor: colors.lightGrey,
  },
  changeText: {
    fontSize: 16,
    fontWeight: "600",
  },
  chartContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  chart: {
    marginVertical: 8,
    borderRadius: 16,
  },
  timeframeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: scaleHeight(20),
    paddingHorizontal: scaleWidth(10),
    backgroundColor: colors.grey,
    borderRadius: 30,
    padding: 5,
  },
  timeframeButton: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  activeTimeframeButton: {
    backgroundColor: colors.primary,
  },
  timeframeText: {
    color: colors.white,
    fontWeight: "500",
  },
  activeTimeframeText: {
    color: colors.black,
  },
});
