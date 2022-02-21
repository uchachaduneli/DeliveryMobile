import Constants from "expo-constants";
import React from "react";
import { EvilIcons } from "@expo/vector-icons";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from "react-native";
import Screen from "./Screen";
import { WIDTH, COLOR, HEIGHT } from "../consts/Global";

const HomeScreen = ({ navigation, route }) => {
  const calls = "გამოძახებები";
  const handling = "ჩაბარება";
  const handlingPlus = "ჩაბარება  +";
  const rule = "მართვა";
  const taking = "აღება";

  return (
    <Screen>
      <ScrollView contentContainerStyle={styles.view}>
        <View
          style={{
            alignItems: "flex-end",
            width: WIDTH,
          }}
        >
          <TouchableOpacity
            style={styles.user}
            onPress={() => navigation.navigate("Profile")}
          >
            <EvilIcons name="user" size={44} color={COLOR.DARKGRAY} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={[styles.touchables, { marginTop: 30 }]}
          onPress={() => navigation.navigate("CustomerInfo")}
        >
          <Text style={styles.touchableText}>{calls}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.touchables}
          onPress={() => navigation.navigate("HandlingPlusScreen")}
        >
          <Text style={styles.touchableText}>{handlingPlus}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.touchables}
          onPress={() => navigation.navigate("TrackingCodeScreen")}
        >
          <Text style={styles.touchableText}>{handling}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchables}>
          <Text style={styles.touchableText}>{rule}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.touchables}
          onPress={() => navigation.navigate("GoInOutScreen")}
        >
          <Text style={styles.touchableText}>{taking}</Text>
        </TouchableOpacity>
      </ScrollView>
    </Screen>
  );
};

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
    backgroundColor: "#fff",
  },
  view: {
    flexGrow: 1,
    // justifyContent: "center",
    alignItems: "center",
  },
  touchables: {
    marginHorizontal: 130,
    margin: 10,
    // borderWidth: 0.2,
    borderRadius: 7,
    width: WIDTH / 1.5,
    height: HEIGHT / 10.5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#5564BE",
  },
  touchableText: {
    color: "#fff",
    fontSize: 16,
  },
  user: {
    margin: 20,
    // marginBottom: 40,
  },
});

export default HomeScreen;
