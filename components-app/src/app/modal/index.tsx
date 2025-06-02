// PLUGINS
import { router } from "expo-router";
// COMPONENTS
import { ThemedView, ThemedButton } from "@/components/shared";

export default function ModalScreen() {
  return (
    <ThemedView className="flex-1 px-5">
      <ThemedButton className="mt-5" onPress={() => router.push("/modal/modal-window")}>
        Open Modal
      </ThemedButton>
    </ThemedView>
  );
}
