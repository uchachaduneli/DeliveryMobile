import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import LoginStackNavigator from "./src/navigation/LoginStackNavigator";
import { UserInfoProvider } from "./src/Provider/UserInfoProvider";
// import { UserInfoTokenProvider } from "./src/Provider/UserInfoTokenProvider";
import { UserInfoTokenPro } from "./src/Provider/UserInfoTokenProvider";

export default function App() {
  return (
    <>
      {/*<UserInfoTokenProvider>*/}
      <UserInfoTokenPro>
        <UserInfoProvider>
          <LoginStackNavigator />
        </UserInfoProvider>
        {/*</UserInfoTokenProvider>*/}
      </UserInfoTokenPro>
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
