import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Screen from "./Screen";
import { WIDTH, COLOR, HEIGHT } from "../consts/Global";

const carNumber = "მანქანის ნომერი";
const carNumberExample = "( მაგ: AA555BB )";
const odometer = "ჩვენება ოდომეტრზე";
const date = "თარიღი: ";
const time = "დრო: ";
const operation = "ოპერაცია: ";
const goIn = "შესვლა";
const goOut = "გასვლა";

export default function GoInOutScreen() {
  const [number, onChangeNumber] = useState(null);

  return (
    <Screen>
      <View style={styles.container}>
        <View style={styles.innerView}>
          <Text style={styles.textStyle}>{carNumber}</Text>
          <Text style={styles.textStyle}>{carNumberExample}</Text>
        </View>
        <TextInput
          style={styles.inputView}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="AG454TY"
          // placeholderTextColor="black"
          textAlign="center"
          keyboardType="numeric"
        />
        <View style={styles.betweenComponents}>
          <Text style={styles.textStyle}>{odometer}</Text>
          <TextInput
            style={styles.inputView}
            onChangeText={onChangeNumber}
            value={number}
            // placeholder="AG454TY"
            // placeholderTextColor="black"
            textAlign="center"
            keyboardType="numeric"
          />
        </View>
        <View style={styles.betweenComponentslast}>
          <View style={styles.innerView}>
            <Text style={styles.textStyle}>{date}</Text>
            <Text style={styles.textStyle}>aq unda iyos beckidan</Text>
          </View>
          <View style={styles.innerView}>
            <Text style={styles.textStyle}>{time}</Text>
            <Text style={styles.textStyle}>aq unda iyos beckidan</Text>
          </View>
          <View style={styles.innerView}>
            <Text style={styles.textStyle}>{operation}</Text>
            <Text style={styles.textStyle}>aq unda iyos beckidan</Text>
          </View>
        </View>
      </View>
      <View style={styles.bottomTouchViewStyle}>
        <TouchableOpacity style={styles.bottomTouchStyle}>
          <Text style={styles.touchTextStyle}>{goIn}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomTouchStyle}>
          <Text style={styles.touchTextStyle}>{goOut}</Text>
        </TouchableOpacity>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    paddingHorizontal: 20,
    marginTop: 20,
  },
  inputView: {
    // backgroundColor: "#fafafa",
    borderRadius: 4,
    width: "100%",
    height: 40,
    borderColor: COLOR.DARKBLUE,
    borderWidth: 1,
    // margin: 20,
  },
  textStyle: {
    marginBottom: 10,
    paddingRight: 10,
    fontSize: 16,
  },
  innerView: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  betweenComponents: {
    marginTop: 30,
  },
  betweenComponentslast: {
    marginTop: 50,
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
    height: 50,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
  },
  touchTextStyle: {
    fontSize: 16,
    color: COLOR.WHITE,
  },
});
