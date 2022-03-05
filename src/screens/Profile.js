import { useEffect, useState } from "react";

import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Screen from "./Screen";
import { storeUserData, getUserDataByKey } from "../consts/Helper";
import { WIDTH } from "../consts/Global";

const Profile = () => {
  const [name, setName] = useState();
  const [username, setUsername] = useState();

  useEffect(async () => {
    await getUserDataByKey("user_desc").then(async (desc) => {
      setName(desc);
      // setUsername(name);
    });
  });

  return (
    <Screen>
      <View style={styles.container}>
        <View style={styles.setting}>
          <View style={styles.userView}>
            <Text style={styles.userText}>მომხმარებელი: </Text>

            <Text style={styles.userName}> {name} </Text>
          </View>
          <View style={styles.separator} />
          <Text style={[styles.userText, { marginTop: 30 }]}>UserName: </Text>
          <Text style={styles.userName}> {username} </Text>

          <View style={styles.separator} />

          <TouchableOpacity style={styles.logOut}>
            <Text style={styles.userText}>Log Out </Text>
          </TouchableOpacity>
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
    fontSize: 18,
    marginTop: 20,
  },
  logOut: {
    marginTop: 20,
    fontSize: 18,
  },
  userName: {
    color: "red",
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
