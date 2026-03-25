import { Modal, View, Button, Image, StyleSheet } from "react-native";
import Colors from "../constants/Colors";

function ImageViewModal(props) {
  return (
    <View style={styles.container}>
      
      {/* Modal screen with hotel image, and return button */}
      <Modal
        visible={props.isVisible}
        animationType="slide"
        transparent={false}
      >
        <View style={styles.modalContainer}>
          <Image style={styles.image} source={{ uri: props.imageUrl }} />
          <Button title="Return to Hotels" onPress={props.onClose} />
        </View>
      </Modal>
    </View>
  );
}

export default ImageViewModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary800,
  },
  image: {
    width: "100%",
    height: "80%",
    resizeMode: "contain",
  },
});
