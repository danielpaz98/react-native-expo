import { StyleSheet } from "react-native";
// CONSTANTS
import { COLORS } from "@/constants/colors";

export const styles = {
  default: {
    color: "white",
    fontFamily: "SpaceMono",
  },
  variants: StyleSheet.create({
    h1: {
      color: COLORS.white,
      fontSize: 70,
      fontWeight: 400,
      textAlign: "right",
    },
    h2: {
      color: COLORS.graniteGray,
      fontSize: 40,
      fontWeight: 300,
      textAlign: "right",
    },
  }),
};
