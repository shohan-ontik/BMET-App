import { ThemedText } from "@/components/ui/basics/themed-text";
import ProgressBar from "@/components/ui/common/progress-bar";
import { courseTr, tCourse } from "@/i18n/courseLocal";
import { language } from "@/redux/features/ui/uiSlice";
import { formatNumber } from "@/utils/conversions";
import React from "react";
import { View } from "react-native";
import { useSelector } from "react-redux";

interface CourseCardProps {
  category: string;
  title: string;
  description: string;
  completedLessons: number;
  totalLessons: number;
  progressPercentage: number;
}

export default function CourseCard({
  category,
  title,
  description,
  completedLessons,
  totalLessons,
  progressPercentage,
}: Readonly<CourseCardProps>) {
  const appLanguage = useSelector(language);
  courseTr.locale = appLanguage;

  return (
    <View className="bg-white p-4 border-[1.5px] border-gray-200 rounded-xl">
      {/* Header */}
      <View className="flex-row items-center justify-between py-1">
        <View className="px-3 py-1 bg-indigo-100 rounded-xl">
          <ThemedText
            type="defaultSemiBold"
            className="text-[12px] text-blue-700"
          >
            {category}
          </ThemedText>
        </View>
      </View>

      {/* Content */}
      <ThemedText type="defaultSemiBold" className="mt-2">
        {title}
      </ThemedText>

      <ThemedText className="text-[14px] text-gray-600 mt-1">
        {description}
      </ThemedText>

      {/* Progress */}
      <View className="flex-row items-center justify-between mb-1.5 mt-4">
        <ThemedText className="text-[14px] text-gray-700">
          {formatNumber(completedLessons, appLanguage)}/
          {formatNumber(totalLessons, appLanguage)} {tCourse("lessons")}
        </ThemedText>

        <ThemedText className="text-[14px] text-blue-700">
          {formatNumber(progressPercentage, appLanguage)}%
        </ThemedText>
      </View>

      <ProgressBar percentage={progressPercentage} />
    </View>
  );
}
