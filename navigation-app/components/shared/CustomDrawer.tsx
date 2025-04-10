import { Text, View } from "react-native";
// PLUGINS
import {
  type DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";

export default function CustomDrawer({ ...props }: DrawerContentComponentProps) {
  return (
    <DrawerContentScrollView {...props} scrollEnabled={false}>
      <View className="justify-center items-center mx-3 p-10 mb-10 h-[150px] rounded-xl bg-primary">
        <View className="items-center justify-center bg-white rounded-full size-24">
          <Text className="text-3xl text-primary font-work-black">DP</Text>
        </View>
      </View>

      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}
