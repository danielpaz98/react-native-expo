import { useState } from "react";
import { ScrollView } from "react-native";
// PLUGINS
import { RefreshControl } from "react-native-gesture-handler";
// COMPONENTS
import { ThemedView, ThemedText } from "@/components/shared";
// HOOKS
import { useThemeColor } from "@/hooks/useThemeColor";

export default function PullToRefreshScreen() {
  const [isRefreshing, setIsRefreshing] = useState(false);

  const primaryColor = useThemeColor({}, "primary");
  const backgroundColor = useThemeColor({ dark: "white", light: "black" }, "background");

  const handleOnRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
    }, 4000);
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={isRefreshing}
          onRefresh={handleOnRefresh}
          colors={[primaryColor, "red", "orange", "green"]}
          progressBackgroundColor={backgroundColor}
        />
      }
    >
      <ThemedView className="m-2.5">
        <ThemedText>PullToRefreshScreen</ThemedText>
      </ThemedView>
    </ScrollView>
  );
}
