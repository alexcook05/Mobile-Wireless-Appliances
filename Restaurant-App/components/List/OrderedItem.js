import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Entypo from "@expo/vector-icons/Entypo";
import Colors from "../../constants/Colors";


function OrderedItem(props) {
  const navigation = useNavigation();

  function selectedFoodHandler() {
    // Navigate to food item details screen and record selected food id
    navigation.navigate("Details", {
      foodId: props.id,
    });
  }

  return (
    <View
      style={[
        styles.itemContainer,
        // set food item background color
      ]}
    >
      {/* When food item is pressed, move to details screen */}
      <View style={styles.listContainer}>
        {/* Display food item image */}
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: props.imageUrl }} />
        </View>
        <View style={styles.infoContainer}>
            {/* Display item information */}
          <Text style={styles.nameText}>{props.name}</Text>
          <Text style={styles.infoText}>Quantity: {props.quantity}</Text>
          <Text style={styles.infoText}>${props.totalPrice.toFixed(2)}</Text>
        </View>
        <Pressable onPress={() => props.onRemoveItem(props.id)}>
          {/* Display arrow icon */}
          <Entypo name="trash" size={30} color="rgb(209, 206, 250)" />
        </Pressable>
      </View>
    </View>
  );
}

export default OrderedItem;

const styles = StyleSheet.create({
  itemContainer: {
    marginBottom: 8,
    marginHorizontal: 10,
    borderRadius: 10,
    overflow: "hidden",
  },
  listContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgb(54, 49, 65)",
    paddingVertical: 10,
    paddingHorizontal: 10,
    gap: 10,
  },
  imageContainer: {
    height: 80,
    width: 80,
  },
  image: {
    height: "100%",
    resizeMode: "cover",
    borderRadius: 8,
  },
  infoContainer: {
    flex: 1,
    justifyContent: "center",
    gap: 4,
  },
  nameText: {
    fontFamily: "dunkin",
    color: Colors.primary200,
    textShadowColor: Colors.primary200,
    textShadowRadius: 3,
    fontSize: 13,
  },
  infoText: {
    color: Colors.accent200,
    fontSize: 15,
    opacity: 0.5
  },
  trashButton: {
    padding: 8,
  },
  pressed: {
    opacity: 0.5,
  },
});