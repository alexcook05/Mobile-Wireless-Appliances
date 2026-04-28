import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../constants/Colors";


function FoodItem(props) {
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
        { backgroundColor: props.foodIndex % 2 == 0 ? "rgb(69, 69, 88)" : "rgb(54, 49, 65)",},
      ]}
    >
      {/* When food item is pressed, move to details screen */}
      <Pressable style={styles.button} onPress={selectedFoodHandler}>
        {/* Display food item image */}
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: props.imageUrl }} />
        </View>
        <View style={styles.infoContainer}>
          {/* Display food name */}
          <Text style={styles.infoText}>{props.name}</Text>
        </View>
        <View>
          {/* Display arrow icon */}
            <Ionicons name="chevron-forward" size={30} color="black" />
        </View>
      </Pressable>
    </View>
  );
}

export default FoodItem;

const styles = StyleSheet.create({
  itemContainer: {
    paddingHorizontal: 10,
    paddingTop: 10,
    paddingBottom: 10,

    flexDirection: "row",
  },
  button: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  imageContainer: {
    height: 100,
    width: 100,
    backgroundColor: Colors.primary800,
    borderRadius: 10,
  },
  image: {
    height: "100%",
    resizeMode: "cover",
    borderRadius: 10,
  },
  infoContainer: {
    flex: 1,
    alignItems: "center",
  },
  infoText: {
    fontFamily: "dunkin",
    color: Colors.accent200,
    textShadowColor: Colors.primary200,
    textShadowRadius: 8,
    fontSize: 16
  },
  headline: {
    fontSize: 35,
    fontFamily: "playfairBold",
    paddingBottom: 5,
    textAlign: "center",
  },
  space: {
    fontSize: 25,
    fontFamily: "playfair",
    paddingBottom: 5,
  },
  address: {
    textAlign: "center",
    width: "100%",
    fontSize: 15,
    fontFamily: "playfair",
    paddingBottom: 5,
  },
});
