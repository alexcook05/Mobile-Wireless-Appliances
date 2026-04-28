import { Pressable, StyleSheet, Text, View } from "react-native";
import Colors from "../constants/Colors";

function Button(props) {
  return (
    <Pressable onPress={props.onPress}>
        <View style={styles.buttonContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.text}>{props.children}</Text>
          </View>
        </View>
    </Pressable>
  );
}

export default Button;

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: Colors.primary500,
    paddingVertical: 15,
    paddingHorizontal: 35,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: Colors.primary200
  },
  textContainer: {
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
    textShadowColor: Colors.primary200,
    textShadowRadius: 15,
  },
});
