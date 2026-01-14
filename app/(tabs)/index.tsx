import { ThemedText } from "@/components/ui/basics/themed-text";
import { ThemedView } from "@/components/ui/basics/themed-view";

export default function HomeScreen() {
  return (
    <ThemedView className="flex-1 items-center justify-center">
      <ThemedText type="title">Welcome to BMET!</ThemedText>
    </ThemedView>
  );
}
