import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";
import Profile from "../screens/Profile";
import { Entypo } from "@expo/vector-icons";
import CustomerInfoScreen from "../screens/CustomerInfoScreen";
import { COLOR } from "../consts/Global";
import PickedUpTabScreen from "../screens/ParcelInfoScreens/PickedUpTabScreen";
import SeenTabScreen from "../screens/ParcelInfoScreens/SeenTabScreen";

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      // tabBarOptions={
      //   {
      //     // tabBarActiveBackgroundColor: "red",
      //   }
      // }
      screenOptions={{
        keyboardHidesTabBar: true,

        headerShown: false,
        tabBarActiveTintColor: "yellow",
        tabBarInactiveTintColor: "#fff",
        // tabBarActiveBackgroundColor: "green",
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
        name="ახალი "
        options={{
          tabBarIcon: ({ color, size }) => <Entypo />,
        }}
        tabStyle={{
          borderRightWidth: 1,
          // borderColor: "green",
        }}
        component={CustomerInfoScreen}
      />
      <Tab.Screen
        name="ნანახი"
        options={{
          tabBarIcon: ({ color, size }) => <Entypo />,
        }}
        component={PickedUpTabScreen}
      />

      <Tab.Screen
        name="აღებული"
        options={{
          tabBarIcon: ({ color, size }) => <Entypo />,
        }}
        component={SeenTabScreen}
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
