import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Modal,
  TextInput,
  Button,
  Image,
} from "react-native";
export default function App() {
  // Create state management variables
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [userQuestion, setUserQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  // Create array containing possible 8 ball answers
  const answers = [
    "Yes",
    "No",
    "Maybe",
    "Ask again later",
    "Definitely",
    "I don't think so",
    "Absolutely",
    "Not today",
  ];

  function start8BallHandler() {
    // Get random number within index
    const randomIndex = Math.floor(Math.random() * answers.length);
    // Set answer to corresponding index
    setAnswer(answers[randomIndex]);
    // Show modal screen
    setModalIsVisible(true);
  }

  function end8BallHandler() {
    // Reset all field when modal screen is closed
    setModalIsVisible(false);
    setUserQuestion("");
    setAnswer("");
  }

  return (
    <>
      <StatusBar style="dark" />
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <View style={styles.titleBackground}>
            <Text style={styles.title}>Magic 8 Ball</Text>
          </View>
        </View>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require("./assets/images/8ball.png")}
          />
        </View>
        <View style={styles.questionContainer}>
          <Text style={styles.inputLabel}>Ask the 8 ball a question:</Text>
          <TextInput
            style={styles.textInput}
            // Placeholder for empty field
            placeholder="Enter your question..."
            // When text is changed, update userquestion
            onChangeText={setUserQuestion}
            // Tie the entered value to the userquestion so
            // when it is reset to blank the input field will also reset
            value={userQuestion}
          />
        </View>

        <View style={styles.submitButtonContainer}>
          <Pressable
            // Add android ripple
            android_ripple={{ color: "#828cd9" }}
            // Style button when pressed
            style={({ pressed }) => pressed && styles.pressedButton}
            // When pressed, open modal screen
            onPress={start8BallHandler}
          >
            <View style={styles.submitButton}>
              <Text style={styles.submitButtonText}>Submit Question</Text>
            </View>
          </Pressable>
        </View>

        <Modal visible={modalIsVisible}>
          <View style={styles.modalRoot}>
            <Text style={styles.textLabel}>Your question was:</Text>
            <Text style={styles.outcomeLabel}>{userQuestion}</Text>

            <Text style={styles.textLabel}>The Magic 8 Ball Says:</Text>
            <Text style={styles.outcomeLabel}>{answer}</Text>

            <View style={styles.modalButtonContainer}>
              <View style={styles.modalButton}>
                <Button
                  title="Ask Again"
                  color="black"
                  // Close modal screen
                  onPress={end8BallHandler}
                />
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5a5ea5",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 40,
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
  },
  titleBackground: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 15,
    borderWidth: 3,
  },
  title: {
    fontSize: 60,
  },
  imageContainer: {
    marginTop: 50,
  },
  image: {
    width: 200,
    height: 200,
  },
  questionContainer: {
    flex: 1,
    marginTop: 30,
  },
  inputLabel: {
    fontSize: 25,
    fontWeight: "bold"
  },
  submitButtonContainer: {
    flex: 1,
    justifyContent: "center",
  },
  pressedButton: {
    opacity: 0.8,
  },
  submitButton: {
    backgroundColor: "#fff",
    padding: 10,
    paddingHorizontal: 20,
    borderWidth: 3,
    borderRadius: 15,
  },
  submitButtonText: {
    fontSize: 25,
  },
  modalRoot: {
    flex: 1,
    backgroundColor: "#5a5ea5",
    alignItems: "center",
  },
  textLabel: {
    fontSize: 25,
    color: "white",
    marginTop: 20,
  },
  textInput: {
    backgroundColor: "#ffe8e8",
    padding: 12,
    borderWidth: 1,
    borderRadius: 6,
    color: "#5a5ea5",
    marginBottom: 30,
  },
  outcomeLabel: {
    fontSize: 30,
  },
  modalButtonContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  modalButton: {
    width: "30%",
    marginHorizontal: 8,
  },
});
