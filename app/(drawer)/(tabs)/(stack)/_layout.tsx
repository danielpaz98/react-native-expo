// PLUGINS
import { Stack, useNavigation } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { DrawerActions, StackActions } from "@react-navigation/native";
// COMPONENTS
import { CustomButton } from "@/components/shared";

export default function StackLayout() {
  const navigation = useNavigation();

  const onHeaderLeftClick = (canGoBack: boolean | undefined) => {
    if (canGoBack) return navigation.dispatch(StackActions.pop());

    navigation.dispatch(DrawerActions.toggleDrawer());
  };

  return (
    <Stack
      screenOptions={{
        headerShadowVisible: false,
        contentStyle: { backgroundColor: "#fff" },
        headerLeft: ({ canGoBack }) => (
          <CustomButton className="p-1 mr-2" onPress={() => onHeaderLeftClick(canGoBack)}>
            <Ionicons name={canGoBack ? "arrow-back-outline" : "menu-outline"} size={24} />
          </CustomButton>
        ),
      }}
    >
      <Stack.Screen name="home/index" options={{ title: "Inicio" }} />
      <Stack.Screen name="products/index" options={{ title: "Productos" }} />
      <Stack.Screen name="profile/index" options={{ title: "Perfil" }} />
      <Stack.Screen name="settings/index" options={{ title: "Ajustes" }} />
    </Stack>
  );
}
