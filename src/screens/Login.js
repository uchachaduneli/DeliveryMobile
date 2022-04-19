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
import { BASE_URL } from "../consts/Api";
import { storeUserData } from "../consts/Helper";

const LogInScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // let [username, setUserName] = useState("");

  const postDataUsingSimplePostCall = () => {
    return axios
      .post(BASE_URL + "/auth/login", {
        username: email,
        password: password,
      })
      .then(function (response) {
        const resp = JSON.stringify(response.data);
        let decoded = jwt_decode(resp);
        axios.defaults.headers.common["Authorization"] =
          "Bearer " + JSON.parse(resp).token;
        storeUserData(decoded);
        navigation.navigate("HomeScreen");
      })
      .catch(function (error) {
        alert(error.message);
      });
  };

  return (
    <Screen>
      <View style={styles.container}>
        <View style={styles.authorizationView}>
          <View>
            <Image
              source={require("../images/logo.png")}
              style={{ width: 150, height: 70, marginBottom: 50 }}
            />
          </View>

          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="მომხმარებელი"
              placeholderTextColor="#003f5c"
              keyboardType="default"
              autoCorrect={false}
              autoCapitalize="none"
              errorMessage="please enter a valid email"
              onChangeText={(email) => setEmail(email)}
            />
          </View>

          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="პაროლი"
              placeholderTextColor="#003f5c"
              secureTextEntry={true}
              errorMessage="please enter a valid password"
              onChangeText={(password) => setPassword(password)}
            />
          </View>
          <TouchableOpacity
            style={styles.loginBtn}
            onPressIn={() => {
              postDataUsingSimplePostCall();
            }}
          >
            <Text style={styles.loginText}>შესვლა</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{ marginTop: 30 }}>
            <Text style={styles.forgot_button}>დაგავიწყდა პაროლი ?</Text>
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
