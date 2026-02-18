import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HomeScreen from './screens/HomeScreen';
import MenuScreen from './screens/MenuScreen';
import Colors from './constants/colors';
import { useFonts } from 'expo-font';

export default function App() {
  // Set up fonts
  const [fontsLoaded] = useFonts({
    "hamston": require("./assets/fonts/Hamston.ttf")
  })

  // Set state variable for current screen
  const [currentScreen, setCurrentScreen] = useState("home");

  // Function to change currentScreen state to menu
  function menuScreenHandler() {
    setCurrentScreen("menu");
  }

  // Function to change currentScreen state to home
  function homeScreenHandler() {
    setCurrentScreen("home");
  }

  // Determine which screen to be on
  let screen = <HomeScreen onNext={menuScreenHandler} />;

  // When currentScreen state is events, change the actual screen
  if (currentScreen === "menu"){
    screen = <MenuScreen onNext={homeScreenHandler} />;
  }

  return (
    <>
    <StatusBar style='dark' />
    {/* Pad screen within SafeAreaProvider */}
    <SafeAreaProvider style={styles.container}>{screen}</SafeAreaProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.accent300,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
