import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as SplashScreen from "expo-splash-screen"
import Colors from './constants/colors';
import { useCallback } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HomeScreen from './screens/HomeScreen';


export default function App() {
  // Load fonts
  const [fontsLoaded, fontError] = useFonts({
    sugar: require("./assets/fonts/Fruity Sugar.otf")
  });
  
  // Wait until fonts are loaded/is error
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError){
      // Then hide splashscreen
      await SplashScreen.hideAsync();
    }
  })

  // Set screen to HomeScreen
  let screen = <HomeScreen />

  // If fonts aren't loaded and is error, return nothing
  if (!fontsLoaded && !fontError){
    return null;
  } else {
    return (

      // Else, display screen
      <>
      <StatusBar style="light" />
      <SafeAreaProvider style={styles.container}>{screen}</SafeAreaProvider>
      </>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.accent300,
  },
});
