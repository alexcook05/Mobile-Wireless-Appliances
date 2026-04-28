import { View, StyleSheet, FlatList } from "react-native";
import OrderedItem from "./OrderedItem";
import { useContext } from "react";
import { CartContext } from "../../store/context/cart-context";
import Colors from "../../constants/Colors";

function OrderList(props) {
  const orderedItemsCtx = useContext(CartContext);
  // Function to render news item
  function renderOrderList(itemData) {
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
      // Add quantity and price data to keep track of
      quantity: itemData.item.quantity,
      totalPrice: itemData.item.totalPrice,
    };
    // Return data in FoodItem component with food item details
    return (
      <OrderedItem
        {...FoodItemProps}
        onRemoveItem={orderedItemsCtx.removeCart}
      />
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        // Display food items in flat list
        data={props.items}
        keyExtractor={(item) => item.id}
        // render food items
        renderItem={renderOrderList}
        showsVerticalScrollIndicator={true}
      />
    </View>
  );
}

export default OrderList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    paddingBottom: 10,
    borderWidth: 1,
    borderColor: Colors.primary800,
    borderRadius: 5
  },
});
