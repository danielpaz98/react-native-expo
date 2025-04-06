import { Text } from "react-native";
// STYLES
import { styles } from "./styles";

interface Props extends React.ComponentProps<typeof Text> {
  variant?: "h1" | "h2";
}

export default function ThemeText({ children, variant = "h1", ...restProps }: Props) {
  return (
    <Text
      style={[styles.default, styles.variants[variant]]}
      numberOfLines={1}
      adjustsFontSizeToFit
      {...restProps}
    >
      {children}
    </Text>
  );
}
