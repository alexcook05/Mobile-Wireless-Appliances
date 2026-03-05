import { View, Text, StyleSheet } from "react-native";
import Title from "../components/Title";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { WindowWidth } from "@freakycoder/react-native-helpers";
import Colors from "../constants/colors";
import { LinearGradient } from "expo-linear-gradient";
import NavButton from "../components/NavButton";


function OrderReviewScreen(props) {
  const insets = useSafeAreaInsets();

  return (
    <LinearGradient
    colors ={[Colors.accent500, Colors.primary500]}
    >

    <View
      style={[
        styles.rootContainer,
        {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        },
      ]}
    >
      <View style={styles.titleContainer}>
        <Title>Order Summary</Title>
      </View>

      <View style={styles.subTitleContainer}>
        <Text style={styles.subTitle}>
          Your order has been placed with your order details below
        </Text>
      </View>

      <View style={styles.servicesContainer}>
        <Text style={styles.service}>Service Time:</Text>
        <Text style={styles.subService}>{props.time}</Text>
        <Text style={styles.service}>Services:</Text>
        {props.services.map((item) => {
          if (item.value) {
            return (
              <Text key={item.id} style={styles.subService}>
                {item.name}
              </Text>
            );
          }
        })}
        <Text style={styles.service}>Additional Signups:</Text>
        <Text style={styles.subService}>
          {props.newsletter ? "Newsletter" : ""}
        </Text>
        <Text style={styles.subService}>
          {props.rentalMember ? "Rental Membership" : ""}
        </Text>

        <View style={styles.subTitleContainer}>
          <Text style={styles.prices}>
            Subtotal: ${props.price.toFixed(2)}
          </Text>
          <Text style={styles.prices}>
            Sales Tax: ${(props.price * 0.06).toFixed(2)}
          </Text>
          <Text style={styles.prices}>
            Total: ${(props.price * 0.06 + props.price).toFixed(2)}
          </Text>
        </View>

        <View style={styles.buttonContainer}>
            <NavButton onPress={props.onNext}>Return Home</NavButton>
        </View>

      </View>
    </View>
    </LinearGradient>
  );
}

export default OrderReviewScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  titleContainer: {
    marginBottom: 10,
    marginHorizontal: 10,
    paddingVertical: 3,
    paddingHorizontal: 10,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: Colors.primary800,
  },
  subTitleContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  subTitle: {
    fontSize: 20,
    textAlign: "center",
    color: Colors.primary800,
    fontFamily: "newspaper"
    
  },
  servicesContainer: {
    flex: 3,
  },
  service: {
    fontSize: 20,
    color: Colors.primary800,
    fontFamily: "newspaper",
    marginTop: 25
  },
  subService: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
    textShadowColor: "#fff",
        textShadowRadius: 5,
        textShadowOffset: {width: 1, height: 1}
  },
  buttonContainer: {
    alignItems: "center"
  },
  prices: {
    fontSize: 30,
    textAlign: "center",
    color: Colors.primary800,
    fontFamily: "newspaper",
    textShadowColor: "#fff",
        textShadowRadius: 5,
        textShadowOffset: {width: 1, height: 1}
  }
});
