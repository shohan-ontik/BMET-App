import { ThemedText } from "@/components/ui/basics/themed-text";
import { Colors } from "@/constants/theme";
import FeatherIcons from "@expo/vector-icons/Feather";
import { router } from "expo-router";
import React from "react";
import { TouchableOpacity, View } from "react-native";

interface LockedCouseCardProps {
  title: string;
  description: string;
  isLocked?: boolean;
}

export default function LockedCouseCard({
  title,
  description,
  isLocked,
}: Readonly<LockedCouseCardProps>) {
  return (
    <TouchableOpacity
      className="bg-gray-50 p-4 rounded-xl flex-row items-center justify-between"
      onPress={() => router.push("/(course-details)/20")}
    >
      <View>
        <ThemedText type="defaultSemiBold">{title}</ThemedText>
        <ThemedText className="text-[14px] text-gray-600 mt-1">
          {description}
        </ThemedText>
      </View>
      <View className="bg-blue-100 p-2 rounded-full">
        <FeatherIcons
          size={18}
          name={isLocked ? "lock" : "unlock"}
          color={Colors.light.tabIconSelected}
        />
      </View>
    </TouchableOpacity>
  );
}
