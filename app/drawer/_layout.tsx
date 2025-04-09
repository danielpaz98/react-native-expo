// PLUGINS
import { Ionicons } from "@expo/vector-icons";
import { Drawer } from "expo-router/drawer";
// COMPONENTS
import { CustomDrawer } from "@/components/shared";

export default function DrawerLayout() {
  return (
    <Drawer
      drawerContent={CustomDrawer}
      screenOptions={{
        overlayColor: "rgba(0,0,0,0.4)",
        drawerActiveTintColor: "indigo",
        headerShadowVisible: false,
        sceneContainerStyle: {
          backgroundColor: "white",
        },
      }}
    >
      <Drawer.Screen
        name="user/index"
        options={{
          drawerLabel: "Usuario",
          title: "Usuario",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="person-circle-outline" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="schedule/index"
        options={{
          drawerLabel: "Horario",
          title: "Horario",
          drawerIcon: ({ color, size }) => <Ionicons name="calendar-outline" color={color} size={size} />,
        }}
      />
    </Drawer>
  );
}
