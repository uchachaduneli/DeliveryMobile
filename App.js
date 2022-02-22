import { StyleSheet, Text, View } from "react-native";
import LoginStackNavigator from "./src/navigation/LoginStackNavigator";
import WelcomeStackNavigator from "./src/navigation/WelcomeStackNavigator";
import BottomTabNavigator from "./src/navigation/BottomNavigator";

export default function App() {
  return (
    <>
      {/*<UserInfoTokenProvider>*/}
      {/*<WelcomeStackNavigator />*/}
      <LoginStackNavigator />
      {/*</UserInfoTokenProvider>*/}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
