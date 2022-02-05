import {StyleSheet, Text, View} from "react-native";
import LoginStackNavigator from "./src/navigation/LoginStackNavigator";

export default function App() {
    return (
        <>
            {/*<UserInfoTokenProvider>*/}
            <LoginStackNavigator/>
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
