import React from "react";
import {
  ActivityIndicator,
  StyleProp,
  Text,
  TouchableOpacity,
  ViewStyle,
} from "react-native";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "ghost"
  | "outline"
  | "link"
  | "disabled"
  | "social";
type ButtonSize = "small" | "medium" | "large";

interface ThemedButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  onPress?: () => void;
  children?: React.ReactNode;
  disabled?: boolean;
  loading?: boolean;
  style?: StyleProp<ViewStyle>;
  className?: string;
}

const getButtonClasses = (
  variant: ButtonVariant,
  size: ButtonSize,
  disabled: boolean,
  className?: string
) => {
  const baseClasses = "justify-center items-center rounded-lg w-full";

  // For link variant, keep transparent background even when disabled
  const effectiveVariant =
    disabled && variant !== "link" ? "disabled" : variant;

  const variantClasses = {
    primary: "bg-emerald-600 rounded-lg",
    secondary: "bg-gray-900",
    ghost: "bg-transparent",
    outline: "bg-transparent border border-emerald-300 rounded-lg",
    link: "bg-transparent h-auto",
    disabled: "bg-gray-300 rounded-lg",
    social: "bg-white rounded-full h-[48px] w-[56px] border border-gray-200",
  };

  const sizeClasses = {
    small: "h-10 px-3",
    medium: "h-12 px-4",
    large: "h-14 px-6",
  };

  return `${baseClasses} ${variantClasses[effectiveVariant]} ${
    ["ghost", "link"]?.includes(effectiveVariant) ? "" : sizeClasses[size]
  } ${className || ""}`;
};

const getTextClasses = (
  variant: ButtonVariant,
  size: ButtonSize,
  disabled: boolean
) => {
  const baseClasses = "text-center";

  // If disabled is true, override the variant for text color
  const effectiveVariant = disabled ? "disabled" : variant;

  const variantClasses = {
    primary: "text-white",
    secondary: "text-white",
    ghost: "text-white",
    outline: "text-secondary",
    link: "text-blue-300",
    disabled: "text-gray-500",
    social: "text-white",
  };

  const sizeClasses = {
    small: "text-body2",
    medium: "text-body1",
    large: "text-subheading",
  };

  return `${baseClasses} ${variantClasses[effectiveVariant]} ${sizeClasses[size]}`;
};

const ThemedButton: React.FC<ThemedButtonProps> = ({
  onPress,
  children,
  variant = "primary",
  size = "medium",
  disabled = false,
  loading = false,
  style,
  className,
}) => {
  const buttonClasses = getButtonClasses(variant, size, disabled, className);
  const textClasses = getTextClasses(variant, size, disabled);

  return (
    <TouchableOpacity
      className={buttonClasses}
      onPress={onPress}
      disabled={disabled || loading}
      style={style}
    >
      {loading ? (
        <ActivityIndicator color={variant === "primary" ? "white" : "black"} />
      ) : typeof children === "string" ? (
        <Text
          className={textClasses}
          style={{ fontFamily: "NotoSansSemiBold" }}
        >
          {children}
        </Text>
      ) : (
        children
      )}
    </TouchableOpacity>
  );
};

export default ThemedButton;
