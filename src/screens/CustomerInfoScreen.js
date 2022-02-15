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
import { WIDTH, HEIGHT } from "../consts/Global";

const address = "მისამართი";
const naming = "დასახელება";
const operator = "ოპერატორი";
const newOne = "ახალი";
const seen = "ნანახი";
const taken = "აღებული";

export default function CustomerInfoScreen({ navigation, route }) {
  const [data, setData] = useState();
  useEffect(() => {
    axios
      .get(BASE_URL + "/parcel/userParcels/{userId}?status=4")
      .then(function (response) {
        // handle success
        setData(response.data);

        // console.log("resp -", response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });

    // try {
    //   const response = axios.get(
    //     BASE_URL + "/parcel/userParcels/{userId}?status=4"
    //   );
    // const resp = JSON.stringify(response.data);

    // });
    // console.log(dataLIst);
    // } catch (error) {
    //   console.error(error);
    // }
  }, []);

  // console.log("data?.items - ", data?.items);
  // console.log("data - ", data);

  const RenderItem = ({ item, index }) => {
    // console.log("index -> ", index);
    // console.log("item - ", item.senderContactPerson);
    return (
      <TouchableOpacity
        style={styles.flatListTouchStyle}
        onPress={() => {
          navigation.navigate("InfoDetail", {
            // senderAddress: item.senderAddress,
            // senderName: item.senderName,
            // authorNameLastName: item.author.name + " " + item.author.lastName,
            // senderIdentNumber: item.senderIdentNumber,
            // senderCity: item.senderCity.name,
            // senderContactPerson: item.senderContactPerson,
            // senderPhone: item.senderPhone,
            selectedObj: data?.items[index],
          });
        }}
      >
        <Text style={styles.flatListTextStyle}>{item.senderAddress}</Text>
        <View style={styles.emptyView}></View>
        <Text style={styles.flatListTextStyle}>{item.senderName}</Text>
        <Text style={[styles.flatListTextStyle, { paddingRight: 5 }]}>
          {item.author.name + " " + item.author.lastName}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <Screen>
      <View style={styles.header}>
        <View style={styles.ViewsStyle}>
          <Text style={styles.TextsStyle}>{address}</Text>
        </View>

        <View style={styles.ViewsStyle}>
          <Text>{naming}</Text>
        </View>
        <View style={styles.ViewsStyle}>
          <Text>{operator}</Text>
        </View>
      </View>
      <View style={{ height: "85%", flexDirection: "row" }}>
        {/*// TODO: list*/}

        <FlatList
          style={styles.flatListStyle}
          data={data?.items}
          renderItem={RenderItem}
          // keyExtractor={(item) => item.id}
          // renderItem={(item) => console.log("asdasd2- > ", item)}
          contentContainerStyle={{ paddingBottom: 50 }}
          bounces={false}
        />
        {/*<Text>{route.params.username} </Text>*/}
      </View>

      <View style={styles.footerView}>
        <TouchableOpacity
          style={styles.footerButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.footerButtonText}>{newOne}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.footerButton}
          onPress={() => navigation.navigate("TrackingCodeScreen")}
        >
          <Text style={styles.footerButtonText}>{seen}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.footerButton}
          onPress={() => navigation.navigate("ShipmentScreen")}
        >
          <Text style={styles.footerButtonText}>{taken} </Text>
        </TouchableOpacity>
      </View>
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
    height: HEIGHT / 16,
    alignItems: "center",
    justifyContent: "center",
    width: WIDTH / 3,
  },
  TextsStyle: {
    color: "black",
  },
  flatListStyle: {
    borderWidth: 0.5,
    // height: height / 16,
    width: WIDTH,
    // backgroundColor: "yellow",
    flexDirection: "row",
  },

  flatListTouchStyle: {
    overflow: "hidden",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    borderWidth: 1,
    // height: 30,
  },

  flatListTextStyle: {
    fontSize: 15,
    color: "black",
    width: WIDTH / 3,
    textAlign: "center",
    marginTop: 5,
    marginBottom: 5,
  },

  footerView: {
    flexDirection: "row",
    justifyContent: "space-between",
    textAlign: "center",
    // height: "7%",
    flex: 1,
  },

  footerButton: {
    justifyContent: "center",
    backgroundColor: "green",
    width: WIDTH / 3,
    height: "100%",
    // borderWidth: 1,
  },
  footerButtonText: {
    textAlign: "center",
    fontSize: 16,
  },
  emptyView: {
    // width: 2,
    // height: 50,
    backgroundColor: "black",
  },
});
