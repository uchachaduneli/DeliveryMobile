import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, ScrollView } from "react-native";
import Screen from "./Screen";
import SelectDropdown from "react-native-select-dropdown";
import { AntDesign } from "@expo/vector-icons";
import { WIDTH, COLOR } from "../consts/Global";

const weight = "წონა";
const Price = "ფასი";
const quantity = "რაოდენობა";
const courier = "გადამტანი: ";
const date = "თარიღი: ";
const tariff = "ტარიფი: ";
const operator = "ოპერატორი: ";
const notice = "შენიშვნა: ";
const insides = "შიგთავსი: ";
const payerList = ["გამგზავნი", "მიმღები", "მესამე პირი"];
const submit = ["არ არის მოთხოვნა", "ელექტრონული დასტური", "მიტანით დასტური"];

const ShipmentScreen = () => {
  const [Weight, onChangeWeight] = useState(null);
  const [number, onChangeNumber] = useState(null);
  const [price, onChangePrice] = useState(null);

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
                textAlign="center"
                keyboardType="numeric"
              />
            </View>
          </View>

          <View style={styles.ViewInp}>
            <View style={styles.innerView}>
              <Text style={styles.textStyle}>{Price}</Text>
              <TextInput
                style={styles.inputView}
                onChangeText={onChangePrice}
                value={price}
                placeholder="25.35"
                textAlign="center"
                keyboardType="numeric"
              />
            </View>
            <View style={styles.innerView}>
              <SelectDropdown
                defaultButtonText="მიმღები"
                data={payerList}
                buttonStyle={{
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

    marginTop: 20,
  },
  inputView: {
    borderRadius: 4,
    width: WIDTH / 5,
    height: 30,
    borderColor: COLOR.DARKBLUE,
    borderWidth: 1,
  },
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
    marginTop: 30,
  },
  ViewInpTop: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
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
