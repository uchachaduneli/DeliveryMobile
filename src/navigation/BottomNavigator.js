import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";
import Profile from "../screens/Profile";
import { Entypo } from "@expo/vector-icons";
import CustomerInfoScreen from "../screens/CustomerInfoScreen";
import { COLOR } from "../consts/Global";

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        keyboardHidesTabBar: true,
        // tabBarActiveBackgroundColor: "red",
      }}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: "#000",
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
          borderColor: "green",
        }}
        component={CustomerInfoScreen}
      />
      <Tab.Screen
        name="ნანახი"
        options={{
          tabBarIcon: ({ color, size }) => <Entypo />,
        }}
        component={Profile}
      />

      <Tab.Screen
        name="აღებული"
        options={{
          tabBarIcon: ({ color, size }) => <Entypo />,
        }}
        component={Profile}
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
