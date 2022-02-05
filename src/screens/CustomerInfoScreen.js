import React, {useEffect, useState} from "react";
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
import {BASE_URL} from "../consts/Api";
import {getUserDataByKey} from "../consts/Helper";

let width = Dimensions.get("window").width;
let height = Dimensions.get("window").height;

let dataLIst = [];

const Item = ({item, onPress, backgroundColor, textColor}) => (
    <TouchableOpacity
        onPress={onPress}
        style={[styles.item, backgroundColor, {marginTop: 40}]}
    >
        <Text style={[styles.title, textColor]}>{item.title}</Text>
    </TouchableOpacity>
);

async function getUserParcels(userId, statusId) {
    const response = await axios.get(
        BASE_URL + "/parcel/userParcels/" + userId + "?status=" + statusId
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
    // console.log(dataLIst);
}

export default function CustomerInfoScreen({navigation}) {
    useEffect(async () => {
        await getUserDataByKey("user_id").then(async (id) => {
            await getUserParcels(id, 1);
        });

    });

    const RenderItem = ({item, index}) => {
        // console.log("index -> ", index);
        // console.log("item - ", item);
        const color2 = "blue";
        return (
            <TouchableOpacity
                style={{
                    overflow: "hidden",
                    // width: width / 3,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: 10,
                    borderWidth: 1,
                }}
                onPress={() => {
                    navigation.navigate("HomeScreen", {
                        name: item.senderAddress,
                        colors: color2,
                    });
                }}
            >
                <Text
                    style={{
                        fontSize: 15,
                        color: "black",
                        width: width / 3,
                        textAlign: "center",
                    }}
                >
                    {item.senderAddress}
                </Text>
                <Text
                    style={{
                        fontSize: 15,
                        color: "black",
                        width: width / 3,
                        textAlign: "center",
                    }}
                >
                    {item.senderName}
                </Text>
                <Text
                    style={{
                        fontSize: 15,
                        color: "black",
                        width: width / 3,
                        textAlign: "center",
                        paddingRight: 5,
                    }}
                >
                    {item.authorName}
                </Text>
            </TouchableOpacity>
        );
    };

    const [selectedId, setSelectedId] = useState(null);

    return (
        <Screen>
            <View style={styles.header}>
                <View style={styles.ViewsStyle}>
                    <Text style={styles.TextsStyle}> მისამართი</Text>
                </View>

                <View style={styles.ViewsStyle}>
                    <Text> დასახელება</Text>
                </View>
                <View style={styles.ViewsStyle}>
                    <Text> ოპერატორი</Text>
                </View>
            </View>
            <View style={{height: "100%", flexDirection: "row"}}>
                <FlatList
                    style={styles.flatListStyle}
                    data={dataLIst}
                    renderItem={RenderItem}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={{paddingBottom: 50}}
                />
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