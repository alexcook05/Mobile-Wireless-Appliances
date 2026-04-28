import { View, StyleSheet, FlatList } from "react-native";
import FoodItem from "./FoodItem";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "../../constants/Colors";


function FoodList(props) {
  // Function to render news item
  function renderFoodItem(itemData) {
    const FoodItemProps = {
      // Get item data and store the props
      id: itemData.item.id,
      category: itemData.item.category,
      name: itemData.item.name,
      price: itemData.item.price,
      calories: itemData.item.calories,
      ingredients: itemData.item.ingredients,
      imageUrl: itemData.item.imageUrl,
      foodIndex: itemData.index,
    };
    // Return data in FoodItem component with food item details
    return <FoodItem {...FoodItemProps} />;
  }

  return (
    <LinearGradient
      colors={[ Colors.accent200, Colors.accent200, Colors.accent200, Colors.primary800]}
      style={styles.container}
    >
      <FlatList
      // Display food items in flat list
        data={props.items}
        keyExtractor={(item) => item.id}
        // render food items
        renderItem={renderFoodItem}
        showsVerticalScrollIndicator={false}
      />
    </LinearGradient>
  );
}

export default FoodList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black"
  },
  backgroundImage: {
    opacity: 0.1,
  },
});
