import { TextInput } from "react-native";
// UTILS
import { cn } from "@/utils";

type Props = React.ComponentProps<typeof TextInput>;

export default function ThemedTextInput({ className, ...restProps }: Props) {
  const classNames = cn(
    "text-black dark:text-white bg-white dark:bg-black/10 rounded-md p-3 shadow-black/5",
    className,
  );

  return <TextInput placeholderTextColor="grey" className={classNames} {...restProps} />;
}
