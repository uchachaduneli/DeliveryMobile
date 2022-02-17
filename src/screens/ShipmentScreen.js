import React, { useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Picker,
  ScrollView,
} from "react-native";
import Profile from "./Profile";
import Screen from "./Screen";
import SelectDropdown from "react-native-select-dropdown";
import { AntDesign } from "@expo/vector-icons";
import { WIDTH, HEIGHT } from "../consts/Global";

const weight = "წონა";
const price = "ფასი";
const quantity = "რაოდენობა";
const standard = "სტანდარტული";
const courier = "გადამტანი: ";
const date = "თარიღი: ";
const tariff = "ტარიფი: ";
const operator = "ოპერატორი: ";
const notice = "შენიშვნა: ";
const insides = "შიგთავსი: ";
const payerList = ["გამგზავნი", "მიმღები", "მესამე პირი"];
const submit = ["არ არის მოთხოვნა", "ელექტრონული დასტური", "მიტანით დასტური"];

const ShipmentScreen = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const [Weight, onChangeWeight] = useState(null);
  const [number, onChangeNumber] = useState(null);
  const [Price, onChangePrice] = useState(null);

  return (
    <Screen>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={styles.ViewInpTop}>
            <View style={styles.innerView}>
              <Text style={styles.textStyle}>{weight}</Text>
              <TextInput
                style={styles.inputView}
                onChangeText={onChangeWeight}
                value={Weight}
                placeholder="25.5"
                // placeholderTextColor="black"
                textAlign="center"
                keyboardType="numeric"
              />
            </View>
            <View style={styles.innerView}>
              <Text style={styles.textStyle}>{quantity}</Text>
              <TextInput
                style={styles.inputView}
                onChangeText={onChangeNumber}
                value={number}
                placeholder="4"
                // placeholderTextColor="black"
                textAlign="center"
                keyboardType="numeric"
              />
            </View>
          </View>

          <View style={styles.ViewInp}>
            <View style={styles.innerView}>
              <Text style={styles.textStyle}>{price}</Text>
              <TextInput
                style={styles.inputView}
                onChangeText={onChangePrice}
                value={Price}
                placeholder="25.5"
                textAlign="center"
                keyboardType="numeric"
              />
            </View>
            <View style={styles.innerView}>
              <SelectDropdown
                defaultButtonText="მიმღები"
                // dropdownStyle={{ backgroundColor: "blue", width: 100 }}
                data={payerList}
                buttonStyle={{
                  // backgroundColor: "blue",
                  // width: "100%",
                  borderRadius: 6,
                }}
                renderDropdownIcon={(isOpened) => {
                  return (
                    <AntDesign
                      name={isOpened ? "caretup" : "caretdown"}
                      color={"#444"}
                      size={14}
                    />
                  );
                }}
                dropdownIconPosition={"right"}
                onSelect={(selectedItem, index) => {
                  console.log(selectedItem, index);
                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                  return selectedItem;
                }}
                rowTextForSelection={(item, index) => {
                  return item;
                }}
              />
            </View>
          </View>

          <View style={styles.ViewInp}>
            <View style={styles.innerView}>
              <Text style={styles.textStyle}>{courier}</Text>
              <Text> aq curieris saxeli </Text>
            </View>
          </View>
          <View style={styles.date}>
            <Text style={styles.textStyle}>{date}</Text>
            <Text style={styles.textStyle}>date</Text>
          </View>

          <SelectDropdown
            defaultButtonText="მიმღები"
            // dropdownStyle={{ backgroundColor: "blue", width: 100 }}
            data={payerList}
            buttonStyle={{
              // backgroundColor: "blue",
              width: "100%",
              borderRadius: 6,
              marginTop: 30,
            }}
            renderDropdownIcon={(isOpened) => {
              return (
                <AntDesign
                  name={isOpened ? "caretup" : "caretdown"}
                  color={"#444"}
                  size={14}
                />
              );
            }}
            dropdownIconPosition={"right"}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              return item;
            }}
          />
          <SelectDropdown
            defaultButtonText="არ არის მოთხოვნა"
            buttonStyle={{
              // backgroundColor: "blue",
              width: "100%",
              borderRadius: 6,
              marginTop: 15,
            }}
            renderDropdownIcon={(isOpened) => {
              return (
                <AntDesign
                  name={isOpened ? "caretup" : "caretdown"}
                  color={"#444"}
                  size={14}
                />
              );
            }}
            // dropdownStyle={{ backgroundColor: "blue" }}
            data={submit}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              return item;
            }}
          />
          <View style={styles.tariff}>
            <Text style={styles.textStyle}>{tariff}</Text>
            <Text style={styles.textStyle}>standard</Text>
          </View>

          <View style={styles.tariff}>
            <Text style={styles.textStyle}>{operator}</Text>
            <Text style={styles.textStyle}>standard</Text>
          </View>
          <View style={styles.tariff}>
            <Text style={styles.textStyle}>{notice}</Text>
            <Text style={styles.textStyle}>standard</Text>
          </View>
          <View style={[styles.tariff, { paddingBottom: 15 }]}>
            <Text style={styles.textStyle}>{insides}</Text>
            <Text style={styles.textStyle}>standard</Text>
          </View>
        </View>
      </ScrollView>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    // width: WIDTH,
    // paddingHorizontal: 20,
  },
  inputView: {
    // backgroundColor: "#fafafa",
    borderRadius: 4,
    width: WIDTH / 6,
    height: 30,
    borderColor: "#000",
    borderWidth: 1,
    // margin: 20,
  },
  // viewAndInp: {
  //   flexDirection: "row",
  //   marginTop: 30,
  //   alignItems: "center",
  //   width: WIDTH / 2,
  //   // backgroundColor: "yellow",
  //   // paddingHorizontal: 20,
  //   // flexWrap: "wrap",
  // },
  viewOfRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    paddingHorizontal: 20,
  },
  dropDownStyle: {
    width: 100,
    backgroundColor: "yellow",
  },
  textStyle: {
    marginRight: 5,
    fontSize: 16,
  },
  ViewInp: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    // paddingHorizontal: 20,
    marginTop: 30,
  },
  ViewInpTop: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    // paddingHorizontal: 20,
  },
  innerView: {
    flexDirection: "row",
    alignItems: "center",
  },
  date: {
    alignItems: "center",
    flexDirection: "row",
    marginTop: 15,
  },
  tariff: {
    alignItems: "center",
    flexDirection: "row",
    marginTop: 30,
  },
});

export default ShipmentScreen;
