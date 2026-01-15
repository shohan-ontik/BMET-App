import ThemedButton from "@/components/ui/basics/themed-button";
import { ThemedText } from "@/components/ui/basics/themed-text";
import { ThemedView } from "@/components/ui/basics/themed-view";
import { useSession } from "@/hooks/useSession";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const { signOut } = useSession();

  return (
    <ThemedView className="flex-1">
      <View className="bg-blue-700">
        <SafeAreaView edges={["top"]} className="pb-4 px-5">
          <ThemedText type="defaultSemiBold" className="text-white text-[18px]">
            BMET Learning
          </ThemedText>
        </SafeAreaView>
      </View>
      <ThemedText type="title">Welcome to BMET!</ThemedText>
      <ThemedButton onPress={() => signOut()}>Logout</ThemedButton>
    </ThemedView>
  );
}
