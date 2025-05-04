import { colors } from "@/src/ui/colors";
import { HORIZONTAL_SCREEN_PADDING } from "@/src/ui/metrics";
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
    marginTop: 10,
    marginBottom: 30,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#2A2A2A",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  backButtonText: {
    color: "white",
    fontSize: 20,
  },
  coinInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  coinLogo: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 10,
  },
  coinName: {
    color: "white",
    fontSize: 20,
    fontWeight: "600",
  },
  priceContainer: {
    marginBottom: 30,
  },
  priceText: {
    color: "white",
    fontSize: 36,
    fontWeight: "bold",
    marginBottom: 10,
  },
  changeContainer: {
    alignSelf: "flex-start",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
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
    marginTop: 20,
    paddingHorizontal: 10,
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
    color: "white",
    fontWeight: "500",
  },
  activeTimeframeText: {
    color: colors.black,
  },
});
