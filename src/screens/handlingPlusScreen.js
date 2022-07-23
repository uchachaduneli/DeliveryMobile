import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Screen from "./Screen";
import { EvilIcons, MaterialCommunityIcons } from "@expo/vector-icons";

import { COLOR } from "../consts/Global";
import KeybordAvoidingWrapper from "../components/KeybordAvoidingWrapper";

const barCodeText = "დაანათეთ შტრიხკოდს";
const add = "  add";
const BarCode = "შტრიხკოდი";
const reciever = "მიმღები";
const okCode = "OK კოდი(მიმღების ხელმოწერა)";
const remove = "წაშლა";
const anotherCode = "სხვა კოდი";

export default function HandlingPlusScreen({ navigation }) {
  const [barCode, onChangebarCode] = useState();
  const [recive, SetReceiver] = useState();

  return (
    <Screen>
      <View>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButtonStyle}
        >
          <MaterialCommunityIcons
            name="keyboard-backspace"
            size={30}
            color="black"
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("HomeScreen")}
          style={{
            width: 40,
            height: 36,
            position: "absolute",
            marginTop: 12,
            right: 12,
          }}
        >
          <EvilIcons name="close-o" size={37} color="black" />
        </TouchableOpacity>
      </View>
      <KeybordAvoidingWrapper>
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
              onChangeText={SetReceiver}
              value={recive}
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
      </KeybordAvoidingWrapper>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    paddingHorizontal: 20,
    marginTop: 60,
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
  backButtonStyle: {
    width: 40,
    height: 30,
    position: "absolute",
    marginTop: 12,
    left: 12,
  },
});
