import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  FlatList,
} from "react-native";
import Screen from "./Screen";

let width = Dimensions.get("window").width;
let height = Dimensions.get("window").height;

const address = "მისამართი";
const naming = "დასახელება";
const operator = "ოპერატორი";

export default function CustomerInfoScreen() {
  return (
    <Screen>
      <View style={styles.header}>
        <View style={styles.ViewsStyle}>
          <Text style={styles.TextsStyle}> {address}</Text>
        </View>

        <View style={styles.ViewsStyle}>
          <Text> {naming}</Text>
        </View>
        <View style={styles.ViewsStyle}>
          <Text> {operator}</Text>
        </View>
      </View>
      <View style={{ height: "100%", flexDirection: "row" }}>
        <FlatList style={styles.flatlistStyle} />
        <FlatList style={styles.flatlistStyle} />
        <FlatList style={styles.flatlistStyle} />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    backgroundColor: "pink",
    justifyContent: "space-between",
    // paddingHorizontal: 20,
    marginTop: 10,
    // height: 40,
    alignItems: "center",
  },
  ViewsStyle: {
    borderWidth: 0.5,
    height: height / 16,
    alignItems: "center",
    justifyContent: "center",
    width: width / 3,
  },
  TextsStyle: {
    color: "black",
  },
  flatlistStyle: {
    borderWidth: 0.5,
    // height: height / 16,
    width: width / 3,
    backgroundColor: "yellow",
  },
});
