import { ThemedText } from "@/components/ui/basics/themed-text";
import { Colors } from "@/constants/theme";
import FeatherIcons from "@expo/vector-icons/Feather";
import { router } from "expo-router";
import React from "react";
import { TouchableOpacity, View } from "react-native";

interface LessonCardProps {
  type: "lesson" | "quiz";
  title?: string;
  duration?: string;
  isLocked?: boolean;
}

export default function LessonCard({
  type,
  title,
  duration,
  isLocked,
}: Readonly<LessonCardProps>) {
  function handlePress() {
    if (isLocked) {
      console.log({ isLocked });
    } else {
      if (type === "lesson") {
        router.push("/(course-details)/lesson-player/1");
      }
    }
  }

  return (
    <TouchableOpacity
      className="bg-gray-50/80 p-4 pl-8 flex-row items-center justify-between border-b border-gray-200"
      onPress={handlePress}
    >
      <View>
        <ThemedText type="medium">
          {type === "lesson" ? title : "কুইজ"}
        </ThemedText>
        <ThemedText className="text-[14px] text-gray-600 mt-1">
          {type === "lesson" ? duration : "আপনি কতটা শিখেছেন দেখুন"}
        </ThemedText>
      </View>
      <View
        className={`${isLocked ? "bg-blue-100" : "bg-blue-700"} p-2 rounded-full`}
      >
        {isLocked ? (
          <FeatherIcons
            size={18}
            name="lock"
            color={Colors.light.tabIconSelected}
          />
        ) : (
          <FeatherIcons size={18} name="play-circle" color={"#fff"} />
        )}
      </View>
    </TouchableOpacity>
  );
}
