import { View } from "react-native";

// UTILS
import { cn } from "@/utils";

type Props = React.ComponentProps<typeof View>;

export default function Root({ children, className, ...restProps }: Props) {
  const classNames = cn("overflow-hidden shadow-md bg-white", className);

  return (
    <View className={classNames} {...restProps}>
      {children}
    </View>
  );
}
