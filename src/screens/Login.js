import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  Alert,
} from "react-native";
import Screen from "./Screen";
import axios from "axios";
import jwt_decode from "jwt-decode";
import postDataUsingSimplePostCall from "../api/auth";

let width = Dimensions.get("window").width;

const LogInScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const postDataUsingSimplePostCall = () => {
  //   axios
  //     .post(
  //       "http://ec2-16-170-252-161.eu-north-1.compute.amazonaws.com:8080/auth/login",
  //       {
  //         username: "a",
  //         password: "a",
  //       }
  //     )
  //     .then(function (response) {
  //       // handle success
  //       const token = JSON.stringify(response.data);
  //       alert(token);
  //       console.log("token - ", token);
  //       var decoded = jwt_decode(token);
  //       console.log(decoded);
  //     })
  //     .catch(function (error) {
  //       // handle error
  //       alert(error.message);
  //     });
  // };

  return (
    <Screen>
      <View style={styles.container}>
        <View style={styles.authorizationView}>
          {/*<Text style={styles.authorization}> DeliveryMobile </Text>*/}
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

          <TouchableOpacity
            style={styles.loginBtn}
            onPressIn={() => {
              postDataUsingSimplePostCall();
            }}
          >
            <Text style={styles.loginText}>
              {/*<Text*/}
              {/*  style={styles.loginText}*/}
              {/*  onPress={() => {*/}
              {/*    alert("You tapped the button!");*/}
              {/*  }}*/}
              {/*>*/}
              LOGIN
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ marginTop: 30 }}
            onPress={() => navigation.navigate("HomeScreen")}
          >
            <Text style={styles.forgot_button}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Screen>
  );
};

export default LogInScreen;

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
