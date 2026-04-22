import { View, Text, StyleSheet, TextInput, Pressable, Switch, Alert } from "react-native";
import { useState } from "react";
import Colors from "../constants/Colors";

function CheckoutScreen() {
    // Setter for food delivery
  const [isDelivery, setIsDelivery] = useState(false);

  // Function to display alert when place order button is pressed
  function placeOrderHandler() {
  Alert.alert(
    // Text display within alert
    "Order Placed",
    "Your order has been successfully placed",
    [
        // Text within the close button
      { text: "OK" }
    ]
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
        <Pressable style={styles.orderButton} onPress={placeOrderHandler}>
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
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  formContainer: {
    width: "100%",
    alignItems: "center",
  },
  input: {
    width: "100%",
    borderWidth: 2,
    borderColor: Colors.primary300,
    borderRadius: 15,
    paddingVertical: 15,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 20,
    backgroundColor: "#fff",
  },
  deliveryRow: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  deliveryTextBox: {
    width: "60%",
    paddingVertical: 12,
    paddingHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  deliveryText: {
    fontSize: 15,
    textAlign: "center",
  },
  switchBox: {
    paddingVertical: 10,
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  orderButton: {
    marginTop: 10,
    width: "75%",
    backgroundColor: Colors.primary300,
    borderRadius: 25,
    paddingVertical: 14,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
  },
  orderButtonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
});