import { Slot } from 'expo-router';
import { View, Text } from 'react-native'

export default function RootLayout() {
  return (
    <View>
      <Text>_layout</Text>

      <Slot />
    </View>
  )
}