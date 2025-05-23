import { Alert } from "react-native";
// COMPONENTS
import { ThemedView, ThemedButton } from "@/components/shared";

export default function AlertsScreen() {
  const createTwoButtonAlert = () =>
    Alert.alert("Alert Title", "My Alert Msg", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);

  const createThreeButtonAlert = () =>
    Alert.alert("Alert Title", "My Alert Msg", [
      {
        text: "Ask me later",
        onPress: () => console.log("Ask me later pressed"),
      },
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "destructive",
      },
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);

  return (
    <ThemedView className="m-2.5">
      <ThemedButton className="mb-5" onPress={() => createTwoButtonAlert()}>
        2 - Button Alert
      </ThemedButton>
      <ThemedButton onPress={() => createThreeButtonAlert()}>3 - Button Alert</ThemedButton>
    </ThemedView>
  );
}
