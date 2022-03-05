import React, { useContext, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import Screen from "./Screen";
import axios from "axios";
import jwt_decode from "jwt-decode";
// import { UserInfoContext } from "../Context/UserInfoContext";

// import { UserInfoToken } from "../Context/UserInfoTokenContext";
import { BASE_URL } from "../consts/Api";
import { storeUserData, getUserDataByKey } from "../consts/Helper";

let userInf;

const LogInScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const { UserInfo, updateUserInfo } = useContext(UserInfoContext);

  // console.log("UserInfo- ", UserInfo.sub);

  let [username, setUserName] = useState("");

  const postDataUsingSimplePostCall = () => {
    return axios
      .post(BASE_URL + "/auth/login", {
        username: email,
        password: password,
      })
      .then(function (response) {
        const resp = JSON.stringify(response.data);
        console.log("resp login -", JSON.parse(resp).token);
        let decoded = jwt_decode(resp);
        userInf = resp;
        // updateUserInfo(decoded);

        axios.defaults.headers.common["Authorization"] =
          "Bearer " + JSON.parse(resp).token;

        if (storeUserData(decoded)) {
          console.log(" You Are Authorized");

          getUserDataByKey("user_desc").then((r) => {
            console.log("r - ", r);
            setUserName(r);
          });
        } else {
          Alert.alert(
            "Autorization Failed - Can't Store Data Into Local Memory"
          );
        }
      })
      .catch(function (error) {
        alert(error.message);
      });
  };
  console.log("username - ", username);

  return (
    <Screen>
      <View style={styles.container}>
        <View style={styles.authorizationView}>
          <View>
            {/*<Image source={require('./src /assets/images/logo.png')}*/}
            {/*       style={{width: 40, height: 40,}}/>*/}
            <Image
              source={{ uri: "https://reactjs.org/logo-og.png" }}
              style={{ width: 60, height: 60, marginBottom: 50 }}
            />
          </View>

          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Email"
              placeholderTextColor="#003f5c"
              keyboardType="email-address"
              autoCorrect={false}
              autoCapitalize="none"
              errorMessage="please enter a valid email"
              onChangeText={(email) => setEmail(email)}
            />
          </View>

          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Password"
              placeholderTextColor="#003f5c"
              secureTextEntry={true}
              errorMessage="please enter a valid password"
              onChangeText={(password) => setPassword(password)}
            />
          </View>

          {/*<TouchableOpacity style={{alignSelf: 'flex-end', marginTop: 10}}>*/}
          {/*    <Text style={styles.forgot_button}>Forgot Password?</Text>*/}
          {/*</TouchableOpacity>*/}

          {/*<Text style={{ width: 40 }}>{username}</Text>*/}

          <TouchableOpacity
            style={styles.loginBtn}
            onPressIn={() => {
              postDataUsingSimplePostCall();
              // userInf
              navigation.navigate("HomeScreen", {
                authorName: username,
              });
            }}
          >
            <Text style={styles.loginText}>LOGIN</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ marginTop: 30 }}
            onPress={() => navigation.navigate("HomeScreen")}
          >
            <Text style={styles.forgot_button}>Forgot Password?</Text>
          </TouchableOpacity>

          {/*<Text style={{ backgroundColor: "pink", marginTop: 30, width: 50 }}>*/}
          {/*  {username}*/}
          {/*</Text>*/}
        </View>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(255,255,255)",
    paddingHorizontal: 32,
  },

  authorizationView: {
    flex: 1,
    // marginTop: 100,
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    marginBottom: 40,
  },

  inputView: {
    backgroundColor: "#fafafa",
    borderRadius: 6,
    width: "100%",
    height: 50,
    marginBottom: 20,
    borderColor: "#000",
    borderWidth: 0.2,
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },

  forgot_button: {
    // color: 'fff'
    fontSize: 13,
  },

  loginBtn: {
    width: "80%",
    borderRadius: 10,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    backgroundColor: "#5564BE",
  },

  loginText: {
    color: "white",
    fontSize: 15,
  },

  authorization: {
    fontSize: 40,
    color: "#08091C",
    // marginBottom: 30
  },
});

export default LogInScreen;
