import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import Screen from "./Screen";
import { WIDTH, HEIGHT, COLOR } from "../consts/Global";

let arr = [1, 2, 3, 4];

const Counter = () => {
  const RenderItem = ({ item }) => {
    return (
      <TouchableOpacity style={styles.touch}>
        <Text style={styles.text}> {arr[item - 1]} </Text>
      </TouchableOpacity>
    );
  };

  return (
    <Screen>
      <View style={styles.container}>
        <FlatList
          data={arr}
          renderItem={RenderItem}
          contentContainerStyle={styles.listView}
        />
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    height: HEIGHT,
  },
  touch: {
    justifyContent: "center",
    alignItems: "center",
    width: WIDTH / 1.3,
    height: HEIGHT / 6,
    backgroundColor: COLOR.DARKBLUE,
    marginBottom: 20,
    borderRadius: 6,
  },
  listView: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    color: COLOR.WHITE,
  },
});

export default Counter;
