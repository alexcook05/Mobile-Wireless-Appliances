import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  Switch,
  Alert,
} from "react-native";
import { useContext, useState } from "react";
import Colors from "../constants/Colors";
import { useNavigation } from "@react-navigation/native";
import { CartContext } from "../store/context/cart-context";

function CheckoutScreen() {
  // Setter for food delivery
  const [isDelivery, setIsDelivery] = useState(false);

  // Set navigation variable
  const navigation = useNavigation();

  // import ordered items
  const orderedItemsCtx = useContext(CartContext);

  // Function to display alert when place order button is pressed
  function placeOrderHandler() {
    // Create alert hook
    Alert.alert(
      // Text displayed within alert
      "Order Placed",
      "Your order has been successfully placed",
      [
        {
           // Text within the close button
          text: "OK",
          // When ok button is pressed, navigate back to menu screen and clear the cart
          onPress: () => {
            (navigation.navigate("Restaurant"), orderedItemsCtx.clearCart());
          },
        },
      ],
    );
  }

  return (
    <View style={styles.rootContainer}>
      {/* container containing entire form */}
      <View style={styles.formContainer}>
        {/* Customer name input */}
        <TextInput
          style={styles.input}
          // Placeholder text/color
          placeholder="Customer Name"
          placeholderTextColor="#777"
        />

        {/* Customer phone number input */}
        <TextInput
          style={styles.input}
          // placeholder text/color
          placeholder="Customer Phone Number"
          placeholderTextColor="#777"
          // Change keyboard to display number pad when input is pressed
          keyboardType="phone-pad"
        />

        {/* If delivery is set to true */}
        {isDelivery && (
          // Display customer address input
          <TextInput
            style={styles.input}
            // placeholder text/color
            placeholder="Customer Address"
            placeholderTextColor="#777"
          />
        )}

        {/* Container with delivery text and switch */}
        <View style={styles.deliveryRow}>
          <View style={styles.deliveryTextBox}>
            <Text style={styles.deliveryText}>Would you like delivery?</Text>
          </View>
          <View style={styles.switchBox}>
            <Switch
              // Set value of switch to isDelivery(false)
              value={isDelivery}
              // When switch is changed, change isDelivery to true/false
              onValueChange={setIsDelivery}
            />
          </View>
        </View>

        {/* Place order button | When button is pressed, call placeOrderHanlder to display alert*/}
        <Pressable
          style={({ pressed }) => [
            styles.orderButton,
            pressed && styles.pressed,
          ]}
          onPress={placeOrderHandler}
        >
          <Text style={styles.orderButtonText}>Place Order</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default CheckoutScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: Colors.accent800,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  heading: {
    fontFamily: "skynight",
    fontSize: 45,
    color: Colors.primary200,
    textShadowColor: Colors.primary200,
    textShadowRadius: 15,
    textAlign: "center",
    marginBottom: 30,
  },
  formContainer: {
    width: "100%",
    alignItems: "center",
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: Colors.primary300,
    borderRadius: 15,
    paddingVertical: 15,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
    fontFamily: "dunkin",
    color: Colors.accent200,
    backgroundColor: Colors.primary800,
  },
  deliveryRow: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: Colors.primary800,
    borderRadius: 15,
    paddingVertical: 14,
    paddingHorizontal: 18,
    marginBottom: 20,
  },
  deliveryText: {
    fontFamily: "dunkin",
    fontSize: 16,
    color: Colors.accent200,
  },
  orderButton: {
    marginTop: 10,
    width: "80%",
    backgroundColor: Colors.primary800,
    borderRadius: 30,
    paddingVertical: 15,
    alignItems: "center",
  },
  orderButtonText: {
    color: Colors.primary200,
    fontSize: 25,
    fontFamily: "skynight",
    textShadowColor: Colors.primary200,
    textShadowRadius: 15,
  },
  pressed: {
    color: Colors.accent500,
    opacity: 0.8
  }
});
