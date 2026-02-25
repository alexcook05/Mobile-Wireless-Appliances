import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Colors from "./constants/colors";
import RecipesScreen from "./screens/RecipesScreen";
import { useFonts } from "expo-font";
import { useState } from "react";
import AddRecipeScreen from "./screens/AddRecipesScreen";

export default function App() {
  // Import fonts
  const [fontsLoaded] = useFonts({
    doodle: require("./assets/fonts/Doodle Touch.otf")
  });

  // Create constants

  const [currentScreen, setCurrentScreen] = useState("home");
  const [currentID, setCurrentID] = useState(3);
  const [currentRecipes, setCurrentRecipes] = useState([
    // Create sample recipe data (Got sample data from ChatGPT)
    {
      id: 1,
      title: "Peanut Butter Cookies",
      text: "Ingredients\n1. 1 Cup Peanut Butter\n2. 1/2 Cup Sugar\n3. 1 large Egg\n Instructions:\nPreheat over to 350F\nMix All Ingredients until smooth\nScoop into balls and flatten with fork\nBake for 10 minutes",
    },
    {
      id: 2,
      title: "Garlic Pasta",
      text: "Ingredients\n1. 200g Spaghetti\n2. 4 vloes Garlic\n3. 1/4 cup Olive Oil\n4. Red Pepper Flake\nInstructions:\nBoil pasta in salted water\nSaute garlic and flakes in oil until golden\nToss pasta into the oil with a splash of pasta water\nServe with salt and pepper",
    },
  ]);

  // Create screenhandler functions
  function homeScreenHandler() {
    setCurrentScreen("home");
  }

  function recipesScreenHandler() {
    setCurrentScreen("recipes");
  }

  function addRecipeScreenHandler() {
    setCurrentScreen("add");
  }

  // Create function to add new recipe to dictionary
  function addRecipeHandler(enteredRecipeTitle, enteredRecipeText) {
    setCurrentRecipes((currentRecipes) => {
      // Return user recipe, with new id and user data
      return [
        ...currentRecipes,
        { id: currentID, title: enteredRecipeTitle, text: enteredRecipeText },
      ];
    });
    // Increment currentID
    setCurrentID(currentID + 1);
    // Return to recipes screen
    recipesScreenHandler();
  }

  // Create function to delete recipes from storage
  function deleteRecipeHandler(id) {
    setCurrentRecipes((currentRecipes) => {
      // If deleted recipe's id matches id in list, delete it
      return currentRecipes.filter((item) => item.id !== id);
    });
  }

  // set default screen to homescreen, run recipesScreenHandler when onNext is called
  let screen = <HomeScreen onNext={recipesScreenHandler} />;

  // Change screen to the add recipes page
  if (currentScreen === "add") {
    screen = (
      // When user adds recipe, call the correct function
      <AddRecipeScreen
        onAdd={addRecipeHandler}
        // When user cancels recipe, call the correct function
        onCancel={recipesScreenHandler}
      />
    );
  }

  // Change screen to the view recipes page
  if (currentScreen === "recipes") {
    screen = (
      <RecipesScreen
        onHome={homeScreenHandler}
        onAdd={addRecipeScreenHandler}
        onDelete={deleteRecipeHandler}
        currentRecipes={currentRecipes}
      />
    );
  }

  return (
    <>
      <StatusBar style="auto" />
      {/* display current screen within safeareaprovider */}
      <SafeAreaProvider style={styles.container}>{screen}</SafeAreaProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary800,
    alignItems: "center",
    justifyContent: "center",
  },
});
