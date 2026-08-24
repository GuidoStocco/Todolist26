import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';


export default function Index() {
  return (
    <SafeAreaView>
      <StatusBar style="dark" translucent={false}/>
      <View>
        <Text>Hello World</Text>
      </View>
    </SafeAreaView>
  )
}