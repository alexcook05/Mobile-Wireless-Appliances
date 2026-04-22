import { View, Text, StyleSheet, Pressable } from "react-native";
import Colors from "../constants/Colors";

function OrderScreen(props) {
  return (
    <View style={styles.rootContainer}>
      {/* Create container containing list of food items in cart */}
      <View style={styles.listContainer}>
        {/* Display the list of food in cart | Must use context api to display items */}
        <Text style={styles.listText}>List of Items in cart</Text>
      </View>
      Create container containing checkout button
      <View style={styles.buttonContainer}>
        {/* Create checkout button, navigate to checkout screen when pressed */}
        <Pressable
          style={styles.button}
          onPress={() => props.navigation.navigate("Checkout")}
        >
          <Text style={styles.checkout}>Checkout</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default OrderScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  listContainer: {
    marginTop: 50,
    height: 500,
    width: "95%",
    alignSelf: "center",
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "#cccccc",
  },
  listText: {
    textAlign: "center",
  },
  buttonContainer: {
    marginTop: "auto",
    marginBottom: 50,
    alignContent: "center",
    justifyContent: "center",
  },
  button: {
    width: 200,
    backgroundColor: Colors.primary300,
    alignSelf: "center",
    padding: 10,
    alignContent: "center",
    justifyContent: "center",
    borderRadius: 30,
  },
  checkout: {
    textAlign: "center",
    fontSize: 25,
    color: "white",
  },
});
