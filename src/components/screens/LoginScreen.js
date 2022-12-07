import React from "react";
import { KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, ImageBackground, View } from "react-native";
import LottieView from "lottie-react-native";

import { useAuth } from "../../services/auth/auth.context";
import { LoginCard } from "../features/auth";
import { Text } from "../UI";
import LoadingBackdrop from "../UI/LoadingBackdrop/LoadingBackdrop";
import ScreenSafeArea from "../UI/ScreenSafeArea";
import useStyles from "./LoginScreen.styles";
const homeBg = require('../../../assets/home_bg.jpg')

export default function LoginScreen() {
  const styles = useStyles();
  const { isLoading } = useAuth();

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ImageBackground source={homeBg} style={styles.imageBackground}>
        {
          isLoading &&
          <LoadingBackdrop />
        }
        <ScreenSafeArea style={styles.container}>
          <KeyboardAvoidingView behavior='padding' style={styles.keyboardView}>
            <View style={styles.animationContainer}>
              <LottieView
                key="animation"
                autoPlay
                loop
                resizeMode="cover"
                source={require("../../../assets/watermelon.json")}
              />
            </View>
            <Text
              style={styles.title}
            >
              MealsToGo
            </Text>
            <LoginCard />
          </KeyboardAvoidingView>
        </ScreenSafeArea>
      </ImageBackground>
    </TouchableWithoutFeedback >
  )
};