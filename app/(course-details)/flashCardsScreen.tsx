import { ThemedText } from "@/components/ui/basics/themed-text";
import { tCourse } from "@/i18n/courseLocal";
import FeatherIcons from "@expo/vector-icons/Feather";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { router } from "expo-router";
import React from "react";
import { ImageBackground, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function FlashCardsScreen() {
  return (
    <ImageBackground
      source={require("@/assets/images/background/bg1.png")}
      resizeMode="cover"
      className="flex-1"
    >
      <SafeAreaView className="px-5">
        <View className="flex-row items-center justify-between">
          <TouchableOpacity className="pr-2" onPress={() => router.back()}>
            <FeatherIcons size={22} name="x" color={"#fff"} />
          </TouchableOpacity>

          <ThemedText type="title" className="text-[20px] text-white">
            {tCourse("flashcard")}
          </ThemedText>
          <MaterialIcons size={22} name="translate" color={"#fff"} />
        </View>

        <View className="gap-3 mt-[40%]">
          <ThemedText type="title" className="text-[20px] text-white">
            {tCourse("iWantTo")}
          </ThemedText>
          <TouchableOpacity
            className="bg-white px-6 py-7 rounded-md"
            onPress={() => router.push("/(course-details)/flashCardsScreen2")}
          >
            <ThemedText type="title" className="text-[18px] text-blue-700">
              {tCourse("bangla")}{" "}
              <ThemedText type="title" className="text-gray-600 text-[18px]">
                →
              </ThemedText>{" "}
              {tCourse("english")}
            </ThemedText>
          </TouchableOpacity>
          <TouchableOpacity className="bg-white px-6 py-7 rounded-md">
            <ThemedText type="title" className="text-[18px] text-blue-700">
              {tCourse("english")}{" "}
              <ThemedText type="title" className="text-gray-600 text-[18px]">
                →
              </ThemedText>{" "}
              {tCourse("bangla")}
            </ThemedText>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}
