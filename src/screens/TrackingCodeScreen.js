import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Dimensions } from "react-native";
import Profile from "./Profile";
import Screen from "./Screen";

const code = "კოდი";
const price = "ფასი";
const tracking = "თრექინგ #";
const standard = "სტანდარტული  გადამ:";
const date = "თარიღი:";
const tariff = "ტარიფი";
const operator = "ოპერატორი";
const notice = "შენიშვნა";

let width = Dimensions.get("window").width;

const TrackingCodeScreen = () => {
  const [number, onChangeNumber] = useState(null);

  return (
    <Screen>
      <View style={styles.container}>
        <View style={styles.viewOfRow}>
          <View style={styles.viewAndInp}>
            <Text style={{ marginBottom: 10 }}>{tracking}</Text>
            <TextInput
              style={styles.inputView}
              onChangeText={onChangeNumber}
              value={number}
              placeholder="25.523"
              textAlign="center"
              keyboardType="numeric"
            />
          </View>
          <View style={styles.viewAndInpOfCode}>
            <Text style={{ marginRight: 10 }}>{code}</Text>
            <TextInput
              style={styles.inputViewOfCode}
              onChangeText={onChangeNumber}
              value={number}
              placeholder="25.523"
              textAlign="center"
              keyboardType="numeric"
            />
          </View>
          {/*</View>*/}
          {/*<View style={styles.viewOfRow}>*/}
          {/*  <View style={styles.viewAndInp}>*/}
          {/*    <Text style={{ marginRight: 5, fontSize: 16 }}>{price}</Text>*/}
          {/*    <TextInput*/}
          {/*      style={styles.inputView}*/}
          {/*      onChangeText={onChangeNumber}*/}
          {/*      value={number}*/}
          {/*      placeholder="25.523"*/}
          {/*      textAlign="center"*/}
          {/*      keyboardType="numeric"*/}
          {/*    />*/}
          {/*  </View>*/}
          {/*  <View style={styles.viewAndInp}>*/}
          {/*    <Text> aq unda qeshis togli</Text>*/}
          {/*  </View>*/}
          {/*</View>*/}
          {/*<View style={styles.viewOfRow}>*/}
          {/*  <View style={styles.viewAndInp}>*/}
          {/*    <Text style={{ marginRight: 5, fontSize: 16 }}>{standard}</Text>*/}
          {/*  </View>*/}
          {/*  <View style={styles.viewAndInp}>*/}
          {/*    <Text>{date}</Text>*/}
          {/*  </View>*/}
        </View>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    paddingHorizontal: 20,
  },
  inputView: {
    backgroundColor: "#fafafa",
    borderRadius: 4,
    width: width / 1.15,
    height: 35,
    borderColor: "#000",
    borderWidth: 1,
    // margin: 20,
  },
  inputViewOfCode: {
    backgroundColor: "#fafafa",
    borderRadius: 4,
    width: width / 1.35,
    height: 35,
    borderColor: "#000",
    borderWidth: 1,
    // margin: 20,
  },

  viewAndInp: {
    // flexDirection: "row",
    marginTop: 15,
    // alignItems: "center",
    // width: "50%",
  },
  viewOfRow: {
    // flexDirection: "row",
    // backgroundColor: "yellow",
    justifyContent: "space-between",
  },
  viewAndInpOfCode: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
});

export default TrackingCodeScreen;
