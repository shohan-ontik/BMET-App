import { cn } from "@/utils/cn";
import React from "react";
import { ActivityIndicator, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface LoaderProps {
  message?: string;
  size?: "small" | "large";
  color?: string;
  fullScreen?: boolean;
  className?: string;
}

const Loader: React.FC<LoaderProps> = ({
  message,
  size = "large",
  color = "#092C3B",
  fullScreen = false,
  className,
}) => {
  const insets = useSafeAreaInsets();

  return (
    <View
      className={cn(
        "justify-center items-center",
        fullScreen && "h-full",
        className
      )}
      style={{
        paddingTop: fullScreen ? insets.top : 0,
        paddingBottom: fullScreen ? insets.bottom : 0,
      }}
    >
      <ActivityIndicator size={size} color={color} />
      {message ? (
        <Text className="mt-3 text-base text-gray-500 font-medium">
          {message}
        </Text>
      ) : null}
    </View>
  );
};

export default Loader;
