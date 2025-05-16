import { View } from "react-native";
// UTILS
import { cn } from "@/utils";

type Props = React.ComponentProps<typeof View>;

export default function ThemedCard({ className, children, ...restProps }: Props) {
  const classNames = cn("bg-white dark:bg-black/10 rounded-xl py-2 px-4 shadow-black/5", className);

  return (
    <View className={classNames} {...restProps}>
      {children}
    </View>
  );
}
