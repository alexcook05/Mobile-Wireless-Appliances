import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import { FOODITEMS } from "../data/dummy_data";
import Button from "../components/Button";
import Entypo from "@expo/vector-icons/Entypo";

function FoodItemDetailsScreen(props) {
  // Get and store id from food item pressed previously
  const foodId = props.route.params.foodId;

  // Filter through all food items to get items that match foodid
  const selectedFoodItem = FOODITEMS.find((fooditem) => fooditem.id === foodId);

  return (
    // Display food item
    <View style={styles.rootContainer}>
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
        <Pressable style={styles.quantityButton}>
          <Entypo name="minus" size={24} color="#aaa" />
        </Pressable>
        {/* Create text containing the current quantity */}
        <View style={styles.quantityTextContainer}>
          <Text style={styles.quantityText}>1</Text>
        </View>
        {/* Create add button */}
        <Pressable style={styles.quantityButton}>
          <Entypo name="plus" size={24} color="#aaa" />
        </Pressable>
      </View>
      {/* Create add to cart button */}
      <View style={styles.cartButtonContainer}>
        <Pressable style={styles.cartButton}>
          <Text style={styles.cartText}>Add to Cart</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default FoodItemDetailsScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    paddingBottom: 80,
  },
  imageContainer: {
    marginTop: 50,
    marginBottom: 10,
    height: 200,
    width: 300,
    alignSelf: "center",
  },
  image: {
    height: "100%",
    resizeMode: "cover",
    borderRadius: 5,
  },
  titleContainer: {},
  title: {
    fontSize: 35,
    textAlign: "center",
    fontWeight: "bold",
  },
  infoContainer: {
    alignContent: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  info: {
    fontSize: 15,
    color: "#aaaaaa",
  },
  ingredientsContainer: {
    marginTop: 25,
    marginBottom: 15,
    marginHorizontal: 15,
  },
  ingredientsTitle: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 10,
  },
  ingredients: {
    fontSize: 15,
    color: "#aaaaaa",
  },
  descriptionContainer: {
    marginHorizontal: 10,
  },
  descriptionTitle: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 5,
  },
  descriptionText: {
    fontSize: 15,
    color: "#aaa",
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
    borderColor: "#ccc",
    alignItems: "center",
    justifyContent: "center",
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
    backgroundColor: "#8B0000", // dark red (matches your theme)
    width: "80%",
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: "center",
  },

  cartText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
