import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Landing from './components/Landing';

export default function App() {
  return (
    <Landing />
    // <View style={styles.container}>
    //   <Text style={{"color": "white", backgroundColor: "green"}}>Open up App.tsx to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
