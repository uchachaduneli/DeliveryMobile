import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Login from "../screens/Login";

import React from "react";
import LogInScreen from "../screens/Login";

const Stack = createStackNavigator();

const WelcomeStackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="LogInScreen" component={LogInScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default WelcomeStackNavigator;
