import { View } from "react-native";
// UTILS
import { cn } from "@/utils";

type Props = React.ComponentProps<typeof View>;

export default function Menu({ children, className, ...restProps }: Props) {
  const classNames = cn("rounded-[10px] overflow-hidden", className);

  return (
    <View className={classNames} {...restProps}>
      {children}
    </View>
  );
}
