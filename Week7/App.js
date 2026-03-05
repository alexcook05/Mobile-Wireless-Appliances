import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useState, useMemo } from "react";
import Colors from "./constants/colors";
import { SafeAreaProvider } from "react-native-safe-area-context";
import HomeScreen from "./screens/HomeScreen";
import OrderReviewScreen from "./screens/OrderReviewScreen";
import { useFonts } from "expo-font";


export default function App() {

  const [fontsLoaded] = useFonts({
    melt: require("./assets/fonts/Melt-Swashes.otf"),
    newspaper: require("./assets/fonts/OldNewspaperTypes.ttf")
  });

  const [currentScreen, setCurrentScreen] = useState("home");
  const [currentPrice, setCurrentPrice] = useState(0);

  const timeRadioButtons = useMemo(
    () => [
      {
        id: "0",
        label: "Standard ($0)",
        value: "Standard",
        price: 0.0,
        borderColor: Colors.primary500,
        color: Colors.primary500,
      },
      {
        id: "1",
        label: "Expedited ($50)",
        value: "Expedited",
        price: 50.0,
        borderColor: Colors.primary500,
        color: Colors.primary500,
      },
      {
        id: "2",
        label: "Next Day ($100)",
        value: "Next Day",
        price: 100.0,
        borderColor: Colors.primary500,
        color: Colors.primary500,
      },
    ],
    [],
  );

  const [timeId, setTimeId] = useState(0);

  const [services, setServices] = useState([
    { id: 0, name: "Basic Tune-up ($50)", value: false, price: 50.0 },
    { id: 1, name: "Comprehensive Tune-Up ($75)", value: false, price: 75.0 },
    { id: 2, name: "Flat Tire Repair ($20)", value: false, price: 20.0 },
    { id: 3, name: "Brake Servicing ($50)", value: false, price: 50.0 },
    { id: 4, name: "Gear Servicing ($40)", value: false, price: 40.0 },
    { id: 5, name: "Chain Servicing ($15)", value: false, price: 15.0 },
    { id: 6, name: "Frame Repair ($35)", value: false, price: 35.0 },
    { id: 7, name: "Safety Check ($25)", value: false, price: 25.0 },
    { id: 8, name: "Accessory Install ($10)", value: false, price: 10.0 },
  ]);
  const [newsletter, setNewsletter] = useState(false);
  const [rentalMember, setRentalMember] = useState(false);

  function setServiceHandler(id) {
    setServices((prevServices) =>
      prevServices.map((item) =>
        item.id === id ? { ...item, value: !item.value } : item,
      ),
    );
  }

  function setNewsletterHandler() {
    setNewsletter((previous) => !previous);
  }

  function setRentalMemberHandler() {
    setRentalMember((previous) => !previous);
  }

  function homeScreenHandler() {
    setCurrentPrice(0);
    setCurrentScreen("home");
    setNewsletter(false);
    setRentalMember(false);

  }

  function orderReviewHandler() {
    let price = 0;
    for (let i = 0; i < services.length; i++) {
      if (services[i].value) {
        price = price + services[i].price;
      }
    }

    if (rentalMember) {
      price = price + 100.0;
    }

    price = price + timeRadioButtons[timeId].price;

    setCurrentPrice(price);

    setCurrentScreen("review");
  }

  let screen = (
    <HomeScreen
      timeId={timeId}
      services={services}
      newsletter={newsletter}
      rentalMember={rentalMember}
      timeRadioButtons={timeRadioButtons}
      onSetTimeId={setTimeId}
      onSetServices={setServiceHandler}
      onSetNewsletter={setNewsletterHandler}
      onSetRentalMember={setRentalMemberHandler}
      onNext={orderReviewHandler}
    />
  );

  if (currentScreen === "review") {
    screen = (
      <OrderReviewScreen
        time={timeRadioButtons[timeId].value}
        services={services}
        newsletter={newsletter}
        rentalMember={rentalMember}
        price={currentPrice}
        onNext={homeScreenHandler}
      />
    );
  }

  return (
    <>
      <StatusBar style="dark" />
      <SafeAreaProvider style={styles.container}>{screen}</SafeAreaProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.accent500,
    alignItems: "center",
    justifyContent: "center",
  },
});
