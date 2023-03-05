import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white dark: bg-black">
      <Text className='color-black dark: color-white'>Mini Break App 🚀</Text>
      <StatusBar style="auto" />
    </View>
  );
}
