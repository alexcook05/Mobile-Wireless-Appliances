import { View, Text, FlatList } from "react-native";
import { FOODITEMS } from "../data/dummy_data";
import FoodItem from "../components/List/FoodItem";

function FoodItemsScreen(props) {
  // Get name of category from the category that was previously pressed
  const categoryName = props.route.params.category;

  // Filter and store all food items that have the same category name as the category pressed
  const displayedFood = FOODITEMS.filter(
    (item) => item.category === categoryName,
  );

  return (
    // Display all food items with corresponding category
    <FlatList
      // Assign data filtered fooditems
      data={displayedFood}
      // Set unique id
      keyExtractor={(item) => item.id}
      // Render food items
      renderItem={(itemData) => <FoodItem {...itemData.item} />}
    />
  );
}

export default FoodItemsScreen;
