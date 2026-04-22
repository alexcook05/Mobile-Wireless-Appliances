import { Pressable, StyleSheet, Text, View } from "react-native";

function Button(props) {
    return(
        <Pressable onPress={props.onPress}>
            <View style={styles.buttonContainer}>
                <View style={styles.textContainer}>
                <Text style={styles.text}>{props.children}</Text>
                </View>
            </View>
        </Pressable>
    )
}

export default Button;

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: "#7e0000",
        paddingVertical: 15,
        paddingHorizontal: 35,
        borderRadius: 5
    },
    textContainer: {
        padding: 5,
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
        color: "white",
        fontSize: 20,
        textAlign: "center"
    }
})