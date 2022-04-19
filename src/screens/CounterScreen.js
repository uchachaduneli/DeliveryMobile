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

const paperCount = [
  {
    id: "1",
    num: 1,
  },
  {
    id: "2",
    num: 2,
  },
  {
    id: "3",
    num: 3,
  },
  {
    id: "4",
    num: 4,
  },
];

const Counter = () => {
  const RenderItem = ({ item }) => {
    return (
      <TouchableOpacity style={styles.touch}>
        <Text style={styles.text}> {item.num} </Text>
      </TouchableOpacity>
    );
  };

  return (
    <Screen>
      <View style={styles.container}>
        <FlatList
          data={paperCount}
          renderItem={RenderItem}
          keyExtractor={(item) => item.id}
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
