import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#121212",
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginTop: 10,
    marginBottom: 20,
  },
  loader: {
    marginTop: 50,
  },
  allCoinsContainer: {
    flex: 1,
  },
  allCoinsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  allCoinsTitle: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#2A2A2A",
    borderRadius: 20,
    paddingHorizontal: 10,
    flex: 1,
    marginLeft: 10,
  },
  searchInput: {
    color: "#FFFFFF",
    flex: 1,
    height: 40,
    paddingLeft: 5,
  },
  searchIcon: {
    marginLeft: 5,
  },
  loaderContainer: {
    padding: 20,
    alignItems: "center",
  },
});
