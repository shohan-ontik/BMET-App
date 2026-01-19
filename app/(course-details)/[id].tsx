import { ThemedText } from "@/components/ui/basics/themed-text";
import { ThemedView } from "@/components/ui/basics/themed-view";
import ProgressBar from "@/components/ui/common/progress-bar";
import FeatherIcons from "@expo/vector-icons/Feather";
import { router, useLocalSearchParams } from "expo-router";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function CourseDetails() {
  const { id } = useLocalSearchParams();

  console.log({ id });
  return (
    <ThemedView className="flex-1">
      <View className="bg-blue-700 rounded-b-3xl pb-4">
        <SafeAreaView edges={["top"]} className="pb-4 px-5">
          <TouchableOpacity
            className="flex-row items-center gap-1"
            onPress={() => router.back()}
          >
            <FeatherIcons size={22} name="chevron-left" color={"#fff"} />
            <ThemedText type="defaultSemiBold" className="text-white">
              Back
            </ThemedText>
          </TouchableOpacity>
          <ThemedText
            type="medium"
            className="text-white text-[14px] bg-blue-600 px-3 py-0.5 rounded-md self-start mt-5"
          >
            ENGLISH
          </ThemedText>
          <ThemedText type="title" className="text-white text-[24px] mt-3">
            General English
          </ThemedText>
          <View className="flex-row items-center gap-2 mt-1">
            <FeatherIcons size={16} name="layers" color={"#fff"} />
            <ThemedText className="text-white">7/20 Lessons</ThemedText>
          </View>
          <View className="flex-row items-center justify-between mt-4">
            <ThemedText
              type="defaultSemiBold"
              className="text-white text-[14px]"
            >
              Progress
            </ThemedText>
            <ThemedText className="text-white text-[14px]">35%</ThemedText>
          </View>
          <ProgressBar
            style={{ marginTop: 6 }}
            percentage={30}
            filledColor="#1e3a8a"
            unfilledColor="#3b82f6"
          />
        </SafeAreaView>
      </View>
    </ThemedView>
  );
}
