import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from "react-native";
import Screen from "./Screen";
// import Constants from "expo-constants";
// import HomeScreen from "./HomeScreen";
import { useContext } from "react";
import { UserInfoContext } from "../Context/UserInfoContext";
// import { storeUserData, getUserDataByKey } from "../consts/Helper";
import { WIDTH } from "../consts/Global";

const Profile = () => {
  // const user = useContext(UserInfoContext);

  // console.log("useraaaa - ", user.UserInfo.sub);
  return (
    <Screen>
      <View style={styles.container}>
        <View style={styles.setting}>
          <View style={styles.userView}>
            <Text style={styles.userText}>მომხმარებელი: </Text>
            {/*<Text style={styles.userName}> {user.UserInfo.sub} </Text>*/}
            {/*<Text style={styles.userName}> {storeUserData()} </Text>*/}
          </View>
          <View style={styles.separator} />
          <Text style={[styles.userText, { marginTop: 30 }]}>UserName: </Text>
          {/*<Text style={styles.userName}> {user.UserInfo.user.userName} </Text>*/}
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
    // justifyContent: "center",
    // alignItems: "center",
    // backgroundColor: "yellow",
  },
  setting: {
    margin: 20,
  },
  userView: {
    width: WIDTH,
    // backgroundColor: "#9BA2B02E",
    paddingTop: 20,
  },
  userText: {
    marginBottom: 10,
    fontSize: 18,
    // color: "#868698",
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
    // borderBottomColor: "azure",
    borderBottomWidth: 1,
    marginBottom: 15,
  },
});

export default Profile;
