import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
  ScrollView,
} from "react-native";
import { FOODITEMS } from "../data/dummy_data";
import Button from "../components/Button";
import Entypo from "@expo/vector-icons/Entypo";
import { useContext, useLayoutEffect, useState } from "react";
import { CartContext } from "../store/context/cart-context";
import { isSearchBarAvailableForCurrentPlatform } from "react-native-screens";
import Colors from "../constants/Colors";

function FoodItemDetailsScreen(props) {
  // Get and store id from food item pressed previously
  const foodId = props.route.params.foodId;

  // Filter through all food items to get items that match foodid
  const selectedFoodItem = FOODITEMS.find((fooditem) => fooditem.id === foodId);

  // Create state for itemquantity, default at 1
  const [itemQuantity, setItemQuantity] = useState(1);

  // Create context for items in order
  const orderedItemsCtx = useContext(CartContext);

  // Function handler to add item to cart
  function addItemToOrderHandler() {
    // Add item to cart and quantity according to user selected quantity
    orderedItemsCtx.addCart(foodId, itemQuantity);
  }

  // useLayoutEffect to change the title of the header to the food item
  useLayoutEffect(() => {
    props.navigation.setOptions({
      // Set title to selected food name
      title: selectedFoodItem.name,
      headerTitleStyle: {
        fontSize: 30,
        fontFamily: "matchaSalt",
      },
    });
    // Run this layout effect whenever one of these page or selected food item changes
  }, [props.navigation, selectedFoodItem]);

  // Function to add to item quantity
  function addItemQuantityHandler() {
    // Add 1 to item quantity
    setItemQuantity(itemQuantity + 1);
  }

  // Function to subtract from item quantity
  function removeItemQuantityHandler() {
    // Do nothing if item quantity is 1
    if (itemQuantity <= 1) {
      return;
    } else {
      // Subtract 1 from item quantity otherwise
      setItemQuantity(itemQuantity - 1);
    }
  }

  return (
    // Display food item
    <ScrollView style={styles.rootContainer}>
      {/* Image of food item */}
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          // Get image url from the food item and display it
          source={{ uri: selectedFoodItem.imageUrl }}
        />
      </View>
      {/* Get info from food item and display */}
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{selectedFoodItem.name}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.info}>${selectedFoodItem.price} ∙ </Text>
        <Text style={styles.info}>{selectedFoodItem.calories} Calories</Text>
      </View>
      <View style={styles.ingredientsContainer}>
        <Text style={styles.ingredientsTitle}>Ingredients</Text>
        <Text style={styles.ingredients}>{selectedFoodItem.ingredients}</Text>
      </View>
      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionTitle}>Description</Text>
        <Text style={styles.descriptionText}>
          {selectedFoodItem.description}
        </Text>
      </View>

      {/* Create container for quantity selector */}
      <View style={styles.quantityContainer}>
        {/* Create subtract button */}
        <Pressable
          style={({ pressed }) => [
            styles.quantityButton,
            pressed && styles.pressed,
          ]}
          // Call remove item function when pressed
          onPress={removeItemQuantityHandler}
        >
          <Entypo name="minus" size={24} color="rgb(197, 199, 253)" />
        </Pressable>
        {/* Create text containing the current quantity */}
        <View style={styles.quantityTextContainer}>
          <Text style={styles.quantityText}>
            {/* Display itemQuantity state */}
            {itemQuantity}
          </Text>
        </View>
        {/* Create add button */}
        <Pressable
          style={({ pressed }) => [
            styles.quantityButton,
            pressed && styles.pressed,
          ]}
          // Call add item function when pressed
          onPress={addItemQuantityHandler}
        >
          <Entypo name="plus" size={24} color="rgb(197, 199, 253)" />
        </Pressable>
      </View>
      {/* Create add to cart button */}
      <View style={styles.cartButtonContainer}>
        <Pressable
          style={({ pressed }) => [
            styles.cartButton,
            pressed && styles.pressed,
          ]}
          // Call function to add item to order when pressed
          onPress={addItemToOrderHandler}
        >
          <Text style={styles.cartText}>Add to Cart</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

export default FoodItemDetailsScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    paddingBottom: 80,
    backgroundColor: Colors.accent800,
  },
  imageContainer: {
    marginTop: 30,
    marginBottom: 20,
    height: 300,
    width: 300,
    alignSelf: "center",
    backgroundColor: Colors.primary800,
    borderRadius: 10,
  },
  image: {
    height: "100%",
    resizeMode: "cover",
    borderRadius: 5,
  },
  titleContainer: {
    borderBottomColor: Colors.primary500,
    borderBottomWidth: 1,
    width: 350,
    alignSelf: "center",
  },
  title: {
    color: Colors.primary200,
    fontSize: 40,
    textAlign: "center",
    alignSelf: "center",
    fontFamily: "skynight",
  },
  infoContainer: {
    alignContent: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  info: {
    fontSize: 15,
    color: Colors.accent200,
    opacity: 0.2,
  },
  ingredientsContainer: {
    marginTop: 25,
    marginBottom: 15,
    marginHorizontal: 15,
  },
  ingredientsTitle: {
    fontWeight: "bold",
    fontSize: 35,
    marginBottom: 10,
    color: Colors.primary800,
  },
  ingredients: {
    fontSize: 15,
    color: Colors.accent200,
    opacity: 0.2,
  },
  descriptionContainer: {
    marginHorizontal: 10,
  },
  descriptionTitle: {
    fontWeight: "bold",
    fontSize: 25,
    marginBottom: 10,
    color: Colors.primary800,
  },
  descriptionText: {
    fontSize: 15,
    color: Colors.accent200,
    opacity: 0.2,
  },
  quantityContainer: {
    marginTop: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 15,
  },
  quantityButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: Colors.primary200,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2d313f",
  },
  quantityTextContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 15,
  },
  quantityText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  cartButtonContainer: {
    marginTop: 20,
    alignItems: "center",
  },

  cartButton: {
    backgroundColor: Colors.primary800,
    width: "80%",
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: "center",
    marginBottom: 15,
  },

  cartText: {
    color: Colors.primary200,
    fontSize: 20,
    fontFamily: "skynight",
    textShadowColor: Colors.primary200,
    textShadowRadius: 15,
  },
  pressed: {
    color: Colors.accent500,
    opacity: 0.8
  }
});
