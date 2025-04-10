import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// COMPONENTS
import FAB from './components/FAB';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.textHuge}>{count}</Text>
      
      <FAB onPress={() => setCount(count + 1)} onLongPress={() => setCount(0)}>
        +1
      </FAB>

      <FAB onPress={() => setCount(0)} position='left'>
        Reset
      </FAB>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textHuge: {
    fontSize: 120,
    fontWeight: '100'
  }
});
