import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    position: "absolute",
    top: 50,
    paddingHorizontal: 20,
    zIndex: 100,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  logo: {
    width: 100,
    height: 25,
    alignSelf: "flex-start",
    resizeMode: "contain",
  },
  menu: {
    width: 25,
    height: 25,
    alignSelf: "flex-end",
    resizeMode: "contain",
  },
});

export default styles;
