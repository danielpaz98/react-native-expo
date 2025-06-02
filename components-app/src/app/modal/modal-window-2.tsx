import { Platform } from "react-native";
import { View } from "react-native";
// PLUGINS
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
// COMPONENTS
import { ThemedView, ThemedText, ThemedButton } from "@/components/shared";

export default function ModalWindow2() {
  return (
    <ThemedView className="items-center justify-center flex-1 gap-4">
      <View className="flex-row items-center justify-center gap-2">
        <ThemedText>Modal Window 2</ThemedText>
        <ThemedButton className="shadow-lg" size="icon" onPress={() => router.dismiss()}>
          <Ionicons name="close" size={30} className="mr-5" />
        </ThemedButton>
      </View>

      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </ThemedView>
  );
}
