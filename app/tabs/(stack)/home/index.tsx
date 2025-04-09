import { View, Text, SafeAreaView } from "react-native";
// PLUGINS
import { Link } from "expo-router";
// COMPONENTS
import { CustomButton } from "@/components/shared";

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <View className="flex-col gap-2 px-10 mt-5">
        <Link href="/tabs/(stack)/products" asChild>
          <CustomButton>Productos</CustomButton>
        </Link>

        <Link href="/tabs/(stack)/profile" asChild>
          <CustomButton color="secondary">Perfil</CustomButton>
        </Link>

        <Link href="/tabs/(stack)/settings" asChild>
          <CustomButton color="tertiary">Ajustes</CustomButton>
        </Link>

        <Link href="/tabs/(stack)/products" asChild>
          <CustomButton variant="text">Productos</CustomButton>
        </Link>
      </View>
    </SafeAreaView>
  );
}
