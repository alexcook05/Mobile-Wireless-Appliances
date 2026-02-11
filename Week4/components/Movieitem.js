import { Image, Text, View, StyleSheet } from "react-native";

// Create function to fill out each restaurant automatically
function MovieItem(props) {
  return (
    //Create restaurant with name, image, and rating from passed data
    <View style={styles.itemContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.itemTitle}>{props.name}</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image style={styles.itemImage} source={props.image} />
      </View>
      <View style={styles.ratingContainer}>
        <Text style={styles.itemRating}>IMDB Rating: ⭐{props.rating}</Text>
      </View>
    </View>
  );
}

// Export function
export default MovieItem;

// Style each container/text/image
const styles = StyleSheet.create({
  itemContainer: {
    marginBottom: 20,
  },
  titleContainer: {
    backgroundColor: "#f0e156",
    borderWidth: 3,
    borderRadius: 5,
    marginBottom: 10
  },
  itemTitle: {
    fontSize: 30,
    textAlign: "center"
  },
  imageContainer: {
    alignItems: "center",
    borderWidth: 3,
    borderRadius: 5,
    marginBottom: 10
  },
  itemImage: {
    width: "100%",
    height: 400,
    resizeMode: "cover"
  },
  ratingContainer: {
    backgroundColor: "#ffffff",
    borderWidth: 3,
    borderRadius: 5,
  },
  itemRating: {
    fontSize: 30,
    textAlign: "center"
  },
});
