import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  View,
  Platform,
  Pressable,
  Text,
  Modal,
  Button,
  useWindowDimensions,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Title from "../components/Title";
import Colors from "../constants/colors";
import { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import WheelPicker from "react-native-wheely";
import NavButton from "../components/NavButton";

function HomeScreen() {
  const insets = useSafeAreaInsets();
  // // setters for checkin date/show datepicker
  const [checkIn, setCheckIn] = useState(new Date());
  const [showCheckIn, setShowCheckIn] = useState(false);

  // Set check-in picker states to show to show or hide
  function showCheckInPicker() {
    setShowCheckIn(true);
  }
  function hideCheckInPicker() {
    setShowCheckIn(false);
  }

  // When the date is changed, set checkin to users date
  function onChangeCheckIn(event, selectedDate) {
    const currentDate = selectedDate;
    //
    if (Platform.OS === "android") {
      hideCheckInPicker(true);
    }
    setCheckIn(currentDate);
  }

  // setters for checkout date/show datepicker
  const [checkOut, setCheckOut] = useState(new Date());
  const [showCheckOut, setShowCheckOut] = useState(false);

  // Set check-out picker states to show to show or hide
  function showCheckOutPicker() {
    setShowCheckOut(true);
  }
  function hideCheckOutPicker() {
    setShowCheckOut(false);
  }

  // When the date is changed, set checkout to users date
  function onChangeCheckOut(event, selectedDate) {
    const currentDate = selectedDate;
    //
    if (Platform.OS === "android") {
      hideCheckOutPicker(true);
    }
    setCheckOut(currentDate);
  }

  // create setters and guest count range
  const guestCounts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  const [numGuests, setNumGuests] = useState(0);
  const [showNumGuests, setShowNumGuests] = useState(false);

  // set shownumguests state to show or hide
  function showNumGuestsPicker() {
    setShowNumGuests(true);
  }
  function hideNumGuestsPicker() {
    setShowNumGuests(false);
  }

  // Change number of guests to user choice
  function onChangeNumGuests(index) {
    setNumGuests(index);
  }

  // create setters and campsite count range
  const campsiteCount = [1, 2, 3, 4, 5];
  const [numCampsites, setNumCampsites] = useState(0);
  const [showNumCampsites, setShowNumCampsites] = useState(false);

  // set shownumcampsites state to show or hide
  function showNumCampsitesPicker() {
    setShowNumCampsites(true);
  }
  function hideNumCampsitesPicker() {
    setShowNumCampsites(false);
  }

  // Change number of campsites to user choice
  function onChangeNumCampsites(index) {
    setNumCampsites(index);
  }


  // create setter for results
  const [results, setResults] = useState("");

  // Function to update results
  function onReserveHandler(){
    // Update results with the user selected information
    let res = `Check In:\t\t${checkIn.toDateString()}\n`
    res = res + `Check Out:\t\t${checkOut.toDateString()}\n`
    res = res + `Number of Guests:\t\t${guestCounts[numGuests]}\n`
    res = res + `Number of CampSites:\t\t${campsiteCount[numCampsites]}\n`
    // Set results
    setResults(res);
  }

  // Get device dimensions
  const { width, height } = useWindowDimensions();
  // Change fontSizes according to device width
  const dateLabelFlex = {
    fontSize: width * 0.08,
  };
  const dateTextFlex = {
    fontSize: width * 0.04,
  };

  return (
    // Set image background, and style
    <ImageBackground
      source={require("../assets/images/campground.jpg")}
      resize="cover"
      style={styles.rootContainer}
      imageStyle={styles.backgroundImage}
    >
      <View
        style={[
          StyleSheet.rootContainer,
          {
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
            paddingLeft: insets.left,
            paddingRight: insets.right,
          },
        ]}
      >
        <ScrollView style={styles.scrollContainer}>
          {/* Title of Campground */}
          <View style={styles.titleContainer}>
            <Title>Green Pines Campground</Title>
          </View>

          
          <View style={styles.rowContainer}>
            <View style={styles.dateContainer}>
              <Text style={[styles.dateLabel, dateLabelFlex]}>Check In:</Text>
              <Pressable onPress={showCheckInPicker}>
                <Text style={[styles.dateText, dateTextFlex]}>
                  {/* Turn checkin date into a string and display */}
                  {checkIn.toDateString()}
                </Text>
              </Pressable>
            </View>
            <View style={styles.dateContainer}>
              <Text style={[styles.dateLabel, dateLabelFlex]}>Check Out:</Text>
              <Pressable onPress={showCheckOutPicker}>
                <Text style={[styles.dateText, dateTextFlex]}>
                  {/* Turn checkout date into a string and display */}
                  {checkOut.toDateString()}
                </Text>
              </Pressable>
            </View>
          </View>

          {/* Change datetimepicker/modal screen depending on platform */}
          <View>
            {showCheckIn && Platform.OS === "android" && (
              <DateTimePicker
                testID="dateTimePickerCheckInAndroid"
                value={checkIn}
                mode={"date"}
                display="spinner"
                onChange={onChangeCheckIn}
              />
            )}
            {showCheckIn && Platform.OS === "ios" && (
              <Modal
                animationType="slide"
                transparent={true}
                supportedOrientations={["portait", "landscape"]}
              >
                <View style={styles.centeredModalView}>
                  <View style={styles.modalView}>
                    <DateTimePicker
                      testID="dateTimePickerCheckInIOS"
                      value={checkIn}
                      mode={"date"}
                      display="spinner"
                      onChange={onChangeCheckIn}
                    />
                    <Button title="Confirm" onPress={hideCheckInPicker} />
                  </View>
                </View>
              </Modal>
            )}

            {showCheckOut && Platform.OS === "android" && (
              <DateTimePicker
                testID="dateTimePickerCheckOutAndroid"
                value={checkIn}
                mode={"date"}
                display="spinner"
                onChange={onChangeCheckOut}
              />
            )}
            {showCheckOut && Platform.OS === "ios" && (
              <Modal
                animationType="slide"
                transparent={true}
                supportedOrientations={["portait", "landscape"]}
              >
                <View style={styles.centeredModalView}>
                  <View style={styles.modalView}>
                    <DateTimePicker
                      testID="dateTimePickerCheckOutIOS"
                      value={checkIn}
                      mode={"date"}
                      display="spinner"
                      onChange={onChangeCheckOut}
                    />
                    <Button title="Confirm" onPress={hideCheckOutPicker} />
                  </View>
                </View>
              </Modal>
            )}
          </View>
            
          <View style={styles.rowContainer}>
            <Text style={[styles.dateLabel, dateLabelFlex]}>
              Number of Guests:
            </Text>
            <Pressable onPress={showNumGuestsPicker}>
              <View style={styles.dateContainer}>
                <Text style={[styles.dateText, dateTextFlex]}>{guestCounts[numGuests]}</Text>
              </View>
            </Pressable>

            <Modal
            animationType="slide"
            transparent={true}
            visible={showNumGuests}
            supportedOrientations={["portrait", "landscape"]}
            >
                <View style={styles.centeredModalView}>
                    <View style={styles.modalView}>
                        <Text style={[styles.dateText, dateTextFlex]}>Enter Number of Guests:</Text>
                        <WheelPicker 
                        selectedIndex={numGuests}
                        options={guestCounts}
                        onChange={onChangeNumGuests}
                        containerStyle={{width: 200}}
                        />
                        <Button title="Confirm" onPress={hideNumGuestsPicker} />
                    </View>
                </View>
            </Modal>
          </View>

          <View style={styles.rowContainer}>
            <Text style={[styles.dateLabel, dateLabelFlex]}>
              Number of Campsites:
            </Text>
            <Pressable onPress={showNumCampsitesPicker}>
              <View style={styles.dateContainer}>
                <Text style={[styles.dateText, dateTextFlex]}>{campsiteCount[numCampsites]}</Text>
              </View>
            </Pressable>

            <Modal
            animationType="slide"
            transparent={true}
            visible={showNumCampsites}
            supportedOrientations={["portrait", "landscape"]}
            >
                <View style={styles.centeredModalView}>
                    <View style={styles.modalView}>
                        <Text style={[styles.dateText, dateTextFlex]}>Enter Number of Campsites:</Text>
                        <WheelPicker 
                        selectedIndex={numCampsites}
                        options={campsiteCount}
                        onChange={onChangeNumCampsites}
                        containerStyle={{width: 200}}
                        />
                        <Button title="Confirm" onPress={hideNumCampsitesPicker} />
                    </View>
                </View>
            </Modal>
          </View>
            

            <View style={styles.buttonContainer}>
              {/* When reserve button is pressed, call the handler to update results */}
          <NavButton onPress={onReserveHandler}>Reserve Now</NavButton>
          </View>
          <View style={styles.resultsContainer}>
            <Text style={[styles.results, dateLabelFlex]}>{results}</Text>
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
    justifyContent: "center",
    alignItems: "center",
  },
  backgroundImage: {
    opacity: 0.3,
  },
  titleContainer: {
    padding: 7,
    marginVertical: 20,
    marginHorizontal: 20,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: Colors.primary500,
    backgroundColor: Colors.primary300,
  },
  scrollContainer: {
    flex: 1,
    width: 3000,
    maxWidth: "95%",
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingBottom: 20,
    marginBottom: 20,
  },
  dateContainer: {
    backgroundColor: Colors.primary300o5,
    padding: 10,
  },
  dateLabel: {
    color: Colors.primary500,
    fontFamily: "sugar",
    textShadowColor: "black",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 2,
  },
  dateText: {
    color: Colors.primary800,
    fontSize: 20,
    fontWeight: "bold",
  },
  centeredModalView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margintop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: Colors.primary300,
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "black",
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  buttonContainer: {
    alignItems: "center",

  },
  results: {
    textAlign: "center",
    color: Colors.primary500,
    fontFamily: "sugar",
    textShadowColor: "black",
    textShadowOffset: {widht: 2, height: 2},
    textShadowRadius: 2,
  },
  resultsContainer: {
    backgroundColor: Colors.primary300o5,
    marginHorizontal: 20,
    marginBottom: 20,
    padding: 10,
    borderRadius: 8,
  }
});
