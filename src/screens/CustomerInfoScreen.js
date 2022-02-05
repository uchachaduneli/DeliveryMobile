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

const address = "მისამართი";
const naming = "დასახელება";
const operator = "ოპერატორი";

let dataLIst = [];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.item, backgroundColor, { marginTop: 40 }]}
  >
    <Text style={[styles.title, textColor]}>{item.title}</Text>
  </TouchableOpacity>
);

async function getUser() {
  try {
    const response = await axios.get(
      BASE_URL + "/parcel/userParcels/{userId}?status=4"
    );
    const resp = JSON.stringify(response.data);

    let respObj = JSON.parse(resp);
    dataLIst = [];
    respObj.items.forEach(function (row) {
      dataLIst.push({
        id: row.id,
        senderAddress: row.senderAddress,
        senderName: row.senderName,
        authorName: row.author.name + " " + row.author.lastName,
      });
    });
    console.log(dataLIst);
  } catch (error) {
    console.error(error);
  }
}

// useEffect(() => {
//   Alert.alert("a");
//   // await getUser();
// });
export default async function CustomerInfoScreen({ navigation }) {
  Alert.alert("b");
  await getUser();
  // const [selectedId, setSelectedId] = useState(null);
  // const [senderAddress, setSenderAddress] = useState(true);
  // const [senderName, setSenderName] = useState(true);
  // const [authorName, setauthorName] = useState(true);

  // const renderItem = ({ item }) => {
  //   // const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
  //   // const color = item.id === selectedId ? "white" : "black";
  //
  //   return (
  //     <Item
  //       item={item}
  //       // onPress={() => setSelectedId(item.id)}
  //       backgroundColor={{ backgroundColor }}
  //       textColor={{ color }}
  //     />
  //   );
  // };

  return (
    <Screen>
      <View style={styles.header}>
        <View style={styles.ViewsStyle}>
          <Text style={styles.TextsStyle}> {address}</Text>
        </View>

        <View style={styles.ViewsStyle}>
          <Text> {naming}</Text>
        </View>
        <View style={styles.ViewsStyle}>
          <Text> {operator}</Text>
        </View>
      </View>
      {/*<View style={{ height: "100%", flexDirection: "row" }}>*/}
      {/*<TouchableOpacity onPress={getUser}>*/}
      {/*  <Text> asd </Text>*/}
      {/*</TouchableOpacity>*/}
      {/*<View*/}
      {/*  style={{*/}
      {/*    padding: 8,*/}
      {/*    // height: "100%",*/}
      {/*  }}*/}
      {/*>*/}
      {/*<FlatList*/}
      {/*  style={styles.flatListStyle}*/}
      {/*  data={dataLIst}*/}
      {/*  renderItem={renderItem}*/}
      {/*  keyExtractor={(item) => item.id}*/}
      {/*  contentContainerStyle={{ paddingBottom: 50 }}*/}
      {/*/>*/}
      {/*</View>*/}
      {/*<View style={[styles.header, { marginTop: 0 }]}>*/}
      {/*  <TouchableOpacity>*/}
      {/*    <Text> {senderName} </Text>*/}
      {/*  </TouchableOpacity>*/}
      {/*  <TouchableOpacity>*/}
      {/*    <Text> {senderAddress} </Text>*/}
      {/*  </TouchableOpacity>*/}
      {/*  <TouchableOpacity>*/}
      {/*    <Text> {authorName} </Text>*/}
      {/*  </TouchableOpacity>*/}
      {/*</View>*/}
      {/*</View>*/}
    </Screen>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    backgroundColor: "pink",
    justifyContent: "space-between",
    // paddingHorizontal: 20,
    marginTop: 10,
    // height: 40,
    alignItems: "center",
  },
  ViewsStyle: {
    borderWidth: 0.5,
    height: height / 16,
    alignItems: "center",
    justifyContent: "center",
    width: width / 3,
  },
  TextsStyle: {
    color: "black",
  },
  flatListStyle: {
    borderWidth: 0.5,
    // height: height / 16,
    width: width,
    // backgroundColor: "yellow",
    flexDirection: "row",
  },
});
