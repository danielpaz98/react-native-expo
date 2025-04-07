import { Link, Redirect } from "expo-router";
import { View, Text, SafeAreaView } from "react-native";

export default function App() {
  return <Redirect href="/(stack)/home" />;

  return (
    <SafeAreaView>
      <View className="mt-6 mx-2.5">
        <Text className="text-5xl font-work-black text-primary">Hello World</Text>
        <Text className="text-4xl font-work-medium text-secondary">Hello World</Text>
        <Text className="text-3xl font-work-light text-secondary-100">Hello World</Text>
        <Text className="text-xl text-tertiary">Hello World</Text>
      </View>

      <Link href="/products">
        <Text className="text-2xl font-work-medium text-secondary-100">Products</Text>
      </Link>
    </SafeAreaView>
  );
}
