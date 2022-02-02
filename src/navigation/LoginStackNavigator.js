import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LogInScreen from "../screens/Login";
import HomeScreen from "../screens/HomeScreen";
import CustomerInfoScreen from "../screens/CustomerInfoScreen";

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
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default LoginStackNavigator;
