import React from "react";
import { KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from "react-native";

import { LoginCard } from "../features/auth";
import ScreenSafeArea from "../UI/ScreenSafeArea";
import useStyles from "./LoginScreen.styles";

export default function LoginScreen() {
  const styles = useStyles();

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ScreenSafeArea>
        <KeyboardAvoidingView style={styles.container} behavior='padding'>
          <LoginCard />
        </KeyboardAvoidingView>
      </ScreenSafeArea>
    </TouchableWithoutFeedback>
  )
};