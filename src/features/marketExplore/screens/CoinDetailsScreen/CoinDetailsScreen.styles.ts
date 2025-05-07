import { colors } from "@/src/ui/colors";
import {
  HORIZONTAL_SCREEN_PADDING,
  scaleHeight,
  scaleWidth,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
} from "@/src/ui/metrics";
import { typographyStyles } from "@/src/ui/typographyStyles";
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
    zIndex: 1,
  },
  backButtonText: {
    color: colors.white,
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
    ...typographyStyles.body,
  },
  priceContainer: {
    marginBottom: scaleHeight(30),
  },
  priceText: {
    color: colors.white,
    marginBottom: scaleHeight(10),
    ...typographyStyles.title,
  },
  changeContainer: {
    alignSelf: "flex-start",
    paddingHorizontal: scaleWidth(12),
    paddingVertical: scaleHeight(6),
    borderRadius: 20,
    backgroundColor: colors.lightGrey,
  },
  changeText: {
    ...typographyStyles.bodySmall,
  },
  chartContainer: {
    alignItems: "center",
    marginBottom: scaleHeight(20),
  },
  chart: {
    marginVertical: scaleHeight(8),
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
    paddingVertical: scaleHeight(8),
    paddingHorizontal: scaleWidth(15),
    borderRadius: 20,
  },
  activeTimeframeButton: {
    backgroundColor: colors.primary,
  },
  timeframeText: {
    color: colors.white,
    ...typographyStyles.bodySmall,
  },
  activeTimeframeText: {
    color: colors.black,
  },
  blueHaloContainer: {
    position: "absolute",
  },
  blueHaloImage: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT - scaleHeight(200),
  },
  yAxisTextStyle: {
    color: colors.placeholder,
    fontSize: 12,
  },
});
