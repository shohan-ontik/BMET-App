import { ThemedText } from "@/components/ui/basics/themed-text";
import { onboardingTr, tOnboarding } from "@/i18n/onboarding";
import { language } from "@/redux/features/ui/uiSlice";
import FeatherIcons from "@expo/vector-icons/Feather";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { Image, TouchableOpacity, View } from "react-native";
import { useSelector } from "react-redux";

export default function OnboardingScreen2() {
  const appLanguage = useSelector(language);
  onboardingTr.locale = appLanguage;

  return (
    <View className="flex-1 bg-white">
      <View className="w-full h-[60%]">
        <Image
          source={require("@/assets/images/onboarding/onboarding2.png")}
          className="w-full h-full"
          resizeMode="cover"
        />

        <LinearGradient
          colors={["#2563eb95", "#2563eb60", "white"]}
          style={{ position: "absolute", height: "100%", width: "100%" }}
        />
      </View>
      {/* Bottom content */}
      <View className="absolute bottom-0 px-6 pb-16 pt-6 bg-white">
        <View className="w-10 h-10 bg-blue-700  rounded-lg mb-4 items-center justify-center">
          <FeatherIcons size={22} name="book-open" color={"#fff"} />
        </View>

        <ThemedText type="title" className="text-[28px]">
          {tOnboarding("onBoard2Title")}
        </ThemedText>

        <ThemedText className="text-gray-500 mb-6 mt-3">
          {tOnboarding("onBoard2Desc")}
        </ThemedText>

        <View className="flex-row items-center justify-between">
          <View className="flex-row items-center gap-[4px]">
            <View className="h-1.5 w-1.5 rounded-full bg-gray-300" />
            <View className="h-1.5 w-6 rounded-full bg-blue-700" />
            <View className="h-1.5 w-1.5 rounded-full bg-gray-300" />
          </View>
          <TouchableOpacity
            onPress={() => router.replace("/(onboarding)/onboardingScreen3")}
            className="bg-blue-700 px-6 py-2 rounded-full flex-row items-center gap-1"
          >
            <ThemedText className="text-white">
              {" "}
              {tOnboarding("next")}
            </ThemedText>
            <FeatherIcons size={22} name="chevron-right" color={"#fff"} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
