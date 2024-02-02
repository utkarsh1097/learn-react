import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import HelloWorld from "./components/HelloWorld";
import Header from "./components/Header";
import HomePage from "./components/HomePage";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <HomePage />
    </SafeAreaView>
    // <View style={styles.container}>
    //   <Text style={{"color": "white", backgroundColor: "green"}}>Open up App.tsx to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
});
