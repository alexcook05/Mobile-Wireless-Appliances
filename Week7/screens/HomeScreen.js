import { Text, View, StyleSheet, ScrollView, Switch, ImageBackground } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Title from "../components/Title";
import { RadioGroup } from "react-native-radio-buttons-group";
import Colors from "../constants/colors";
import BouncyCheckBox from "react-native-bouncy-checkbox";
import NavButton from "../components/NavButton";
function HomeScreen(props) {
  // Set safe area screen boundaries
  const insets = useSafeAreaInsets();

  return (

    <ImageBackground
    source={require("../assets/images/backgroundTexture.jpg")}
    >
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
        <Title>Mike's Bike Shop</Title>
      </View>

      <ScrollView style={styles.scrollContainer}>
        <View style={styles.radioContainer}>
          <Text style={styles.radioHeader}>Service Time:</Text>
          <RadioGroup
            radioButtons={props.timeRadioButtons}
            onPress={props.onSetTimeId}
            selectedId={props.timeId}
            layout="row"
            containerStyle={styles.radioGroup}
            labelStyle={styles.radioGroupLabels}
          />
        </View>

        <View style={styles.rowContainer}>
          <View style={styles.checkBoxContainer}>
            <Text style={styles.checkBoxHeader}>Bike Services:</Text>
            <View style={styles.checkBoxSubContainer}>
              {props.services.map((item) => {
                return (
                  <BouncyCheckBox
                    key={item.id}
                    text={item.name}
                    onPress={props.onSetServices.bind(this, item.id)}
                    textStyle={{
                      textDecorationLine: "none",
                      color: Colors.primary800,
                      fontWeight: "bold"
                    }}
                    innerIconStyle={{
                      borderRadius: 0,
                      borderColor: Colors.primary800,
                    }}
                    iconStyle={{
                      borderRadius: 0,
                    }}
                    fillColor={Colors.primary800}
                    style={{ padding: 2 }}
                  />
                );
              })}
            </View>
          </View>
        </View>

        <View style={styles.rowContainer}>
          <View style={styles.addOnsContainer}>
            <View style={styles.addOnsSubContainer}>
              <Text style={styles.addOnsLabel}>Signup For Newsletter</Text>
              <Switch
                onValueChange={props.onSetNewsletter}
                value={props.newsletter}
                thumbColor={props.newsletter ? Colors.accent800 : Colors.primary500}
                trackColor={{false: Colors.primary800, true: Colors.primary300}}
              />
            </View>
          </View>

          <View style={styles.addOnsContainer}>
            <View style={styles.addOnsSubContainer}>
              <Text style={styles.addOnsLabel}>Rental Membership Signup ($100)</Text>
              <Switch
                onValueChange={props.onSetRentalMember}
                value={props.rentalMember}
                thumbColor={props.rentalMember ? Colors.accent800 : Colors.primary500}
                trackColor={{false: Colors.primary800, true: Colors.primary300}}
              />
            </View>
          </View>
        </View>

        <View style={styles.buttonContainer}>
            <NavButton onPress={props.onNext}>Submit Order</NavButton>
        </View>
      </ScrollView>
    </View>
    </ImageBackground>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    opacity: 0.8
  },
  titleContainer: {
    marginBottom: 10,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: Colors.primary800,
    paddingHorizontal: 10,
  },
  scrollContainer: {
    flex: 1,
  },
  radioContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  radioHeader: {
    fontSize: 30,
    color: Colors.primary800,
    fontFamily: "newspaper"
  },
  radioGroup: {
    paddingBottom: 20,
  },
  radioGroupLabels: {
    fontSize: 12,
    color: Colors.primary800,
    fontWeight: "bold"
  },
  rowContainer: {
    paddingBottom: 20,
    marginLeft: 10
  },
  checkBoxContainer: { 
  },
  checkBoxHeader: {
    fontSize: 20,
    color: Colors.primary800,
    fontFamily: "newspaper"
  },
  checkBoxSubContainer: {
    padding: 2,
  },
  addOnsContainer: {
    justifyContent: "space-between"
  },
  addOnsSubContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  addOnsLabel: {
    color: Colors.primary800,
    fontSize: 20,
    fontFamily: "newspaper"
  },
  buttonContainer: {
    alignItems: "center"
  }
});
