import ThemedButton from "@/components/ui/basics/themed-button";
import { ThemedText } from "@/components/ui/basics/themed-text";
import { ThemedView } from "@/components/ui/basics/themed-view";
import { useSession } from "@/hooks/useSession";

export default function HomeScreen() {
  const { signOut } = useSession();

  return (
    <ThemedView className="flex-1 items-center justify-center">
      <ThemedText type="title">Welcome to BMET!</ThemedText>
      <ThemedButton onPress={() => signOut()}>Logout</ThemedButton>
    </ThemedView>
  );
}
