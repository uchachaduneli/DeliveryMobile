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

const barCodeText = "დაანათეთ შტრიხკოდს";
const add = "  add";
const BarCode = "შტრიხკოდი";
const reciever = "მიმღები";
const okCode = "OK კოდი(მიმღების ხელმოწერა)";
const remove = "წაშლა";
const anotherCode = "სხვა კოდი";

export default function HandlingPlusScreen() {
  const [barCode, onChangebarCode] = useState();

  return (
    <Screen>
      <View style={styles.container}>
        <Text style={styles.textStyle}>{barCodeText}</Text>
        <View style={styles.innerView}>
          <TextInput
            style={styles.inputView}
            onChangeText={onChangebarCode}
            value={barCode}
            textAlign="center"
            keyboardType="numeric"
          />
          <TouchableOpacity style={styles.touchStyle}>
            <Text style={[styles.textStyle, { color: COLOR.WHITE }]}>
              {add}
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.betweenComponents}>
          <Text style={[styles.textStyle, { marginBottom: 10 }]}>
            {BarCode}
          </Text>
          <Text style={[styles.textStyle, {}]}>843058408543080</Text>
        </View>
        <View style={styles.betweenComponents}>
          <Text style={[styles.textStyle, { marginBottom: 10 }]}>
            {reciever}
          </Text>
          <TextInput
            style={styles.inputViewStyle}
            onChangeText={onChangebarCode}
            value={barCode}
            textAlign="center"
            keyboardType="numeric"
          />
        </View>

        <View style={styles.bottomTouchViewStyle}>
          <TouchableOpacity style={styles.bottomTouchStyle}>
            <Text style={styles.touchTextStyle}>{okCode}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.bottomTouchStyle}>
            <Text style={styles.touchTextStyle}>{anotherCode}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.bottomTouchStyle}>
            <Text style={styles.touchTextStyle}>{remove}</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/*<View style={styles.bottomTouchViewStyle}>*/}
      {/*  <TouchableOpacity style={styles.bottomTouchStyle}>*/}
      {/*    <Text style={styles.touchTextStyle}>{okCode}</Text>*/}
      {/*  </TouchableOpacity>*/}
      {/*  <TouchableOpacity style={styles.bottomTouchStyle}>*/}
      {/*    <Text style={styles.touchTextStyle}>{remove}</Text>*/}
      {/*  </TouchableOpacity>*/}
      {/*  <TouchableOpacity style={styles.bottomTouchStyle}>*/}
      {/*    <Text style={styles.touchTextStyle}>{anotherCode}</Text>*/}
      {/*  </TouchableOpacity>*/}
      {/*</View>*/}
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    paddingHorizontal: 20,
    marginTop: 50,
  },
  inputView: {
    borderRadius: 4,
    width: "77%",
    height: 40,
    borderColor: COLOR.DARKBLUE,
    borderWidth: 1,
    fontSize: 16,
  },
  inputViewStyle: {
    borderRadius: 4,
    width: "100%",
    height: 40,
    borderColor: COLOR.DARKBLUE,
    borderWidth: 1,
    fontSize: 16,
    marginBottom: 30,
  },
  textStyle: {
    paddingRight: 10,
    fontSize: 16,
  },
  innerView: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    justifyContent: "space-between",
  },
  touchStyle: {
    borderRadius: 4,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    width: "20%",
    backgroundColor: COLOR.DARKBLUE,
  },

  betweenComponents: {
    marginTop: 40,
  },

  bottomTouchViewStyle: {
    // marginTop: HEIGHT / 3.0,
    // flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    // position: "absolute",
    // bottom: 80,
    // paddingHorizontal: 15,
    marginTop: "auto",
  },
  bottomTouchStyle: {
    width: "100%",
    backgroundColor: COLOR.DARKBLUE,
    height: 50,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  touchTextStyle: {
    fontSize: 16,
    color: COLOR.WHITE,
  },
});
