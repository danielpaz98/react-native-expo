// PLUGINS
import { Tabs } from "expo-router";
// ICONS
import { Ionicons } from "@expo/vector-icons";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "indigo" }}>
      <Tabs.Screen
        name="(stack)"
        options={{
          title: "Stack",
          headerShown: false,
          tabBarIcon: ({ color }) => <Ionicons size={28} name="person-add-outline" color={color} />,
        }}
      />
      <Tabs.Screen
        name="home/index"
        options={{
          title: "Inicio",
          tabBarIcon: ({ color }) => <Ionicons size={28} name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="favorites/index"
        options={{
          title: "Favoritos",
          tabBarIcon: ({ color }) => <Ionicons size={28} name="star-outline" color={color} />,
        }}
      />
    </Tabs>
  );
}
