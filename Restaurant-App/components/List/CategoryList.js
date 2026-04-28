import { View, StyleSheet, FlatList } from "react-native";
import CategoryItem from "./CategoryItem";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "../../constants/Colors";

function CategoryList(props) {
  // Function to render category
  function renderCategoryItem(itemData) {
    const CategoryItemProps = {
      // Get item data and store the props
      id: itemData.item.id,
      category: itemData.item.category,
      imageUrl: itemData.item.imageUrl,
      categoryIndex: itemData.index,
    };
    // Return data in CategoryItem component with category details
    return <CategoryItem {...CategoryItemProps} />;
  }

  return (
    <LinearGradient
      colors={[
        Colors.accent800,
        Colors.accent800,
        Colors.accent800,
        Colors.accent800,
        Colors.accent800,
        Colors.accent800,
        Colors.primary800,
      ]}
      style={styles.container}
    >
      <FlatList
        // Display categories in flat list
        data={props.items}
        keyExtractor={(item) => item.id}
        // render category items
        renderItem={renderCategoryItem}
        showsVerticalScrollIndicator={false}
      />
    </LinearGradient>
  );
}

export default CategoryList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.1,
  },
});
