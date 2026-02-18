import { useSafeAreaInsets } from "react-native-safe-area-context";
import { View, StyleSheet, Text, FlatList } from "react-native";
import NavButton from "../components/NavButton";
import Title from "../components/Title";
import EventItem from "../components/MenuItems";
import { useState } from "react";

function MenuScreen(props) {
  // Set safe area screen boundaries
  const insets = useSafeAreaInsets();
  const [eventItems, setEventItems] = useState([
    {
      name: "Huge Burger",
      image: require("../assets/images/huge-burger.webp"),
      price: "$3.49",
      id: 1,
    },
    {
      name: "Spicy Chicken Sandwich",
      image: require("../assets/images/spicy-chicken.webp"),
      price: "$4.99",
      id: 2,
    },
    {
      name: "Cheese Dog",
      image: require("../assets/images/cheese-dog.webp"),
      price: "$0.99",
      id: 3,
    },
    {
      name: "Chili Cheese Fries",
      image: require("../assets/images/chili-cheese-fries.webp"),
      price: "$3.55",
      id: 4,
    },
    {
      name: "Banana Nut Milkshake",
      image: require("../assets/images/banana-nut-milkshake.webp"),
      price: "$3.99",
      id: 5,
    },
  ]);

  return (
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
        <Title>Menu</Title>
      </View>

      <View style={styles.listContainer}>
        <FlatList 
        data = {eventItems}

        keyExtractor={(item) => item.id}

        alwaysBounceVertical={false}
        showsVerticalScrollIndicator={false}
        renderItem={(itemData) => {
            return(
                <EventItem 
                name={itemData.item.name}
                image={itemData.item.image}
                price={itemData.item.price}
                />
            );
        }}
        />
      </View>

      <View style={styles.buttonContainer}>
        <NavButton onPress={props.onNext}>Home Page</NavButton>
      </View>
    </View>
  );
}

export default MenuScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: "center",
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center"
  },
  listContainer: {
    flex: 7,
    width: 300
  },
  buttonContainer: {
    flex: 1
  }
});
