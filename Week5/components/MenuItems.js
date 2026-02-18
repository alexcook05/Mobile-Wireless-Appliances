import { View, Text, StyleSheet, Image } from "react-native";
import Colors from "../constants/colors";

function EventItem(props) {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{props.name}</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={props.image} />
      </View>
      <View style={styles.priceContainer}>
        <Text style={styles.price}>{props.price}</Text>
      </View>
    </View>
  );
}

export default EventItem;

const styles = StyleSheet.create({
  itemContainer: {
    marginBottom: 20
  },
  titleContainer: {
    backgroundColor: Colors.primary500,
    borderWidth: 3,
    borderRadius: 5,
    marginBottom: 5
  },
  title: {
    fontSize: 40,
    textAlign: "center",
    fontFamily: "hamston"
  },
  imageContainer: {
    alignItems: "center",
    borderWidth: 3,
    borderRadius: 5,
    backgroundColor: "black",
    marginBottom: 5
  },
  image: {
    width: "100%",
    height: 250,
    resizeMode: "cover"
  },
  priceContainer: {
    backgroundColor: Colors.primary500,
    borderWidth: 3,
    borderRadius: 5
  },
  price: {
    fontSize: 40,
    textAlign: "center",
    fontFamily: "hamston"
  }
});
