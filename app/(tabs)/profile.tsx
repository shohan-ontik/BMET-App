import {
  updatePinSchema,
  UpdatePinSchemaType,
} from "@/components/screens/update-pin/updatePinSchema";
import ThemedButton from "@/components/ui/basics/themed-button";
import { ThemedText } from "@/components/ui/basics/themed-text";
import { ThemedView } from "@/components/ui/basics/themed-view";
import { FormInput } from "@/components/ui/form/form-input";
import { useSession } from "@/hooks/useSession";
import { profileTr, tProfile } from "@/i18n/profileLocal";
import { language } from "@/redux/features/ui/uiSlice";
import Feather from "@expo/vector-icons/Feather";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Image, ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";

export default function ProfileScreen() {
  const { signOut } = useSession();
  const appLanguage = useSelector(language);
  profileTr.locale = appLanguage;

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<UpdatePinSchemaType>({
    defaultValues: {
      newPin: "",
      confirmPin: "",
    },
    resolver: zodResolver(updatePinSchema),
    mode: "onChange",
  });

  function onSubmit(data: UpdatePinSchemaType) {
    console.log("Update PIN Data:", data);
    // Add your PIN update logic here
    // After successful update, you can reset the form
    reset();
  }

  return (
    <ThemedView className="flex-1">
      {/* Header */}
      <View className="bg-blue-700">
        <SafeAreaView edges={["top"]} className="pb-4 px-5">
          <ThemedText type="defaultSemiBold" className="text-white text-[18px]">
            {tProfile("myProfile")}
          </ThemedText>
        </SafeAreaView>
      </View>

      <ScrollView className="flex-1">
        {/* Profile Card */}
        <View className="items-center py-8 px-5">
          <View className="bg-white rounded-2xl p-6 w-full items-center shadow-sm border border-gray-100">
            {/* Profile Image */}
            <View className="w-24 h-24 rounded-full overflow-hidden mb-4 border-4 border-blue-100">
              <Image
                source={require("@/assets/images/icon.png")}
                className="w-full h-full"
                resizeMode="cover"
              />
            </View>

            {/* User Info */}
            <ThemedText type="subtitle" className="text-[20px] mb-1">
              Rahim Uddin
            </ThemedText>
            <ThemedText className="text-gray-500 text-[14px] mb-3">
              {appLanguage === "bn" ? "০১৭০০০০০০০০" : "01700000000"}
            </ThemedText>

            {/* Student Badge */}
            <View className="bg-indigo-50 px-4 py-1.5 rounded-full">
              <ThemedText className="text-indigo-700 text-[12px] font-NotoSansMedium">
                {tProfile("student")}
              </ThemedText>
            </View>
          </View>
        </View>

        {/* Security Section */}
        <View className="px-5 pb-6">
          <View className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
            {/* Security Header */}
            <View className="flex-row items-center mb-5">
              <View className="bg-gray-100 p-2 rounded-full mr-2">
                <Feather name="lock" size={18} color="#374151" />
              </View>
              <ThemedText type="defaultSemiBold" className="text-[16px]">
                {tProfile("security")}
              </ThemedText>
            </View>

            {/* New PIN Input */}
            <FormInput
              control={control}
              name="newPin"
              label={tProfile("newPin")}
              placeholder={tProfile("enterNewPin")}
              secureTextEntry={true}
              keyboardType="numeric"
              maxChar={4}
              errors={errors}
              errorMessage={profileTr.t(errors["newPin"]?.message as string)}
              className="mb-4"
            />

            {/* Confirm PIN Input */}
            <FormInput
              control={control}
              name="confirmPin"
              label={tProfile("confirmPin")}
              placeholder={tProfile("reEnterPin")}
              secureTextEntry={true}
              keyboardType="numeric"
              maxChar={4}
              errors={errors}
              errorMessage={profileTr.t(
                errors["confirmPin"]?.message as string,
              )}
              className="mb-5"
            />

            {/* Update PIN Button */}
            <ThemedButton
              variant="primary"
              onPress={handleSubmit(onSubmit)}
              className="mb-3 w-full justify-center bg-emerald-600"
            >
              <ThemedText className="text-white font-NotoSansMedium">
                {tProfile("updatePin")}
              </ThemedText>
            </ThemedButton>
          </View>
        </View>

        {/* Logout Button */}
        <View className="px-5 pb-8">
          <ThemedButton
            variant="outline"
            className="w-full justify-center border-2 bg-[#dc2626ff] border-[#dc2626ff]"
            onPress={() => signOut()}
          >
            <View className="flex-row items-center justify-center">
              <Feather name="log-out" size={18} color="#ffffffff" />
              <ThemedText className="text-white font-NotoSansMedium ml-2">
                {tProfile("logout")}
              </ThemedText>
            </View>
          </ThemedButton>
        </View>
      </ScrollView>
    </ThemedView>
  );
}
