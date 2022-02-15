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

const weight = "წონა";
const price = "ფასი";
const quantity = "რაოდენობა";
const standard = "სტანდარტული  გადამ:";
const date = "თარიღი:";
const tariff = "ტარიფი";
const operator = "ოპერატორი";
const notice = "შენიშვნა";
const payerList = ["გამგზავნი", "მიმღები", "მესამე პირი"];
const submit = ["არ არის მოთხოვნა", "ელექტრონული დასტური", "მიტანით დასტური"];

const ShipmentScreen = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const [number, onChangeNumber] = useState(null);

  return (
    <Screen>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.viewOfRow}>
            <View style={styles.viewAndInp}>
              <Text style={{ marginRight: 5, fontSize: 16 }}>{weight}</Text>
              <TextInput
                style={styles.inputView}
                onChangeText={onChangeNumber}
                value={number}
                placeholder="25.523"
                textAlign="center"
                keyboardType="numeric"
              />
            </View>
            <View style={styles.viewAndInp}>
              <Text style={{ marginRight: 5 }}>{quantity}</Text>
              <TextInput
                style={styles.inputView}
                onChangeText={onChangeNumber}
                value={number}
                placeholder="25.523"
                textAlign="center"
                keyboardType="numeric"
              />
            </View>
          </View>
          <View style={styles.viewOfRow}>
            <View style={styles.viewAndInp}>
              <Text style={{ marginRight: 5, fontSize: 16 }}>{price}</Text>
              <TextInput
                style={styles.inputView}
                onChangeText={onChangeNumber}
                value={number}
                placeholder="25.523"
                textAlign="center"
                keyboardType="numeric"
              />
            </View>
            <View style={styles.viewAndInp}>
              <Text> aq unda qeshis togli</Text>
            </View>
          </View>
          <View style={styles.viewOfRow}>
            <View style={styles.viewAndInp}>
              <Text style={{ marginRight: 5, fontSize: 16 }}>{standard}</Text>
            </View>
            <View style={styles.viewAndInp}>
              <Text>{date}</Text>
            </View>
          </View>
          {/*<Picker*/}
          {/*  selectedValue={selectedValue}*/}
          {/*  style={{*/}
          {/*    height: 10,*/}
          {/*    width: 150,*/}
          {/*  }}*/}
          {/*  onValueChange={(itemValue, itemIndex) =>*/}
          {/*    setSelectedValue(itemValue)*/}
          {/*  }*/}
          {/*>*/}
          {/*  <Picker.Item label="გამგზავნი" value="java" />*/}
          {/*  <Picker.Item label="მიმღები" value="js" />*/}
          {/*  <Picker.Item label="მესამე პირი" value="jsad" />*/}
          {/*</Picker>*/}

          <SelectDropdown
            defaultButtonText="მიმღები"
            // dropdownStyle={{ backgroundColor: "blue", width: 100 }}
            data={payerList}
            buttonStyle={{
              // backgroundColor: "blue",
              width: "70%",
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
              width: "70%",
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
    paddingHorizontal: 14,
  },
  inputView: {
    backgroundColor: "#fafafa",
    borderRadius: 6,
    width: "50%",
    height: 30,
    borderColor: "#000",
    borderWidth: 1,
    // margin: 20,
  },
  viewAndInp: {
    flexDirection: "row",
    marginTop: 30,
    alignItems: "center",
    width: "50%",
    // flexWrap: "wrap",
  },
  viewOfRow: {
    flexDirection: "row",
    // backgroundColor: "yellow",
    justifyContent: "space-between",
  },
  dropDownStyle: {
    width: 100,
    backgroundColor: "yellow",
  },
});

export default ShipmentScreen;
