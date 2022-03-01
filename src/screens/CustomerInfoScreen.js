import React, { useCallback, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  FlatList,
  TouchableOpacity,
  RefreshControl,
  Alert,
} from "react-native";
import Screen from "./Screen";
import axios from "axios";
import { BASE_URL } from "../consts/Api";
import { WIDTH, HEIGHT, COLOR } from "../consts/Global";
import ReceivedScreen from "./ReceivedScreen";
import { useFocusEffect, useIsFocused } from "@react-navigation/native";

const address = "მისამართი";
const naming = "დასახელება";
const operator = "ოპერატორი";
const newOne = "ახალი";
const seen = "ნანახი";
const taken = "აღებული";

export default function CustomerInfoScreen({ navigation, route }) {
  const [data, setData] = useState();
  const [refreshing, setRefreshing] = React.useState(false);
  const isFocused = useIsFocused();

  const wait = (timeout) => {
    return new Promise((resolve) => setTimeout(resolve, timeout));
  };

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    //  wait(200).then(() => setRefreshing(false));
    // Alert.alert("asdasd");
    loadData();
    setRefreshing(false);
  }, []);

  const loadData = () => {
    axios
      .get(BASE_URL + "/parcel/userParcels/{userId}?status=4")
      .then(function (response) {
        setData(response.data);
        // console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  useFocusEffect(
    useCallback(() => {
      loadData();
      // console.log("asd");
    }, [])
  );

  // useEffect(() => {
  //   loadData();
  //   console.log("12123");
  // }, []);

  // console.log("data?.items - ", data?.items);

  const RenderItem = ({ item, index }) => {
    // console.log("item - ", item.author);

    return (
      <TouchableOpacity
        style={styles.flatListTouchStyle}
        onPress={() => {
          navigation.navigate("InfoDetail", {
            selectedObj: data?.items[index],
          });
        }}
      >
        <Text style={styles.flatListTextStyle}>{item.senderAddress}</Text>

        <View style={styles.emptyView}></View>

        <Text style={styles.flatListTextStyle}>{item.senderName}</Text>

        <Text style={[styles.flatListTextStyle, { paddingRight: 5 }]}>
          {item.author?.name + " " + item.author?.lastName}
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
          <Text style={styles.TextsStyle}>{naming}</Text>
        </View>
        <View style={styles.ViewsStyle}>
          <Text style={styles.TextsStyle}>{operator}</Text>
        </View>
      </View>
      <View style={{ height: "85%", flexDirection: "row" }}>
        {/*// TODO: list*/}
        <ScrollView
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          <FlatList
            style={styles.flatListStyle}
            data={data?.items}
            renderItem={RenderItem}
            keyExtractor={(item) => item.id}
            bounces={false}
          />
        </ScrollView>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    backgroundColor: COLOR.DARKBLUE,
    justifyContent: "space-between",
    // paddingHorizontal: 20,
    // marginTop: 10,
    // height: 40,
    alignItems: "center",
  },
  ViewsStyle: {
    borderRightWidth: 0.5,
    borderColor: COLOR.WHITE,
    height: HEIGHT / 16,
    alignItems: "center",
    justifyContent: "center",
    width: WIDTH / 3,
  },
  TextsStyle: {
    color: "#fff",
  },
  flatListStyle: {
    // borderWidth: 0.5,
    width: WIDTH,
    flexDirection: "row",
    // paddingBottom: 20,
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
    backgroundColor: COLOR.DARKBLUE,
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
