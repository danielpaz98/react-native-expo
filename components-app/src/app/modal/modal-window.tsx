import { Platform } from "react-native";
import { View } from "react-native";
// PLUGINS
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
// COMPONENTS
import { ThemedView, ThemedText, ThemedButton } from "@/components/shared";

export default function ModalWindow() {
  return (
    <ThemedView className="items-center justify-center flex-1 gap-4 bg-[#a52182]">
      <View className="flex-row items-center justify-center gap-2">
        <ThemedText>Modal Window</ThemedText>
        <ThemedButton className="shadow-lg" size="icon" onPress={() => router.dismiss()}>
          <Ionicons name="close" size={30} className="mr-5" />
        </ThemedButton>
      </View>

      <ThemedButton onPress={() => router.push("/modal/modal-window-2")}>Open Modal 2</ThemedButton>

      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </ThemedView>
  );
}
