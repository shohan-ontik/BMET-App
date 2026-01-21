import CourseCard from "@/components/screens/courses/CourseCard";
import LearningStats from "@/components/screens/home/LearningStats";
import { ThemedText } from "@/components/ui/basics/themed-text";
import { ThemedView } from "@/components/ui/basics/themed-view";
import { homeTr, tHome } from "@/i18n/homeLocal";
import { language } from "@/redux/features/ui/uiSlice";
import { getGreetingByTime } from "@/utils/helpers";
import { router } from "expo-router";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";

const COURSES = [
  {
    id: "1",
    category: "ইংরেজি",
    title: "সাধারণ ইংরেজি",
    description: "দৈনন্দিন যোগাযোগের জন্য বেসিক ইংরেজি।",
    completedLessons: 7,
    totalLessons: 20,
    progressPercentage: 35,
  },
  {
    id: "2",
    category: "ইংরেজি",
    title: "নির্মাণকাজের জন্য ইংরেজি",
    description: "সাইট নিরাপত্তা, যন্ত্রপাতি ও নির্দেশনা।",
    completedLessons: 0,
    totalLessons: 15,
    progressPercentage: 0,
  },
];

export default function HomeScreen() {
  const appLanguage = useSelector(language);
  homeTr.locale = appLanguage;

  return (
    <ThemedView className="flex-1">
      <View className="bg-blue-700">
        <SafeAreaView edges={["top"]} className="pb-4 px-5">
          <ThemedText type="defaultSemiBold" className="text-white text-[18px]">
            BMET Learning
          </ThemedText>
        </SafeAreaView>
      </View>
      <ScrollView className="p-5">
        <View className="mb-6 mt-2 gap-1">
          <ThemedText className="text-gray-600">
            {getGreetingByTime()}
          </ThemedText>
          <TouchableOpacity
            onPress={() => router.push("/(course-details)/flashCardsScreen2")}
          >
            <ThemedText type="title" className="text-[28px]">
              রহিম উদ্দিন
            </ThemedText>
          </TouchableOpacity>
        </View>
        <LearningStats />
        <View className="py-4 mt-4">
          <ThemedText type="defaultSemiBold">{tHome("myCourses")}</ThemedText>
          <View className="mt-3 gap-3">
            {COURSES.map((course) => (
              <CourseCard
                key={course.id}
                category={course.category}
                title={course.title}
                description={course.description}
                completedLessons={course.completedLessons}
                totalLessons={course.totalLessons}
                progressPercentage={course.progressPercentage}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </ThemedView>
  );
}
