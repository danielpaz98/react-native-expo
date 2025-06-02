import { View } from "react-native";
// UTILS
import { cn } from "@/utils";
// HOOKS
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface Props extends React.ComponentProps<typeof View> {
  safe?: boolean;
}

export default function ThemedView({ children, className, style, safe, ...restProps }: Props) {
  const classNames = cn("bg-light-background dark:bg-dark-background", className);
  const safeArea = useSafeAreaInsets();
  const paddingTop = safe ? safeArea.top : 0;

  return (
    <View style={[{ paddingTop }, style]} className={classNames} {...restProps}>
      {children}
    </View>
  );
}
