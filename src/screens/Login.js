import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  Alert,
} from "react-native";
import Screen from "./Screen";

let width = Dimensions.get("window").width;

const LogInScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [err, setError] = useState(false);
  const [emailErr, setEmailErr] = useState(false);
  const [passwordErr, setPasswordErr] = useState(false);
  const [loading, setLoading] = useState(false);

  // const signIn = async (username, password) => {
  //   try {
  //     const { user } = await api().signInWithEmailAndPassword(
  //       username,
  //       password
  //     );
  //     if (user) {
  //       return true;
  //     }
  //   } catch (err) {
  //     console.log("catch err", err);
  //     return false;
  //   }
  // };
  //
  // const SignIn = async () => {
  //   if (!email) {
  //     setEmailErr(true);
  //   }
  //   if (!password) {
  //     setPasswordErr(true);
  //   }
  //   if (emailErr || passwordErr || !email || !password) {
  //     return;
  //   }
  //   try {
  //     setLoading(true);
  //     let isSuccess = await signIn(email, password);
  //     setError(!isSuccess);
  //     setLoading(false);
  //   } catch (error) {
  //     console.log("sign in error", error);
  //     // console.log("login failed");
  //     setError(true);
  //     setLoading(false);
  //   }
  // };
  const [message, setMessage] = useState();

  const signIn = () => {
    if (email !== "" && password !== "") {
      try {
        const res = fetch(
          "http://188.169.174.66:8080/auth/login",
          // "http://ec2-16-170-252-161.eu-north-1.compute.amazonaws.com:8080/auth/login",
          {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: "email",
              password: "password",
            }),
          }
        );
        console.log(JSON.stringify(res)); //json();
      } catch (error) {
        console.error(error);
      }

      // await fetch(
      //   "http://ec2-16-170-252-161.eu-north-1.compute.amazonaws.com:8080/auth/login",
      //   {
      //     method: "POST",
      //     headers: {
      //       Accept: "application/json",
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify({
      //       email: "email",
      //       password: "password",
      //     }),
      //   }
      // )
      //   .then((response) => console.log(response.text()))
      //   //response.json() .then((jsonObj) => {
      //   //   return jsonObj.token;
      //   // })
      //   .catch((error) => {
      //     console.error(error);
      //   });
      // await fetch(
      //   "http://ec2-16-170-252-161.eu-north-1.compute.amazonaws.com:8080/auth/login",
      //   {
      //     method: "POST",
      //     headers: {
      //       Assept: "application/json",
      //       "Content-type": "application/json",
      //     },
      //     body: JSON.stringify({
      //       email: email,
      //       password: password,
      //     }),
      //   }
      // )
      //     .then(
      //   (res) => console.log(res.data),
      //   res.json().then((resData) => {
      //     console.log("resData.token");
      //     // setMessage(resData.message);
      //   })
      // );
    }
  };

  return (
    <Screen>
      <View style={styles.container}>
        <View style={styles.authorizationView}>
          {/*<Text style={styles.authorization}> DeliveryMobile </Text>*/}
          <View>
            {/*<Image source={require('./src /assets/images/logo.png')}*/}
            {/*       style={{width: 40, height: 40,}}/>*/}
            <Image
              source={{ uri: "https://reactjs.org/logo-og.png" }}
              style={{ width: 60, height: 60, marginBottom: 50 }}
            />
          </View>

          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Email"
              placeholderTextColor="#003f5c"
              keyboardType="email-address"
              autoCorrect={false}
              autoCapitalize="none"
              errorMessage="please enter a valid email"
              onChangeText={(email) => setEmail(email)}
            />
          </View>

          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Password"
              placeholderTextColor="#003f5c"
              secureTextEntry={true}
              errorMessage="please enter a valid password"
              onChangeText={(password) => setPassword(password)}
            />
          </View>

          {/*<TouchableOpacity style={{alignSelf: 'flex-end', marginTop: 10}}>*/}
          {/*    <Text style={styles.forgot_button}>Forgot Password?</Text>*/}
          {/*</TouchableOpacity>*/}

          <TouchableOpacity
            style={styles.loginBtn}
            onPressIn={() => {
              signIn();
            }}
          >
            <Text style={styles.loginText}>
              {/*<Text*/}
              {/*  style={styles.loginText}*/}
              {/*  onPress={() => {*/}
              {/*    alert("You tapped the button!");*/}
              {/*  }}*/}
              {/*>*/}
              LOGIN
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={{ marginTop: 30 }}>
            <Text style={styles.forgot_button}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Screen>
  );
};

export default LogInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(255,255,255)",
    paddingHorizontal: 32,
  },

  authorizationView: {
    flex: 1,
    // marginTop: 100,
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    marginBottom: 40,
  },

  inputView: {
    backgroundColor: "#fafafa",
    borderRadius: 6,
    width: "100%",
    height: 50,
    marginBottom: 20,
    borderColor: "#000",
    borderWidth: 0.2,
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },

  forgot_button: {
    // color: 'fff'
    fontSize: 13,
  },

  loginBtn: {
    width: "80%",
    borderRadius: 10,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    backgroundColor: "#5564BE",
  },

  loginText: {
    color: "white",
    fontSize: 15,
  },

  authorization: {
    fontSize: 40,
    color: "#08091C",
    // marginBottom: 30
  },
});
