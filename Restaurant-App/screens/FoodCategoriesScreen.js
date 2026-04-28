import { View, StyleSheet } from "react-native";
import { CATEGORIES } from "../data/dummy_data";
import CategoryList from "../components/List/CategoryList";
import Colors from "../constants/Colors";

function FoodCategoriesScreen(props) {
  // Store categories from dummy data
  const categories = CATEGORIES;

  

  return (
    <View style={styles.rootContainer}>
      {/* Display all categories in list */}
      <CategoryList items={categories} />
    </View>
  );
}

export default FoodCategoriesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: Colors.primary800,
  },
});