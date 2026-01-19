import ThemedButton from "@/components/ui/basics/themed-button";
import { ThemedText } from "@/components/ui/basics/themed-text";
import { useSession } from "@/hooks/useSession";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProfileScreen() {
  const { signOut } = useSession();
  return (
    <SafeAreaView className="flex-1">
      <ThemedText>Explore</ThemedText>
      <ThemedButton onPress={() => signOut()}>Logout</ThemedButton>
    </SafeAreaView>
  );
}
