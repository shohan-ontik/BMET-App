import AccordionItem from "@/components/ui/accordion/AccordionItem";
import AccordionTrigger from "@/components/ui/accordion/AccordionTrigger";
import { ThemedText } from "@/components/ui/basics/themed-text";
import { tCourse } from "@/i18n/courseLocal";
import { language as lang } from "@/redux/features/ui/uiSlice";
import { formatNumber } from "@/utils/conversions";
import FeatherIcons from "@expo/vector-icons/Feather";
import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { useSelector } from "react-redux";
import LockedCouseCard from "./LockedCouseCard";

export type Course = {
  id: string;
  category: string;
  title: string;
  description: string;
  completedLessons: number;
  totalLessons: number;
  progressPercentage: number;
  isLocked: boolean;
};

export type CourseCategory = {
  id: number;
  title: string;
  totalCourses: number;
  courses: Course[];
};

export default function LanguageCard({
  language,
  isCardOpen = false,
}: Readonly<{ language: CourseCategory; isCardOpen: boolean }>) {
  const [isOpen, setIsOpen] = useState(isCardOpen);
  const appLanguage = useSelector(lang);

  return (
    <TouchableOpacity
      className="bg-white p-4 rounded-xl"
      onPress={() => setIsOpen(!isOpen)}
    >
      <View className="flex-row items-center justify-between">
        <View className="flex-row items-center gap-4">
          <View
            className={`${isOpen ? "bg-blue-700" : "bg-blue-100"} p-2.5 rounded-[30%]`}
          >
            <FeatherIcons
              size={18}
              name="globe"
              color={isOpen ? "#fff" : "#1d4ed8"}
            />
          </View>
          <View>
            <ThemedText type="defaultSemiBold">{language?.title}</ThemedText>
            <ThemedText className="text-[14px]">
              {formatNumber(language?.totalCourses, appLanguage)}
              {tCourse("course")}
            </ThemedText>
          </View>
        </View>
        <AccordionTrigger showAccordion={isOpen}>
          <FeatherIcons size={18} name="chevron-down" color="#6b7280" />
        </AccordionTrigger>
      </View>
      <AccordionItem showAccordion={isOpen}>
        <View className="pt-4 gap-3">
          {language?.courses?.map((course) => (
            <LockedCouseCard
              key={course.id}
              title={course.title}
              description={course.description}
            />
          ))}
        </View>
      </AccordionItem>
    </TouchableOpacity>
  );
}
