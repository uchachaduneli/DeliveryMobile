import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  FlatList,
  TouchableOpacity,
  Alert,
} from "react-native";
import Screen from "./Screen";
import axios from "axios";
import { BASE_URL } from "../consts/Api";

let width = Dimensions.get("window").width;
let height = Dimensions.get("window").height;

const newOne = "გამგზავნი";
const seen = "მიმღები";
const taken = "გზავნილი";
const identificationCode = "საიდენტიფიკაციო კოდი:";
const name = "დასახელება:";
const senderCity = "ქალაქი:";
const address = "მისამართი:";
const senderContactPerson = "საკონტაქტო პირი:";
const phone = "ტელეფონი:";
const print = "ბეჭდვა";
const refuse = "უარი";

export default function ReceivedScreen({ navigation, route }) {
  return (
    <Screen>
      <View style={{ height: "92%", marginLeft: 10 }}>
        <Text style={styles.identificationTextStyle}>{identificationCode}</Text>
        <Text style={styles.identificationCodeStyle}>
          {route.params.senderIdentNumber}
        </Text>
        <View style={styles.separator} />

        <Text style={styles.identificationTextStyle}>{name}</Text>
        <Text style={styles.identificationCodeStyle}>
          {route.params.senderName}
        </Text>
        <View style={styles.separator} />

        <Text style={styles.identificationTextStyle}>{senderCity}</Text>
        <Text style={styles.identificationCodeStyle}>
          {route.params.senderCity}
        </Text>
        <View style={styles.separator} />

        <Text style={styles.identificationTextStyle}>{address}</Text>
        <Text style={styles.identificationCodeStyle}>
          {route.params.senderAddress}
        </Text>
        <View style={styles.separator} />

        <Text style={styles.identificationTextStyle}>
          {senderContactPerson}
        </Text>
        <Text style={styles.identificationCodeStyle}>
          {route.params.senderContactPerson}
        </Text>

        <View style={styles.separator} />

        <Text style={styles.identificationTextStyle}>{phone}</Text>
        <Text style={styles.identificationCodeStyle}>
          {route.params.senderPhone}
        </Text>
        <View style={styles.separator} />
      </View>

      <View style={styles.footerView}>
        {/*<TouchableOpacity style={styles.footerButton}>*/}
        {/*  <Text style={styles.footerButtonText}> {newOne} </Text>*/}
        {/*</TouchableOpacity>*/}
        {/*<TouchableOpacity style={styles.footerButton}>*/}
        {/*  <Text style={styles.footerButtonText}> {seen} </Text>*/}
        {/*</TouchableOpacity>*/}
        {/*<TouchableOpacity style={styles.footerButton}>*/}
        {/*  <Text style={styles.footerButtonText}> {taken} </Text>*/}
        {/*</TouchableOpacity>*/}
        <TouchableOpacity style={styles.footerButton}>
          <Text style={styles.footerButtonText}>{refuse}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.footerButton}
          onPress={() => navigation.navigate("ShipmentScreen")}
        >
          <Text style={styles.footerButtonText}>{print}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.footerButton}
          onPress={() => navigation.navigate("Counter")}
        >
          <Text style={styles.footerButtonText}>PU </Text>
        </TouchableOpacity>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  footerView: {
    flexDirection: "row",
    justifyContent: "space-between",
    textAlign: "center",
    height: 40,
    flex: 1, // marginBottom: 40,
    // marginTop: "85%",
  },

  footerButton: {
    justifyContent: "center",
    backgroundColor: "green",
    width: width / 3,
    height: "100%", // borderWidth: 1,
  },
  footerButtonText: {
    textAlign: "center",
    fontSize: 16,
  },
  identificationTextStyle: {
    marginTop: 40, // color: "blue",
  },

  identificationCodeStyle: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: "bold", // marginBottom: 40,
  },
  separator: {
    // marginTop: 20,
    borderBottomColor: "grey", // borderBottomColor: "azure",
    borderBottomWidth: 1, // marginBottom: 15,
  },
});
