import ThemedButton from "@/components/ui/basics/themed-button";
import { ThemedText } from "@/components/ui/basics/themed-text";
import { courseTr, tCourse } from "@/i18n/courseLocal";
import { language } from "@/redux/features/ui/uiSlice";
import { formatNumber } from "@/utils/conversions";
import FeatherIcons from "@expo/vector-icons/Feather";
import React from "react";
import { View } from "react-native";
import { useSelector } from "react-redux";

export default function StartFlashCard() {
  const appLanguage = useSelector(language);
  courseTr.locale = appLanguage;

  return (
    <View className="p-5">
      <ThemedText type="defaultSemiBold" className="text-blue-600">
        {tCourse("chapter")} {formatNumber(1, appLanguage)}: শুভেচ্ছা ও পরিচিতি
      </ThemedText>
      <ThemedText type="defaultSemiBold" className="text-[24px] mt-1.5">
        হ্যালো বলা
      </ThemedText>
      <ThemedText className="text-[14px] text-gray-500 mt-1.5 text-justify">
        এই লেসনে আপনি আনুষ্ঠানিক ও অনানুষ্ঠানিক পরিস্থিতিতে কীভাবে নিজেকে পরিচয়
        করাতে হয় এবং অন্যদের শুভেচ্ছা জানাতে হয় তা শিখবেন। সংলাপটি মনোযোগ দিয়ে
        শুনুন।
      </ThemedText>
      <View className="bg-indigo-50 p-5 border border-indigo-200 rounded-xl mt-6">
        <View className="flex-row items-center gap-3 mb-5">
          <View className="bg-indigo-100 p-2.5 rounded-full">
            <FeatherIcons size={18} name="file-text" color={"#2563eb"} />
          </View>
          <View>
            <ThemedText type="defaultSemiBold" className="text-[18px]">
              {tCourse("vocaPractice")}
            </ThemedText>
            <ThemedText className="text-gray-500 text-[14px] mt-0.5">
              {tCourse("startLesson1")} {formatNumber(3, appLanguage)}
              {tCourse("startLesson2")}
            </ThemedText>
          </View>
        </View>
        <ThemedButton className="bg-blue-600">
          <View className="flex-row items-center gap-2">
            <ThemedText type="defaultSemiBold" className="text-white">
              {tCourse("startFlashcard")}
            </ThemedText>
            <FeatherIcons size={18} name="arrow-right" color={"#fff"} />
          </View>
        </ThemedButton>
      </View>
    </View>
  );
}
