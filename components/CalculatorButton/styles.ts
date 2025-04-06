import { StyleSheet } from "react-native";
// CONSTANTS
import { COLORS } from "@/constants/colors";

export const styles = {
  ...StyleSheet.create({
    button: {
      height: 80,
      minWidth: 80,
      backgroundColor: COLORS.darkGray,
      borderRadius: 100,
      marginHorizontal: 10,
      justifyContent: "center",
    },
    text: {
      color: COLORS.white,
      padding: 10,
      fontSize: 30,
      fontWeight: 300,
      fontFamily: "SpaceMono",
      textAlign: "center",
    },
  }),
  // BUTTON STATES
  states: StyleSheet.create({
    pressed: { opacity: 0.8 },
    wide: { minWidth: 180 },
  }),
};
