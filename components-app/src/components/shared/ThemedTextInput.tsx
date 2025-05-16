import { TextInput } from "react-native";
// UTILS
import { cn } from "@/utils";

type Props = React.ComponentProps<typeof TextInput>;

export default function ThemedTextInput({ className, ...restProps }: Props) {
  const classNames = cn("p-2 text-black dark:text-white", className);

  return <TextInput placeholderTextColor="grey" className={classNames} {...restProps} />;
}
