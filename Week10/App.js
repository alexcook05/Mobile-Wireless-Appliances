import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator, DrawerContent } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BookmarksScreen from "./screens/BookmarksScreen";
import USNewsScreen from "./screens/USNewsScreen.js";
import GlobalNewsScreen from "./screens/GlobalNewsScreen.js";
import TechNewsScreen from "./screens/TechNewsScreen.js";
import ArticleDetailsScreen from "./screens/ArticleDetailsScreen.js";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5"
import Colors from "./constants/colors.js";
import { useCallback } from "react";


// Create the Stack, Drawer, and Bottoms Tabs navigators
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tabs = createBottomTabNavigator();

// Function to return a drawer navigator
function DrawerNaviagtor() {
  return (
    <Drawer.Navigator
      initialRouteName="Listings"
      screenOptions={{
        // Style header which drawer is within
        headerStyle: { backgroundColor: Colors.primary500 },
        headerTintColor: "white",
        headerTitleStyle: {
          fontFamily: "newyork",
          fontSize: 40,
          color: Colors.accent800,
        },
        // Style drawer labels, changing color/background if label is active/inactive
        sceneContainerStyle: { backgroundColor: Colors.primary300 },
        drawerContentStyle: { backgroundColor: Colors.primary500 },
        drawerInactiveTintColor: Colors.primary300,
        drawerActiveTintColor: Colors.accent500,
        drawerActiveBackgroundColor: Colors.primary800,
      }}
    >
      {/* Return options within drawer */}
      <Drawer.Screen
        name="Listings"
        component={TabsNavigator}
        options={{
          // Give drawer tab a header title and text label,
          title: "All News Articles",
          drawerLabel: "News Articles",
          // Give label an icon from materialicons library
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="newspaper" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="BookmarkedListings"
        component={BookmarksScreen}
        options={{
           // Give drawer tab a header title and text label,
          title: "Saved Articles",
          drawerLabel: "Bookmarked Articles",
          // Give label an icon from entypo library
          drawerIcon: ({ color, size }) => (
            <Entypo name="bookmark" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

// Function to create bottomtabs and display pages
function TabsNavigator() {
  return (
    <Tabs.Navigator
      screenOptions={{
        // Style tabs background color/tint color if tab is active/inactive
        tabBarShowLabel: true,
        tabBarActiveBackgroundColor: Colors.primary800,
        tabBarActiveTintColor: Colors.accent500,
        tabBarInactiveBackgroundColor: Colors.primary500,
        tabBarInactiveTintColor: Colors.primary300,
        tabBarLabelStyle: {
          // Style label text
          fontSize: 12,
          fontFamily: "playfairBold",
        },
        tabBarStyle: {
          // Set tab bar background color
          backgroundColor: Colors.primary500,
        },
      }}
    >
      {/* Create the bottom tabs */}
      <Tabs.Screen
        // Create US News tab
        name="USNews"
        // Link to US News screen
        component={USNewsScreen}
        options={{
          headerShown: false,
          // Give tab an icon from fontawesone5 library
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="flag-usa" size={size} color={color}/>
          ),
          // Create tab text
          tabBarLabel: "US News",
        }}
      />

      <Tabs.Screen
        // Create global news tab
        name="GlobalNews"
        // Link to global news screen
        component={GlobalNewsScreen}
        options={{
          headerShown: false,
          // Give tab an icon from entypo library
          tabBarIcon: ({ color, size }) => (
            <Entypo name="globe" size={size} color={color} />
          ),
          // Create tab text
          tabBarLabel: "Global News",
        }}
      />
      <Tabs.Screen
        // Create tech news tab
        name="TechNews"
        // Link to tech news screen
        component={TechNewsScreen}
        options={{
          headerShown: false,
          // Give tab an icon from MaterialIcons library
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="computer" size={size} color={color} />
          ),
          // Create tab text
          tabBarLabel: "Tech News",
        }}
      />
    </Tabs.Navigator>
  );
}

export default function App() {
  const [fontsLoaded, fontsError] = useFonts({
    // Import fonts
    playfair: require("./assets/fonts/Playfair.ttf"),
    playfairBold: require("./assets/fonts/PlayfairBold.ttf"),
    playfairItalics: require("./assets/fonts/PlayfairBoldItalic.ttf"),
    newyork: require("./assets/fonts/NewYork.otf")
  });

  // Wait for fonts to load/error then hide splashscreen
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontsError) {
      await SplashScreen.hideAsync();
    }
  });

  // Return nothing if no fontsLoaded or fontsError
  if (!fontsLoaded && !fontsError) {
    return null;
  } else {
    // Else return everything on screen
    return (
      <>
        <StatusBar style="light" />
        <NavigationContainer>
          <Stack.Navigator
            // Set starting screen | style header/content colors
            initialRouteName="DrawerScreen"
            screenOptions={{
              headerTintColor: Colors.primary300,
              headerStyle: { backgroundColor: Colors.primary500 },
              contentStyle: { backgroundColor: "black" },
            }}
          >
            <Stack.Screen
              name="DrawerScreen"
              component={DrawerNaviagtor}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="ArticleDetail"
              component={ArticleDetailsScreen}
              options={{
                headerBackTitleVisible: false,
              }}
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
});
