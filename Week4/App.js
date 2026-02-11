import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

// Import MovieItem component
import MovieItem from "./components/Movieitem";

export default function App() {
  // Array containing movie data
  const [movieItems, setMovieItems] = useState([
    {
      name: "About Time",
      image: require("./assets/images/abouttime.png"),
      rating: "7.8",
    },
    {
      name: "Scream",
      image: require("./assets/images/scream.png"),
      rating: "7.4",
    },
    {
      name: "Whiplash",
      image: require("./assets/images/whiplash.png"),
      rating: "8.5",
    },
    {
      name: "The Iron Giant",
      image: require("./assets/images/irongiant.png"),
      rating: "8.1",
    },
    {
      name: "The Devil Wears Prada",
      image: require("./assets/images/devilwearsprada.png"),
      rating: "7",
    },
    {
      name: "Black Swan",
      image: require("./assets/images/blackswan.png"),
      rating: "8",
    },
    {
      name: "Before Sunrise",
      image: require("./assets/images/beforesunrise.png"),
      rating: "8.1",
    },
    {
      name: "Cars",
      image: require("./assets/images/cars.jpg"),
      rating: "7.3",
    },
    {
      name: "The Shawshank Redemption",
      image: require("./assets/images/shawshank.png"),
      rating: "9.3",
    },
    {
      name: "Interstellar",
      image: require("./assets/images/interstellar.png"),
      rating: "8.7",
    },
  ]);
  return (
    <>
      <StatusBar style="dark" />
      {/* View containing entire app */}
      <View style={styles.rootContainer}>
        {/* App Title */}
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Top 10 Movies</Text>
        </View>
        <View style={styles.listContainer}>
          {/* Create FlatList */}
          <FlatList
            // Use movie items array for data
            data={movieItems}
            // Use item name as the key
            keyExtractor={(item, index) => {
              return item.name;
            }}
            // Render each item, passing data to fill out each movie
            renderItem={(itemData) => (
              <MovieItem
                name={itemData.item.name}
                image={itemData.item.image}
                rating={itemData.item.rating}
              />
            )}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: "#717171",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 40,
  },
  titleContainer: {
    flex: 1,
    backgroundColor: "#fff4b4",
    justifyContent: "center",
    marginBottom: 20,
    paddingHorizontal: 5,
    borderWidth: 5,
    borderRadius: 10,
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
  },
  listContainer: {
    flex: 8,
    width: "80%",
  },
});
