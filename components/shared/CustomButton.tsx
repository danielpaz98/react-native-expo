import { forwardRef } from "react";
import { Text, Pressable, TouchableOpacity } from "react-native";
// PLUGINS
import { cva, type VariantProps } from "class-variance-authority";
// UTILS
import { cn } from "@/utils";

const buttonStyles = cva("", {
  variants: {
    variant: {
      outline: "border border-gray-300 active:bg-gray-100",
      text: "bg-transparent",
    },
    color: {
      primary: "bg-primary",
      secondary: "bg-secondary",
      tertiary: "bg-tertiary",
    },
    size: {
      sm: ["py-2", "px-4"],
      lg: ["py-4", "px-4"],
    },
  },
  defaultVariants: {
    color: "primary",
  },
  compoundVariants: [
    {
      variant: ["outline", "text"],
      className: "bg-transparent",
    },
  ],
});

const textStyles = cva("", {
  variants: {
    variant: {
      outline: "text-black",
      text: "text-primary",
      icon: "text-white",
    },
    size: {
      sm: "text-sm",
      lg: "text-lg",
    },
  },
});

interface Props extends React.ComponentPropsWithoutRef<typeof Pressable>, VariantProps<typeof buttonStyles> {
  children?: React.ReactNode;
  textClassName?: string;
}

const baseButtonClasses /* tw */ = "p-3 rounded-md active:opacity-90";
const baseTextClasses /* tw */ = "text-white text-center font-work-medium";

const CustomButton = forwardRef<React.ElementRef<typeof Pressable>, Props>(
  ({ children, variant, color = "primary", size, className, textClassName, ...restProps }, ref) => {
    const classNames = cn(baseButtonClasses, buttonStyles({ variant, color, size }), className);
    const textClassNames = cn(baseTextClasses, textStyles({ variant, size }), textClassName);

    return (
      <Pressable ref={ref} className={classNames} {...restProps}>
        <Text className={textClassNames}>{children}</Text>
      </Pressable>
    );
  },
);

CustomButton.displayName = "CustomButton";

export default CustomButton;
