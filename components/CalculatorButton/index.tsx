import {
  Pressable,
  Text,
  type StyleProp,
  type ViewStyle,
  type TextStyle,
  type GestureResponderEvent,
} from "react-native";
// PLUGINS
import * as Haptics from "expo-haptics";
// STYLES
import { styles } from "./styles";
// CONSTANTS
import { COLORS } from "@/constants/colors";

interface Props extends React.ComponentProps<typeof Pressable> {
  children?: React.ReactNode;
  wide?: boolean;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  color?: keyof typeof COLORS;
  textColor?: keyof typeof COLORS;
}

export default function CalculatorButton({
  children,
  style,
  textStyle,
  wide = false,
  color = "darkGray",
  textColor = "white",
  onPress,
  ...restProps
}: Props) {
  const handleOnPress = (e: GestureResponderEvent) => {
    Haptics.selectionAsync();
    onPress?.(e);
  };

  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        pressed && styles.states.pressed,
        wide && styles.states.wide,
        { backgroundColor: COLORS[color] },
        style,
      ]}
      onPress={handleOnPress}
      {...restProps}
    >
      <Text style={[styles.text, { color: COLORS[textColor] }, textStyle]}>{children}</Text>
    </Pressable>
  );
}
