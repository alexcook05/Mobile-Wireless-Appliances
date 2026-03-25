import { LinearGradient } from "expo-linear-gradient";
import { Platform, Pressable, StyleSheet, Text, View } from "react-native";
import Colors from "../constants/Colors";


function CountryGridTile(props){
    return (
        // Return name of country in pressable linear gradient container
        <View style={styles.gridItem}>
            <Pressable
            // style button based on if its being pressed or not
            style={({ pressed }) => [
                styles.button,
                pressed ? styles.buttonPressed : null
            ]}
            android_ripple={{color: Colors.primary300}}
            onPress={props.onPress}
            >
                {/* Add gradient over button */}
                <LinearGradient
                colors={[props.color, props.color, props.color, Colors.accent300o75]}
                style={styles.innerContainer}
                >
                    <Text style={styles.name}>
                        {/* Display country name */}
                        {props.name}
                    </Text>
                </LinearGradient>
            </Pressable>
        </View>
    );
}

export default CountryGridTile;

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        elevation: 4,
        backgroundColor: "white",
        shadowColor: "black",
        shadowOpacity: 0.25,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 8,
        overflow: Platform.OS === "android" ? "hidden" : "visible", // Hide android ripple overflow only on android
    },
    button: {
        flex: 1
    },
    innerContainer: {
        flex: 1,
        padding: 16,
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center"
    },
    name: {
        textAlign: "center",
        fontSize: 30,
        fontFamily: "pirata"
    }
})