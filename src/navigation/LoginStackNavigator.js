import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LogInScreen from "../screens/Login";
import HomeScreen from "../screens/HomeScreen";
import CustomerInfoScreen from "../screens/CustomerInfoScreen";
import CustomerInfoDetailScreen from "../screens/CustomerInfoDetailScreen";
import Profile from "../screens/Profile";
import Counter from "../screens/CounterScreen";
import ShipmentScreen from "../screens/ShipmentScreen";
import ReceivedScreen from "../screens/ReceivedScreen";
import CameraScreen from "../screens/CameraScreen";
import TrackingCodeScreen from "../screens/TrackingCodeScreens/TrackingCodeScreen";
import SenderScreen from "../screens/SenderScreen";
import GoInOutScreen from "../screens/CarGoInOutScreen";
import HandlingPlusScreen from "../screens/handlingPlusScreen";
import BottomTabNavigator from "./BottomNavigator";
import TrackingCodeBottomNavigator from "./TrackingCodeBottomNavigator";

const Stack = createStackNavigator();

const LoginStackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          // headerStyle: { backgroundColor: "papayawhip" },
          headerShown: false,
        }}
      >
        <Stack.Screen name="LogInScreen" component={LogInScreen} />

        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="Login" component={LogInScreen} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="CustomerInfo" component={BottomTabNavigator} />
        <Stack.Screen
          name="TrackingCodeScreen"
          component={TrackingCodeBottomNavigator}
        />
        {/*<Stack.Screen name="CustomerInfo" component={CustomerInfoScreen} />*/}

        <Stack.Screen name="InfoDetail" component={CustomerInfoDetailScreen} />
        <Stack.Screen name="Counter" component={Counter} />
        <Stack.Screen name="ShipmentScreen" component={ShipmentScreen} />
        {/*<Stack.Screen name="HomeScreen" component={Tabs} />*/}

        <Stack.Screen name="ReceivedScreen" component={ReceivedScreen} />
        <Stack.Screen name="CameraScreen" component={CameraScreen} />
        <Stack.Screen name="SenderScreen" component={SenderScreen} />
        {/*<Stack.Screen*/}
        {/*  name="TrackingCodeScreen"*/}
        {/*  component={TrackingCodeScreen}*/}
        {/*/>*/}
        <Stack.Screen name="GoInOutScreen" component={GoInOutScreen} />
        <Stack.Screen
          name="HandlingPlusScreen"
          component={HandlingPlusScreen}
        />
        <Stack.Screen
          name="BottomTabNavigator"
          component={BottomTabNavigator}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default LoginStackNavigator;
