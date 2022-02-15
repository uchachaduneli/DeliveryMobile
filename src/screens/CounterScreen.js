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

let width = Dimensions.get("window").width;
let height = Dimensions.get("window").height;

let arr = Array.from(Array(100).keys());

const Counter = () => {
  const RenderItem = ({ item }) => {
    return (
      <Screen>
        <View style={styles.container}>
          <TouchableOpacity style={styles.touch}>
            <Text> {arr[item + 1]} </Text>
          </TouchableOpacity>
        </View>
      </Screen>
    );
  };

  return <FlatList data={arr} renderItem={RenderItem} />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  touch: {
    justifyContent: "center",
    alignItems: "center",
    width: width / 2,
    height: height / 10,
    backgroundColor: "grey",
    marginTop: 30,
  },
});

export default Counter;
