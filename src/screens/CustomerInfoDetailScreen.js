import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  useWindowDimensions,
  TextInput,
} from "react-native";
import Screen from "./Screen";
import axios from "axios";
import { BASE_URL } from "../consts/Api";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import ShipmentScreen from "./ShipmentScreen";
import { WIDTH, COLOR } from "../consts/Global";
import SelectDropdown from "react-native-select-dropdown";
import { AntDesign } from "@expo/vector-icons";

const identificationCode = "საიდენტიფიკაციო კოდი:";
const name = "დასახელება:";
const senderCity = "ქალაქი:";
const address = "მისამართი:";
const senderContactPerson = "საკონტაქტო პირი:";
const phone = "ტელეფონი:";
const print = "ბეჭდვა";
const refuse = "უარი";
let selectedObj = {};

const weight = "წონა";
const Price = "ფასი";
const quantity = "რაოდენობა";
const courier = "გადამტანი: ";
const date = "თარიღი: ";
const tariff = "ტარიფი: ";
const operator = "ოპერატორი: ";
const notice = "შენიშვნა: ";
const insides = "შიგთავსი: ";
const money = ["ინვოისი", "ქეში", "ბარათი"];
const payerList = ["გამგზავნი", "მიმღები", "მესამე პირი"];
const submit = ["არ არის მოთხოვნა", "ელექტრონული დასტური", "მიტანით დასტური"];
let selectedCash;
let selectedpayerSide;
let selectedPermission;

const FirstRoute = () => (
  <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.compView}>
      <Text style={styles.identificationTextStyle}>{identificationCode}</Text>
      <Text style={styles.identificationCodeStyle}>
        {selectedObj.senderIdentNumber}
      </Text>
      {/*</View>*/}
      <View style={styles.separator} />

      <Text style={styles.identificationTextStyle}>{name}</Text>
      <Text style={styles.identificationCodeStyle}>
        {selectedObj.senderName}
      </Text>
      <View style={styles.separator} />

      <Text style={styles.identificationTextStyle}>{senderCity}</Text>
      <Text style={styles.identificationCodeStyle}>
        {selectedObj.senderCity.name}
      </Text>
      <View style={styles.separator} />

      <Text style={styles.identificationTextStyle}>{address}</Text>
      <Text style={styles.identificationCodeStyle}>
        {selectedObj.senderAddress}
      </Text>
      <View style={styles.separator} />

      <Text style={styles.identificationTextStyle}>{senderContactPerson}</Text>
      <Text style={styles.identificationCodeStyle}>
        {selectedObj.senderContactPerson}
      </Text>

      <View style={styles.separator} />

      <Text style={styles.identificationTextStyle}>{phone}</Text>
      <Text style={styles.identificationCodeStyle}>
        {selectedObj.senderPhone}
      </Text>
      <View style={styles.separator} />
    </View>
  </ScrollView>
);

const SecondRoute = () => (
  <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.compView}>
      <Text style={styles.identificationTextStyle}>{identificationCode}</Text>
      <Text style={styles.identificationCodeStyle}>
        {selectedObj.receiverIdentNumber}
      </Text>
      {/*</View>*/}
      <View style={styles.separator} />

      <Text style={styles.identificationTextStyle}>{name}</Text>
      <Text style={styles.identificationCodeStyle}>
        {selectedObj.receiverName}
      </Text>
      <View style={styles.separator} />

      <Text style={styles.identificationTextStyle}>{senderCity}</Text>
      <Text style={styles.identificationCodeStyle}>
        {selectedObj.receiverCity.name}
      </Text>
      <View style={styles.separator} />

      <Text style={styles.identificationTextStyle}>{address}</Text>
      <Text style={styles.identificationCodeStyle}>
        {selectedObj.receiverAddress}
      </Text>
      <View style={styles.separator} />

      <Text style={styles.identificationTextStyle}>{senderContactPerson}</Text>
      <Text style={styles.identificationCodeStyle}>
        {selectedObj.receiverContactPerson}
      </Text>

      <View style={styles.separator} />

      <Text style={styles.identificationTextStyle}>{phone}</Text>
      <Text style={styles.identificationCodeStyle}>
        {selectedObj.receiverPhone}
      </Text>
      <View style={styles.separator} />
    </View>
  </ScrollView>
);

const ThirdRoute = () => {
  const [Weight, onChangeWeight] = useState("" + selectedObj.weight);
  const [count, onChangeCount] = useState("" + selectedObj.count);
  const [price, onChangePrice] = useState("" + selectedObj.totalPrice);

  const fetchApi = async () => {
    console.log(
      "bazidan wamogebuli ",
      "count",
      count,
      "weigh ",
      Weight,
      "price",
      price
    );
    await axios
      .get(
        "http://ec2-16-170-252-161.eu-north-1.compute.amazonaws.com:8080/parcel/4"
      )
      .then(function (response) {
        console.log(response.data.totalPrice);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const Save = async () => {
    console.log(
      "gagzavnis win ",
      "count",
      count,
      "weigh ",
      Weight,
      "price",
      price
    );

    console.log("cash - ", selectedCash);

    axios
      .put(
        "http://ec2-16-170-252-161.eu-north-1.compute.amazonaws.com:8080/parcel/" +
          selectedObj.id,
        {
          id: selectedObj.id,
          count: count,
          weight: Weight,
          payerSide: selectedpayerSide,
          totalPrice: price,
          paymentType: selectedCash,
          status: { id: selectedObj.status.id },
          // Object: selectedObj,
        }
      )
      .then((res) => {
        // console.log("response -> ", res.data.id);
        // onChangeWeight("");
        // onChangeNumber("");
        // onChangePrice("");
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  // console.log("asd - ", res.data);

  return (
    <Screen>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={styles.ViewInpTop}>
            <View style={styles.innerView}>
              <Text style={styles.textStyle}>{weight}</Text>
              <TextInput
                style={styles.inputView}
                onChangeText={(text) => {
                  onChangeWeight(text);
                }}
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
                onChangeText={onChangeCount}
                value={count}
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
                defaultButtonText="ქეში"
                data={money}
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
                onSelect={(selectedItem, index) => {}}
                buttonTextAfterSelection={(selectedItem, index) => {
                  // index === 0 ? selectedCash : (selectedCash = index);
                  selectedCash = index + 1;
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
            onSelect={(selectedItem, index) => {}}
            buttonTextAfterSelection={(selectedItem, index) => {
              selectedpayerSide = index + 1;
              console.log("pay - ", selectedpayerSide);
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
            onSelect={(selectedItem, index) => {}}
            buttonTextAfterSelection={(selectedItem, index) => {
              selectedPermission = index + 1;
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
            <Text style={styles.textStyle}>{selectedObj.comment}</Text>
          </View>
          <View style={[styles.tariff, { paddingBottom: 15 }]}>
            <Text style={styles.textStyle}>{insides}</Text>
            <Text style={styles.textStyle}>{selectedObj.content}</Text>
          </View>
          <TouchableOpacity onPress={fetchApi}>
            <Text>click here</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={Save}>
            <Text>send data</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </Screen>
  );
};

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  Third: ThirdRoute,
});

export default function CustomerInfoScreen({ navigation, route }) {
  const layout = useWindowDimensions();

  selectedObj = route.params.selectedObj;

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "first", title: "გამგზავნი" },
    { key: "second", title: "მიმღები" },
    { key: "Third", title: "გზავნილი" },
  ]);

  // console.log("data12 - ", route.params.data);

  return (
    <Screen>
      <View style={{ height: "92%", paddingHorizontal: 20, width: WIDTH }}>
        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{ width: layout.width }}
          style={styles.tabViewStyle}
          renderTabBar={(props) => (
            <TabBar
              {...props}
              renderLabel={({ route, color }) => (
                <Text style={{ color: "white" }}>{route.title}</Text>
              )}
              style={{
                backgroundColor: COLOR.DARKBLUE,
              }}
            />
          )}
        />
      </View>
      <View style={styles.footerView}>
        <TouchableOpacity
          style={styles.footerButton}
          onPress={() => navigation.navigate("CameraScreen")}
        >
          <Text style={styles.footerButtonText}>{refuse} </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Text style={styles.footerButtonText}>{print} </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.footerButton}
          onPress={() => navigation.navigate("Counter")}
        >
          <Text style={styles.footerButtonText}>PU </Text>
        </TouchableOpacity>
      </View>
      {/*</ScrollView>*/}
    </Screen>
  );
}

const styles = StyleSheet.create({
  footerView: {
    flexDirection: "row",
    justifyContent: "space-between",
    textAlign: "center",
    height: "6.5%",
    // marginBottom: 40,
    // marginTop: "85%",
    width: WIDTH,
    paddingHorizontal: 20,
  },

  footerButton: {
    justifyContent: "center",
    backgroundColor: COLOR.DARKBLUE,
    width: "32%",
    // height: 30,
    borderRadius: 6,
  },
  footerButtonText: {
    textAlign: "center",
    fontSize: 16,
    color: "white",
  },
  identificationTextStyle: {
    marginTop: 35, // color: "blue",
    fontWeight: "bold", // marginBottom: 40,
  },

  identificationCodeStyle: {
    marginTop: 10,
    fontSize: 16,
    // color: "black",
    marginBottom: 5,
  },
  separator: {
    // marginTop: 20,
    borderBottomColor: "black",
    // borderBottomColor: "azure",
    borderBottomWidth: 1, // marginBottom: 15,
  },

  compView: {
    width: "100%", // height: height / 10,
    // backgroundColor: "pink",
  },
  tabViewStyle: {
    paddingBottom: 30,
    // backgroundColor: 'black'
    // backgroundColor: "blue",
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

  container: {
    flex: 1,

    marginTop: 20,
  },
});
