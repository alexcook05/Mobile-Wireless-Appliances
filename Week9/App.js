import { StatusBar } from "expo-status-bar";
import { useCallback } from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import HotelsOverviewScreen from "./screens/HotelsOverviewScreen";
import { useFonts } from "expo-font";
import Colors from "./constants/Colors";

const Stack = createNativeStackNavigator();

export default function App() {
  // Grab Fonts
  const [fontsLoaded, fontError] = useFonts({
    pirata: require("./assets/fonts/PirataOne-Regular.ttf")
  });

  // Wait for fonts to load/error then hide splashscreen
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  // Return nothing if no fontsLoaded or fontsError
  if (!fontsLoaded && !fontError) {
    return null;
  } else {
    // Else return everything on screen
    return (
      <>
        
          <StatusBar style="light" />
          <NavigationContainer>
            
            <Stack.Navigator
              // Set starting screen | Style header/content
              initialRouteName="HomeScreen"
              screenOptions={{
                headerStyle: { backgroundColor: Colors.primary500 },
                headerTintColor: Colors.primary300,
                headerTitleStyle: { fontFamily: "pirata", fontSize: 40 },
                contentStyle: { backgroundColor: Colors.primary800 },
              }}
            >
              {/* Directory of pages */}
              <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                  title: "Vacation Spots",
                }}
              />
              <Stack.Screen
                name="HotelsOverviewScreen"
                component={HotelsOverviewScreen}
              />
            </Stack.Navigator>
          </NavigationContainer>
       
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  background: {
    flex: 1,
  },
});
