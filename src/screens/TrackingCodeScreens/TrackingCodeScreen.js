import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Profile from "../Profile";
import Screen from "../Screen";
import { AntDesign } from "@expo/vector-icons";
import SelectDropdown from "react-native-select-dropdown";
import { COLOR, WIDTH } from "../../consts/Global";

const Code = "კოდი";
const tracking = "თრექინგ #";
const lowerCode = "ქვეკოდი";
const reciever = "მიმღები";
const idNumber = "პირ. ნომერი";
const relativeUnion = "ნათესაური კავშირი";
const explanation = "განმარტება";
const submit = ["OK", "NO"];
const Relationship = ["Relationship", "OTher"];
const newOne = "ახალი";
const save = "შენახვა";

const TrackingCodeScreen = () => {
  const [trackingCode, setTrackingCode] = useState();
  const [code, setCode] = useState();
  const [id, setId] = useState();
  const [relationUnion, setRelationUnion] = useState();
  const [explain, setExplain] = useState();

  return (
    <Screen>
      <ScrollView>
        <View style={styles.container}>
          <View>
            <Text style={[styles.TextStyle, { marginBottom: 10 }]}>
              {tracking}
            </Text>
            <TextInput
              style={styles.inputView}
              onChangeText={setTrackingCode}
              value={trackingCode}
              textAlign="center"
              keyboardType="numeric"
            />
          </View>

          <View style={styles.viewAndInpOfCode}>
            <Text style={styles.TextStyle}>{Code}</Text>
            <SelectDropdown
              defaultButtonText="OK"
              buttonStyle={{
                width: "65%",
                borderRadius: 4,
                height: 40,
              }}
              renderDropdownIcon={(isOpened) => {
                return (
                  <AntDesign
                    name={isOpened ? "caretup" : "caretdown"}
                    color={"#444"}
                    size={14}
                  />
                );
              }}
              // dropdownStyle={{ backgroundColor: "blue" }}
              data={submit}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index);
              }}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem;
              }}
              rowTextForSelection={(item, index) => {
                return item;
              }}
            />
          </View>

          <View style={styles.viewAndInpOfCode}>
            <Text style={styles.TextStyle}>{lowerCode}</Text>
            <SelectDropdown
              defaultButtonText="OK"
              buttonStyle={{
                width: "65%",
                borderRadius: 4,
                height: 40,
              }}
              renderDropdownIcon={(isOpened) => {
                return (
                  <AntDesign
                    name={isOpened ? "caretup" : "caretdown"}
                    color={"#444"}
                    size={14}
                  />
                );
              }}
              data={Relationship}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index);
              }}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem;
              }}
              rowTextForSelection={(item, index) => {
                return item;
              }}
            />
          </View>
          <View style={styles.innerView}>
            <Text style={styles.TextStyle}>{reciever}</Text>
            <TextInput
              style={styles.inputViews}
              onChangeText={setCode}
              value={code}
              placeholder="სახელი გვარი"
              textAlign="center"
              keyboardType="numeric"
            />
          </View>

          <View style={styles.innerView}>
            <Text style={styles.TextStyle}>{idNumber}</Text>
            <TextInput
              style={styles.inputViews}
              onChangeText={setId}
              value={id}
              placeholder="25484850985"
              textAlign="center"
              keyboardType="numeric"
            />
          </View>

          <View style={styles.innerView}>
            <Text style={styles.TextStyle}>{relativeUnion}</Text>
            <TextInput
              style={styles.inputViews}
              onChangeText={setRelationUnion}
              value={relationUnion}
              placeholder="_"
              textAlign="center"
              keyboardType="numeric"
            />
          </View>

          <View style={styles.explanationViewStyle}>
            <Text style={styles.explanationTextStyle}>{explanation}</Text>
            <TextInput
              style={styles.inputexplanationView}
              onChangeText={setExplain}
              value={explain}
              multiline={true}
              placeholder=" ნათესაური კავშირი"
            />
          </View>
        </View>
      </ScrollView>

      <View style={styles.bottomTouchViewStyle}>
        <TouchableOpacity style={styles.bottomTouchStyle}>
          <Text style={styles.touchTextStyle}>{save}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomTouchStyle}>
          <Text style={styles.touchTextStyle}>{newOne}</Text>
        </TouchableOpacity>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop: 15,
  },
  inputView: {
    backgroundColor: "#fafafa",
    borderRadius: 4,
    width: "100%",
    height: 35,
    borderColor: COLOR.DARKBLUE,
    borderWidth: 1,
  },
  inputViewOfCode: {
    backgroundColor: "#fafafa",
    borderRadius: 4,
    width: WIDTH / 1.35,
    height: 35,
    borderColor: "#000",
    borderWidth: 1,
    // margin: 20,
  },

  viewAndInpOfCode: {
    marginTop: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  TextStyle: {
    fontSize: 16,
    width: "30%",
  },

  innerView: {
    marginTop: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  inputViews: {
    backgroundColor: "#fafafa",
    borderRadius: 4,
    width: "65%",
    height: 35,
    borderColor: COLOR.DARKBLUE,
    borderWidth: 1,
  },
  explanationViewStyle: {
    marginTop: 30,
  },

  bottomTouchViewStyle: {
    // marginTop: HEIGHT / 3.0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    // position: "absolute",
    bottom: 20,
    paddingHorizontal: 20,
    marginTop: "auto",
  },
  bottomTouchStyle: {
    width: WIDTH / 2.3,
    backgroundColor: COLOR.DARKBLUE,
    height: 40,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
  },
  touchTextStyle: {
    fontSize: 16,
    color: COLOR.WHITE,
  },
  explanationTextStyle: {
    fontSize: 16,
    marginBottom: 10,
  },
  inputexplanationView: {
    backgroundColor: "#fafafa",
    borderRadius: 4,
    width: "100%",
    height: 60,
    borderColor: COLOR.DARKBLUE,
    borderWidth: 1,
    textAlignVertical: "top",
  },
});

export default TrackingCodeScreen;
