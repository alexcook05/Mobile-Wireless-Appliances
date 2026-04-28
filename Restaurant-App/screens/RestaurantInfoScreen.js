import { View, Text, Image, StyleSheet } from "react-native";
import Button from "../components/Button";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "../constants/Colors";

function RestaurantInfoScreen(props) {
  return (
    // Create restaurant info screen
    <LinearGradient
      colors={[Colors.accent800, Colors.primary800]}
      style={styles.rootContainer}
    >
      {/* Restaurant name */}
      <View style={styles.nameContainer}>
        <Text style={styles.restaurantName}>The Night Owl </Text>
      </View>
      {/* Image of restuarant */}
      <View style={styles.imageContainer}>
        {/* Web load image of restaurant */}
        <Image
          style={styles.image}
          source={{
            uri: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/b8/a8/7a/luvan-s-fish-camp.jpg?w=900&h=500&s=1",
          }}
        />
      </View>
      {/* Restaurant info */}
      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>Address</Text>
        <Text style={styles.infoText}>Phone Number</Text>
      </View>
      {/* Button to navigate to main menu screen */}
      <View style={styles.buttonContainer}>
        {/* when pressed navigate to restaurant screen */}
        <Button
          style={styles.button}
          onPress={() => props.navigation.navigate("Restaurant")}
        >
          View Menu
        </Button>
      </View>
    </LinearGradient>
  );
}

export default RestaurantInfoScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: "#e2e2e2",
  },
  nameContainer: {
    alignItems: "center",
    marginTop: 150,
    marginBottom: 20,
  },
  infoContainer: {
    flex: 1,
    alignItems: "center",
    paddingTop: 15,
    paddingBottom: 10,
  },
  imageContainer: {
    marginVertical: 10,
    height: 300,
    alignItems: "center",
  },
  image: {
    height: "95%",
    width: "80%",
    resizeMode: "cover",
    borderRadius: 5,
  },
  restaurantName: {
    fontSize: 50,
    textAlign: "center",
    color: Colors.accent200,
    fontFamily: "matchaSalt",
    textShadowColor: Colors.primary200,
    textShadowRadius: 30,
  },
  infoText: {
    fontSize: 35,
    textAlign: "center",
    color: Colors.accent200,
    marginBottom: 5,
    fontFamily: "matchaSalt",
    textShadowColor: Colors.primary200,
    textShadowRadius: 30,
  },
  buttonContainer: {
    flex: 1,
    width: 200,
    alignSelf: "center",

  },
});
