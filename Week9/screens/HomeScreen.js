import { FlatList, Text, View, ImageBackground, StyleSheet } from "react-native";
import { COUNTRIES } from "../data/dummy-data";
import CountryGridTile from "../components/CountryGridTile";

function HomeScreen(props) {
  function renderCountryItem(itemData) {
    function pressHandler() {
      // Navigate screen to campgroundoverviewscreen, and pass countryid
      props.navigation.navigate("HotelsOverviewScreen", {
        countryId: itemData.item.id,
      });
    }

    return (
      
      // Pass country name and color to countrygridtile component
      <CountryGridTile
        name={itemData.item.name}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
    
  }

  return (
    <ImageBackground
          source={require("../assets/images/ocean-background.webp")}
          style={styles.background}
          imageStyle={{ opacity: 0.7 }}
        >
    <View>
      {/* Render country data in 2 column grid */}
      <FlatList
        data={COUNTRIES}
        keyExtractor={(item) => {
          return item.id;
        }}
        renderItem={renderCountryItem}
        numColumns={2}
      />
    </View>
    </ImageBackground>
    
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#ffc550"
  }
})