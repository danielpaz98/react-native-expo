import { Switch, Pressable, Platform, type SwitchProps } from "react-native";
// UTILS
import { cn } from "@/utils";
// COMPONENTS
import ThemedText, { textStyles, type TextVariants } from "./ThemedText";
// HOOKS
import { useThemeColor } from "@/hooks/useThemeColor";

interface Props {
  value?: SwitchProps["value"];
  text?: string;
  className?: string;
  textClassName?: string;
  textVariant?: TextVariants["variant"];
  textSize?: TextVariants["size"];
  onValueChange?: SwitchProps["onValueChange"];
}

const isAndroid = Platform.OS === "android";

export default function ThemedSwitch({
  value,
  text,
  className,
  textClassName,
  textSize,
  textVariant,
  onValueChange,
}: Props) {
  const classNames = cn("flex flex-row items-center justify-end active:opacity-80", className);
  const textClassNames = cn("flex-1", textStyles({ variant: textVariant, size: textSize }), textClassName);
  const primaryColor = useThemeColor({}, "primary");

  return (
    <Pressable className={classNames} onPress={() => onValueChange?.(!value)}>
      {text && <ThemedText className={textClassNames}>{text}</ThemedText>}
      <Switch
        value={value}
        onValueChange={onValueChange}
        thumbColor={isAndroid ? primaryColor : ""}
        trackColor={{ false: "gray", true: !isAndroid ? primaryColor : "" }}
      />
    </Pressable>
  );
}
