import { View, Text, FlatList, StyleSheet } from "react-native";
import { FOODITEMS } from "../data/dummy_data";
import FoodItem from "../components/List/FoodItem";
import { useLayoutEffect } from "react";
import Colors from "../constants/Colors";
import FoodList from "../components/List/FoodList";


function FoodItemsScreen(props) {
  // Get name of category from the category that was previously pressed
  const categoryName = props.route.params.category;

  useLayoutEffect(() => {
      props.navigation.setOptions({
        // Set title to selected category name
        title: categoryName,
      });
      // Run this layout effect whenever page or category changes
    }, [props.navigation, categoryName]);

  // Filter and store all food items that have the same category name as the category pressed
  const displayedFood = FOODITEMS.filter(
    (item) => item.category === categoryName,
  );

  return (
    // Display all food items with corresponding category
    <View style={styles.rootContainer}>
      <FoodList items={displayedFood} />
    </View>
  );
}

export default FoodItemsScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: Colors.primary800,
  },
});
