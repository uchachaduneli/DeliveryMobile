import React, { useState, useReducer, useCallback, useContext } from "react";

import axios from "axios";
import jwt_decode from "jwt-decode";
import HomeScreen from "../screens/HomeScreen";
// import { AsyncStorage } from "@react-native-async-storage/async-storage";
// import SyncStorage from "sync-storage";

import { UserInfoContext } from "../Context/UserInfoContext";

const postDataUsingSimplePostCall = () => {
  return axios
    .post(
      "http://ec2-16-170-252-161.eu-north-1.compute.amazonaws.com:8080/auth/login",
      {
        username: "a",
        password: "a",
      }
    )
    .then(function (response) {
      const token = JSON.stringify(response.data);
      // alert(token);
      console.log("token - ", xtoken);

      const decoded = jwt_decode(token);
      console.log(decoded);
      updateUserInfo(decoded);
      // onsubmit = async () => {
      //   try {
      //     await AsyncStorage.setItem("token", "decoded");
      //   } catch (e) {
      //     console.log(e);
      //   }
      // };
      {
        // AsyncStorage.setItem("@token", JSON.stringify({ token }));
      }
    })
    .catch(function (error) {
      alert(error.message);
    });
  // navigation.navigate("HomeScreen");
};

export default postDataUsingSimplePostCall;
