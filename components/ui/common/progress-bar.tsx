import { Colors } from "@/constants/theme";
import React from "react";
import { View, ViewStyle } from "react-native";
interface ProgressBarProps {
  percentage: number;
  filledColor?: string;
  unfilledColor?: string;
  height?: number;
  borderRadius?: number;
  style?: ViewStyle;
}

export default function ProgressBar({
  percentage = 0,
  filledColor = Colors.light.tabIconSelected,
  unfilledColor = "#EAECF0",
  height = 7,
  borderRadius = 4,
  style,
}: Readonly<ProgressBarProps>) {
  const clampedPercentage = Math.max(0, Math.min(100, percentage));

  return (
    <View className="flex-row" style={style}>
      <View
        style={[
          {
            flex: 1,
            height,
            backgroundColor: unfilledColor,
            borderRadius,
            overflow: "hidden",
          },
        ]}
      >
        <View
          style={{
            width: `${clampedPercentage}%`,
            height: "100%",
            backgroundColor: filledColor,
            borderRadius: borderRadius,
          }}
        />
      </View>
    </View>
  );
}
