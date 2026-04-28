import { View, Text, StyleSheet, Pressable } from "react-native";
import Colors from "../constants/Colors";
import { useContext } from "react";
import { CartContext } from "../store/context/cart-context";
import { FOODITEMS } from "../data/dummy_data";
import OrderList from "../components/List/OrderList";

function OrderScreen(props) {
  // Create context for ordere items in cart
  const orderedItemsCtx = useContext(CartContext);

  // Get all items in cart
  const orderedItems = orderedItemsCtx.items.map((cartItem) => {
    // Find food items matching the food items in cart
    const foodItem = FOODITEMS.find((item) => item.id === cartItem.id);

    return {
      // Return food item information
      ...foodItem,
      // Also return the quantity and calculate price of item
      quantity: cartItem.quantity,
      totalPrice: foodItem.price * cartItem.quantity,
    };
  });

  // Set variable to hold order total
  let orderTotal = 0;

  // Loop through all ordered items
  for (let i = 0; i < orderedItems.length; i++) {
    // Add price of ordered items to orderTotal
    orderTotal += orderedItems[i].totalPrice;
  }

  const taxRate = 0.06;
  const taxes = orderTotal * taxRate;
  const orderTotalTax = orderTotal + taxes;

  // If user has not ordered any items yet
  if (orderedItems.length === 0) {
    return (
      // Display warning message
      <View style={styles.rootContainer}>
        <View style={styles.emptyCartContainer}>
          <Text style={styles.emptyCart}>You have 0 items in your cart!</Text>
        </View>
      </View>
    );
  } else {
    // Else return items in cart
    return (
      <View style={styles.rootContainer}>
        {/* Create container containing list of food items in cart */}
        <View style={styles.listContainer}>
          {/* Display the list of food in cart | Must use context api to display items */}
          <OrderList items={orderedItems} />
        </View>
        {/* Display order subtotal */}
        <View style={styles.totalContainer}>
          <View style={styles.totalRow}>
            <Text style={styles.totalLabel}>Subtotal</Text>
            <Text style={styles.totalText}>${orderTotal.toFixed(2)}</Text>
          </View>
          {/* Display taxes on order */}
          <View style={styles.totalRow}>
            <Text style={styles.totalLabel}>Taxes (8%)</Text>
            <Text style={styles.totalText}>${taxes.toFixed(2)}</Text>
          </View>
          {/* Closed view to create a line to divide order total */}
          <View style={styles.divider} />
          <View style={styles.totalRow}>
            <Text style={styles.orderTotalLabel}>Order Total</Text>
            <Text style={styles.orderTotalText}>
              ${orderTotalTax.toFixed(2)}
            </Text>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          {/* Create checkout button, navigate to checkout screen when pressed */}
          <Pressable
          // Add style to button if it's being pressed
            style={({ pressed }) => [
            styles.button,
            pressed && styles.pressed,
          ]}
            onPress={() => props.navigation.navigate("Checkout")}
          >
            <Text style={styles.checkout}>Checkout</Text>
          </Pressable>
        </View>
      </View>
    );
  }
}

export default OrderScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: Colors.accent800,
  },
  listContainer: {
    marginTop: 20,
    flex: 1,
    width: "95%",
    alignSelf: "center",
    backgroundColor: Colors.accent800,
  },
  buttonContainer: {
    marginTop: "auto",
    marginBottom: 50,
    alignContent: "center",
    justifyContent: "center",
  },
  button: {
    width: "80%",
    backgroundColor: Colors.primary800,
    alignSelf: "center",
    paddingVertical: 15,
    alignItems: "center",
    borderRadius: 30,
  },
  checkout: {
    textAlign: "center",
    fontSize: 25,
    fontFamily: "skynight",
    color: Colors.primary200,
    textShadowColor: Colors.primary200,
    textShadowRadius: 15,
  },
  totalContainer: {
    marginTop: 10,
    marginBottom: 10,
    marginHorizontal: 20,
  },
  totalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 5,
  },
  totalLabel: {
    fontSize: 15,
    fontFamily: "dunkin",
    color: Colors.accent500,
  },
  totalText: {
    fontSize: 15,
    fontFamily: "dunkin",
    color: Colors.accent500,
  },
  divider: {
    borderBottomColor: Colors.primary200,
    borderBottomWidth: 1,
    marginVertical: 8,
    opacity: 0.3,
  },
  orderTotalLabel: {
    fontSize: 20,
    fontFamily: "dunkin",
    color: Colors.primary200,
  },
  orderTotalText: {
    fontSize: 20,
    fontFamily: "dunkin",
    color: Colors.primary200,
  },
  emptyCartContainer: {
    alignSelf: "center",
    flex: 1,
    width: "95%",
    alignItems: "center",
    justifyContent: "center",
  },
  emptyCart: {
    textAlign: "center",
    fontSize: 30,
    fontFamily: "skynight",
    color: Colors.primary200,
  },
  pressed: {
    color: Colors.accent500,
    opacity: 0.8
  }
});
