import { Pressable, View } from "react-native";
// PLUGINS
import { Ionicons } from "@expo/vector-icons";
// UTILS
import { cn } from "@/utils";
// COMPONENTS
import { ThemedText } from "@/components/shared";
import { forwardRef } from "react";
import { Colors } from "@/constants/Colors";
import { useThemeColor } from "@/hooks/useThemeColor";

interface Props extends React.ComponentProps<typeof Pressable> {
  children?: React.ReactNode;
  icon: keyof typeof Ionicons.glyphMap;
  isFirst?: boolean;
  isLast?: boolean;
}

const MenuItem = forwardRef<React.ComponentRef<typeof Pressable>, Props>(
  ({ children, className, icon, isFirst = false, isLast = false, ...restProps }, ref) => {
    const classNames = cn(
      "bg-white dark:bg-black/15 px-5 py-2",
      { "pt-2.5": isFirst },
      { "pb-2.5": isLast },
      className,
    );
    const primaryColor = useThemeColor({}, "primary");

    return (
      <Pressable ref={ref} className={classNames} {...restProps}>
        <View className="flex-row items-center">
          <Ionicons name={icon} size={30} color={primaryColor} className="mr-5" />
          <ThemedText size="h2">{children}</ThemedText>
        </View>
      </Pressable>
    );
  },
);

MenuItem.displayName = "MenuItem";

export default MenuItem;
