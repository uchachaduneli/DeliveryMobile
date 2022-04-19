import React, { useEffect, useState } from "react";

import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Screen from "./Screen";
import { clearAllStorageData, getUserDataByKey } from "../consts/Helper";
import { WIDTH } from "../consts/Global";

const Profile = ({ navigation }) => {
  const [ID, setID] = useState();
  const [name, setName] = useState();
  const [username, setUsername] = useState();

  useEffect(async () => {
    // await getUserFullData();
    await getUserDataByKey("data").then(async (currentUserData) => {
      let currentUser = JSON.parse(currentUserData);
      if (currentUser) {
        setName(currentUser.sub);
        setUsername(currentUser.user.userName);
        setID(currentUser.user.id);
      }
    });
  });

  return (
    <Screen>
      <View style={styles.container}>
        <View style={styles.setting}>
          <View style={styles.userView}>
            <Text style={styles.userText}>#: {ID}</Text>
          </View>
          <View style={styles.separator} />
          <Text style={styles.userName}>სახელი, გვარი: </Text>
          <Text style={styles.userText}>{name} </Text>

          <View style={styles.separator} />
          <Text style={[styles.userName, { marginTop: 30 }]}>
            მომხმარებელი:
          </Text>
          <Text style={styles.userText}>{username} </Text>

          <View style={styles.separator} />

          <View style={styles.centered}>
            <TouchableOpacity
              style={styles.logOut}
              onPressIn={async () => {
                console.log("Clearing Local Storage");
                await clearAllStorageData()
                  .then(async () => {
                    navigation.navigate("Login", null);
                  })
                  .catch((ex) => {
                    console.log(ex);
                    navigation.navigate("Login", null);
                  });
              }}
            >
              <Text style={styles.logoutText}>გამოსვლა</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  setting: {
    margin: 20,
  },
  userView: {
    width: WIDTH,
    paddingTop: 20,
  },
  userText: {
    marginBottom: 10,
    marginTop: 20,
  },
  logoutText: {
    color: "white",
    fontSize: 15,
  },
  centered: {
    alignItems: "center",
    justifyContent: "center",
  },
  logOut: {
    width: "80%",
    borderRadius: 10,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    backgroundColor: "#5564BE",
  },
  userName: {
    marginTop: 10,
  },
  separator: {
    marginTop: 10,
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    marginBottom: 15,
  },
});

export default Profile;
