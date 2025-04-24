import { View } from "react-native";

// UTILS
import { cn } from "@/utils";

type Props = React.ComponentProps<typeof View>;

export default function MovieCastCard({ children, className, ...restProps }: Props) {
  return (
    <View className={cn(className)} {...restProps}>
      {children}
    </View>
  );
}
