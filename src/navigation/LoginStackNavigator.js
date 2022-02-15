import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LogInScreen from "../screens/Login";
import HomeScreen from "../screens/HomeScreen";
import CustomerInfoScreen from "../screens/CustomerInfoScreen";
import CustomerInfoDetailScreen from "../screens/CustomerInfoDetailScreen";
import Profile from "../screens/Profile";
import Counter from "../screens/CounterScreen";
import Tabs from "./BottomNavigator";
import ShipmentScreen from "../screens/ShipmentScreen";
import ReceivedScreen from "../screens/ReceivedScreen";
import CameraScreen from "../screens/CameraScreen";
import TrackingCodeScreen from "../screens/TrackingCodeScreen";
import SenderScreen from "../screens/SenderScreen";

const Stack = createStackNavigator();

const LoginStackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Group
          screenOptions={{
            headerStyle: { backgroundColor: "papayawhip" },
            headerShown: false,
          }}
        >
          <Stack.Screen name="LogInScreen" component={LogInScreen} />
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="CustomerInfo" component={CustomerInfoScreen} />

          <Stack.Screen
            name="InfoDetail"
            component={CustomerInfoDetailScreen}
          />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Counter" component={Counter} />
          <Stack.Screen name="ShipmentScreen" component={ShipmentScreen} />
          {/*<Stack.Screen name="HomeScreen" component={Tabs} />*/}
          <Stack.Screen name="ReceivedScreen" component={ReceivedScreen} />
          <Stack.Screen name="CameraScreen" component={CameraScreen} />
          <Stack.Screen name="SenderScreen" component={SenderScreen} />
          <Stack.Screen
            name="TrackingCodeScreen"
            component={TrackingCodeScreen}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default LoginStackNavigator;
