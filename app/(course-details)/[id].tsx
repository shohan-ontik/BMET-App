import ChapterList from "@/components/screens/courses/details/ChapterList";
import CourseDetailsTop from "@/components/screens/courses/details/CourseDetailsTop";

import { ThemedView } from "@/components/ui/basics/themed-view";
import { courseTr } from "@/i18n/courseLocal";
import { language } from "@/redux/features/ui/uiSlice";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { useSelector } from "react-redux";

export default function CourseDetails() {
  const { id } = useLocalSearchParams();
  const appLanguage = useSelector(language);
  courseTr.locale = appLanguage;

  return (
    <ThemedView className="flex-1">
      <CourseDetailsTop />
      <ChapterList />
    </ThemedView>
  );
}
