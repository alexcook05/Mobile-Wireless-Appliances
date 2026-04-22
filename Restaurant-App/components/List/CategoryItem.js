import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

function CategoryItem(props) {
  const navigation = useNavigation();

    function selectedCategoryHandler() {
      // Navigate to food items screen and record selected category name
      navigation.navigate("Items", {
        category: props.category,
      });
    }

  return (
    <View
      style={[
        styles.itemContainer,
        // alternate category background color
        { backgroundColor: props.categoryIndex % 2 == 0 ? "#fff" : "#f7f7f7" },
      ]}
    >
      {/* When category is pressed, move to food items screen */}
      <Pressable style={styles.button} onPress={selectedCategoryHandler}>
        {/* Display category image */}
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: props.imageUrl }} />
        </View>
        <View style={styles.infoContainer}>
          {/* Display category name */}
          <Text style={styles.infoText}>{props.category}</Text>
        </View>
        <View>
          {/* display arrow icon */}
            <Ionicons name="chevron-forward" size={30} color="black" />
        </View>
      </Pressable>
    </View>
  );
}

export default CategoryItem;

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
    alignItems: "center"
  },
  imageContainer: {
    height: 100,
    width: 100,
  },
  image: {
    height: "100%",
    resizeMode: "cover",
    borderRadius: 7,
  },
  infoContainer: {
    flex: 1,
    alignItems: "center",
  },
  headline: {
    fontSize: 35,
    fontFamily: "playfairBold",
    paddingBottom: 5,
    textAlign: "center"
  },
  space: {
    fontSize: 25,
    fontFamily: "playfair",
    paddingBottom: 5
  },
  address: {
    textAlign: "center",
    width: "100%",
    fontSize: 15,
    fontFamily: "playfair",
    paddingBottom: 5
  }
});
