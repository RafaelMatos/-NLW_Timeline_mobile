import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-gray-900">
      <Text className="text-4xl font-bold text-zinc-300">
        Open up App.js to start working on my app!
      </Text>
      <StatusBar style="light" />
    </View>
  )
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#2b2929',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   text:{
//     color:'#cecece',
//     fontWeight:'700',
//     fontSize:48,
//   },
// });
