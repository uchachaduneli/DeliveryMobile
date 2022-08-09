import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";
import Profile from "../screens/Profile";
import { Entypo } from "@expo/vector-icons";
import CustomerInfoScreen from "../screens/CustomerInfoScreen";
import { COLOR } from "../consts/Global";
import SignatureTabScreen from "../screens/TrackingCodeScreens/SignatureTabScreen";
import SignatureImagesTabScreen from "../screens/TrackingCodeScreens/SignatureImagesTabScreen";
import TrackingCodeScreen from "../screens/TrackingCodeScreens/TrackingCodeScreen";

const Tab = createBottomTabNavigator();

export default function TrackingCodeBottomNavigator() {
  return (
    <Tab.Navigator
      // tabBarOptions={{
      //
      //   // tabBarActiveBackgroundColor: "red",
      // }}
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarActiveTintColor: "yellow",
        tabBarInactiveTintColor: "#fff",
        tabBarStyle: {
          backgroundColor: COLOR.DARKBLUE,

          height: 40,
          paddingBottom: 12,
        },
        tabBarLabelStyle: {
          fontSize: 15,
          textAlign: "center",
        },
      }}
    >
      <Tab.Screen
        name="მთავარი "
        options={{
          tabBarIcon: ({ color, size }) => <Entypo />,
        }}
        tabStyle={{
          borderRightWidth: 1,
        }}
        component={TrackingCodeScreen}
      />
      <Tab.Screen
        name="ხელმოწერა"
        options={{
          tabBarIcon: ({ color, size }) => <Entypo />,
        }}
        component={SignatureTabScreen}
      />

      <Tab.Screen
        name="სურათები"
        options={{
          tabBarIcon: ({ color, size }) => <Entypo />,
        }}
        component={SignatureImagesTabScreen}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  addButtonText: {
    // color: "#fff",
    // fontSize: 60,
    // justifyContent: "center",
    // alignItems: "center",
    // top: -9,
  },
});
