import { ThemedText } from "@/components/ui/basics/themed-text";
import { tHome } from "@/i18n/homeLocal";
import { language } from "@/redux/features/ui/uiSlice";
import { formatNumber } from "@/utils/conversions";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { View } from "react-native";
import { useSelector } from "react-redux";

export default function LearningStats() {
  const appLanguage = useSelector(language);
  return (
    <View className="flex-row justify-between gap-4">
      <View className="flex-1 bg-white items-center p-4 border-[1.5px] border-gray-200 rounded-xl">
        <View className="bg-blue-100 p-2 rounded-full">
          <MaterialIcons size={18} name="access-time" color={"#1d4ed8"} />
        </View>
        <ThemedText type="title" className="text-[24px] mt-2">
          {formatNumber(2.5, appLanguage)}
          {tHome("hour")}
        </ThemedText>
        <ThemedText className="text-[14px] text-gray-700">
          {tHome("learnedToday")}
        </ThemedText>
      </View>
      <View className="flex-1 bg-white items-center p-4 border-[1.5px] border-gray-200 rounded-xl">
        <View className="bg-green-100 p-2 rounded-full">
          <MaterialIcons
            size={18}
            name="check-circle-outline"
            color={"#16a34a"}
          />
        </View>
        <ThemedText type="title" className="text-[24px] mt-2">
          {formatNumber(12, appLanguage)}
        </ThemedText>
        <ThemedText className="text-[14px] text-gray-700">
          {tHome("lessonDone")}
        </ThemedText>
      </View>
    </View>
  );
}
