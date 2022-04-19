import React, { useCallback, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  TouchableOpacity,
  RefreshControl,
} from "react-native";
import Screen from "./Screen";
import axios from "axios";
import { BASE_URL } from "../consts/Api";
import { WIDTH, HEIGHT, COLOR } from "../consts/Global";
import { useFocusEffect, useIsFocused } from "@react-navigation/native";

const address = "მისამართი";
const naming = "დასახელება";
const operator = "ოპერატორი";

export default function CustomerInfoScreen({ navigation, route }) {
  const [data, setData] = useState();
  const [refreshing, setRefreshing] = React.useState(false);
  const isFocused = useIsFocused();

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
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
    }, [])
  );

  const RenderItem = ({ item, index }) => {
    return (
      <View>
        <TouchableOpacity
          style={styles.flatListTouchStyle}
          onPress={() => {
            navigation.navigate("InfoDetail", {
              selectedObj: data?.items[index],
            });
          }}
        >
          <Text style={styles.flatListTextStyle}>{item.senderAddress}</Text>

          <Text style={styles.flatListTextStyle}>{item.senderName}</Text>

          <Text style={[styles.flatListTextStyle]}>
            {item.author?.name + " " + item.author?.lastName}
          </Text>
        </TouchableOpacity>

        <View style={styles.separator} />
      </View>
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
        <View style={[styles.ViewsStyle, { borderRightWidth: 0 }]}>
          <Text style={styles.TextsStyle}>{operator}</Text>
        </View>
      </View>
      <View style={{ flex: 1 }}>
        {/*// TODO: list*/}

        <FlatList
          showsVerticalScrollIndicator={false}
          style={styles.flatListStyle}
          data={data?.items}
          renderItem={RenderItem}
          keyExtractor={(item) => item.id}
          refreshControl={
            <RefreshControl
              enabled={true}
              refreshing={refreshing}
              onRefresh={onRefresh}
            />
          }
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    backgroundColor: COLOR.DARKBLUE,
    justifyContent: "space-between",
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
    marginTop: 15,
    width: WIDTH,
  },

  flatListTouchStyle: {
    overflow: "hidden",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  flatListTextStyle: {
    fontSize: 15,
    color: "black",
    width: WIDTH / 3.1,
    textAlign: "center",
    paddingRight: 5,
    paddingLeft: 5,
  },

  footerView: {
    flexDirection: "row",
    justifyContent: "space-between",
    textAlign: "center",
    flex: 1,
  },

  footerButton: {
    justifyContent: "center",
    backgroundColor: COLOR.DARKBLUE,
    width: WIDTH / 3,
    height: "100%",
  },
  footerButtonText: {
    textAlign: "center",
    fontSize: 16,
  },
  separator: {
    marginTop: 15,
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    marginBottom: 15,
    width: WIDTH,
  },

  newFlat: {
    backgroundColor: "pink",
  },
});
