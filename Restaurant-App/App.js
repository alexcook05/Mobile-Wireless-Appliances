import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useCallback } from "react";
import CheckoutScreen from "./screens/CheckoutScreen";
import FoodCategoriesScreen from "./screens/FoodCategoriesScreen";
import FoodItemDetailsScreen from "./screens/FoodItemDetailsScreen";
import FoodItemsScreen from "./screens/FoodItemsScreen";
import OrderScreen from "./screens/OrderScreen";
import RestaurantInfoScreen from "./screens/RestaurantInfoScreen";
import Colors from "./constants/Colors";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useFonts } from "expo-font";
import CartContextProvider from "./store/context/cart-context";

// Create stack and bottomtabs navigator
const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

// Create function to display menu screens within a stack
function MenuStackNavigator() {
  return (
    // Create navigator, stylize header
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary800 },
        headerTintColor: Colors.primary200,
        headerTitleStyle: {
          fontFamily: "matchaSalt",
          fontSize: 50,
          color: Colors.primary200,
        },
        headerTitleAlign: "center",
      }}
    >
      {/* Create Food Categories screen within stack */}
      <Stack.Screen
        name="Categories"
        component={FoodCategoriesScreen}
        options={{ title: "The Night Owl" }}
      />
      {/* Create Food Items screen within stack */}
      <Stack.Screen
        name="Items"
        component={FoodItemsScreen}
        options={{ title: "" }}
      />
      {/* Create Food Item Details screen within stack */}
      <Stack.Screen
        name="Details"
        component={FoodItemDetailsScreen}
        options={{ title: "" }}
      />
    </Stack.Navigator>
  );
}

// Create function to display screens in bottom tabs
function TabsNavigator() {
  return (
    // Create navigator, stylize buttom tabs, hide header
    <Tabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarActiveBackgroundColor: Colors.accent200,
        tabBarActiveTintColor: Colors.primary800,
        tabBarInactiveBackgroundColor: Colors.primary800,
        tabBarInactiveTintColor: Colors.primary200,
        tabBarLabelStyle: {
          fontSize: 12,
        },
        tabBarStyle: {
          backgroundColor: Colors.primary800,
        },
      }}
    >
      {/* Create tab containing food menu stack */}
      <Tabs.Screen
        name="Menu"
        component={MenuStackNavigator}
        options={{
          // Create the icon for tab
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="restaurant-menu" size={size} color={color} />
          ),
        }}
      />
      {/* Create tab containing Order Screen */}
      <Tabs.Screen
        name="Order"
        component={OrderScreen}
        options={{
          // Display and stylize header
          headerShown: true,
          title: "Your Order",
          headerStyle: { backgroundColor: Colors.primary800 },
          headerTintColor: Colors.primary200,
          headerTitleStyle: {
            fontFamily: "matchaSalt",
            fontSize: 50,
            color: Colors.primary200,
          },
          headerTitleAlign: "center",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="receipt" size={size} color={color} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
}

export default function App() {
  const [fontsLoaded, fontsError] = useFonts({
    // Import fonts
    matchaSalt: require("./assets/fonts/Matcha Salt.otf"),
    dunkin: require("./assets/fonts/Dunkin.otf"),
    skynight: require("./assets/fonts/Skynight.otf"),
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
    // Else display the screens
    return (
      <>
        <StatusBar style="dark" />
        {/* Create navigation container */}
        <CartContextProvider>
          <NavigationContainer>
            <Stack.Navigator>
              {/* Display the starting info screen */}
              <Stack.Screen
                name="RestaurantInfo"
                component={RestaurantInfoScreen}
                options={{ headerShown: false }}
              />
              {/* Display the bottom tabs screen | starting on food categories screen */}
              <Stack.Screen
                name="Restaurant"
                component={TabsNavigator}
                options={{ headerShown: false }}
              />
              {/* Stack checkout screen on top of everything else */}
              <Stack.Screen
                name="Checkout"
                component={CheckoutScreen}
                options={{
                  // Display and stylize header
                  headerShown: true,
                  headerStyle: { backgroundColor: Colors.primary800 },
                  headerTintColor: Colors.primary200,
                  headerTitleStyle: {
                    fontFamily: "matchaSalt",
                    fontSize: 50,
                    color: Colors.primary200,
                  },
                  headerTitleAlign: "center",
                }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </CartContextProvider>
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
