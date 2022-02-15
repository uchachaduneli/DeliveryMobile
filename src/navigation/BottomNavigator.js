// import React from "react";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import HomeScreen from "../screens/HomeScreen";
// import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
// import Profile from "../screens/Profile";
// import { NavigationContainer } from "@react-navigation/native";
//
// const Tab = createBottomTabNavigator();
//
// const BottomTabNavigator = () => {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator
//         screenOptions={{ headerShown: false }}
//         tabBarOptions={{
//           style: {
//             height: 75,
//             borderTopWidth: 0,
//             borderTopLeftRadius: 30,
//             borderTopRightRadius: 30,
//             elevation: 0,
//             margin: 0,
//             justifyContent: "center",
//             alignItems: "center",
//             alignSelf: "center",
//             tabStyle: {
//               width: "auto",
//               height: "auto",
//             },
//           },
//           showLabel: false,
//           activeTintColor: "darkblue",
//           inactiveTintColor: "red",
//         }}
//       >
//         <Tab.Screen name="Home" component={HomeScreen} />
//         <Tab.Screen name="Profile" component={Profile} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// };
//
// const styles = StyleSheet.create({
//   addButtonText: {
//     color: "#fff",
//     fontSize: 60,
//     justifyContent: "center",
//     alignItems: "center",
//     top: -9,
//   },
// });
//
// export default BottomTabNavigator;

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import Profile from "../screens/Profile";
import { NavigationContainer } from "@react-navigation/native";
import Counter from "../screens/CounterScreen";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="HomeScreen" component={HomeScreen} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Tabs;
