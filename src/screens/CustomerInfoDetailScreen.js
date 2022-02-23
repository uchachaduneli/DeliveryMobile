import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Alert,
  useWindowDimensions,
} from "react-native";
import Screen from "./Screen";
import axios from "axios";
import { BASE_URL } from "../consts/Api";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import ShipmentScreen from "./ShipmentScreen";
import { WIDTH, COLOR } from "../consts/Global";

const identificationCode = "საიდენტიფიკაციო კოდი:";
const name = "დასახელება:";
const senderCity = "ქალაქი:";
const address = "მისამართი:";
const senderContactPerson = "საკონტაქტო პირი:";
const phone = "ტელეფონი:";
const print = "ბეჭდვა";
const refuse = "უარი";
let selectedObj = {};

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

const ThirdRoute = () => (
  // <View style={{ flex: 1, backgroundColor: "#3ab74b" }} />
  <ShipmentScreen />
);

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
});
