import {  useLayoutEffect } from "react";
import { FlatList, StyleSheet, Text, View, ImageBackground } from "react-native";
import { HOTELS, COUNTRIES } from "../data/dummy-data";
import HotelItem from "../components/HotelItem";


function HotelsOverviewScreen(props){

    // Get countryid
    const countryId = props.route.params.countryId;

    useLayoutEffect(() => {
        // Find corresponding countryid to the one clicked
        const country = COUNTRIES.find((country) => country.id===countryId);
        // Set country title if country is found, otherwise null
        props.navigation.setOptions({title: country ? country.name : null});
    }, [countryId, props.navigation]);

    // Find hotels within country
    const displayedHotels = HOTELS.filter((hotelItem) => {
        return hotelItem.countryId === countryId
    });

    // Display Hotel names
    function renderHotelItem(itemData){
        const hotelItemProps = {
            name: itemData.item.name,
            imageUrl: itemData.item.imageUrl,
            avgPrice: itemData.item.avgPrice,
            foundedYear: itemData.item.foundedYear,
            rating: itemData.item.rating,
            listIndex: itemData.item.index,
            
        }
        return <HotelItem {...hotelItemProps}/>
    }
     
    return (

        <ImageBackground
                  source={require("../assets/images/ocean-background.webp")}
                  style={styles.background}
                  imageStyle={{ opacity: 0.7 }}
                >

        <View style={styles.container}>
            <FlatList 
            data={displayedHotels}
            keyExtractor={(item) => item.id}
            renderItem={renderHotelItem}
            />
        </View>
        </ImageBackground>
    );
}

export default HotelsOverviewScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    },
    background: {
    flex: 1,
    backgroundColor: "#ffc550"
  }
})