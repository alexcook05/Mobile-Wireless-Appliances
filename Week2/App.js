import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Linking } from "react-native";

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require("./assets/images/BusinessCardPhoto.jpg")}
          />
        </View>
        <View style={styles.informationContainer}>
          <Text style={styles.textName}>Alexander Cook</Text>
          <Text
            style={styles.text}
            onPress={() => Linking.openURL("mailto:acook25@hgtc.edu")}
          >
            acook25@hgtc.edu
          </Text>
          <Text
            style={styles.text}
            onPress={() => Linking.openURL("tel:8436539612")}
          >
            843-653-9612
          </Text>
          <Text
            style={styles.text}
            onPress={() => Linking.openURL("https://github.com/alexcook05")}
          >
            Open GitHub Profile
          </Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#84d2ff",
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    flex: 1,
    paddingTop: 50,
  },
  image: {
    height: 350,
    width: 250,
    resizeMode: "cover",
    borderWidth: 3,
    borderColor: "#ffffff",
  },
  informationContainer: {
    flex: 1,
  },
  textName: {
    fontSize: 50,
    fontStyle: "italic",
    marginBottom: 25,
    textAlign: "center",
  },
  text: {
    fontSize: 20,
    fontStyle: "italic",
    marginBottom: 15,
    textAlign: "center",
  },
});
