import React from "react";
import { Keyboard, TouchableWithoutFeedback } from "react-native";

const KeybordAvoidingWrapper = ({ children }) => {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      {children}
    </TouchableWithoutFeedback>

    // <KeyboardAvoidingView>
    //   <ScrollView>
    //     <TouchableWithoutFeedback
    //       onPress={() => {
    //         Keyboard.dismiss();
    //       }}
    //     >
    //       {children}
    //     </TouchableWithoutFeedback>
    //   </ScrollView>
    // </KeyboardAvoidingView>
  );
};

export default KeybordAvoidingWrapper;
