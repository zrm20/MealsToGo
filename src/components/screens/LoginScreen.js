import React from "react";
import LoginCard from "../features/auth/LoginCard";

import ScreenSafeArea from "../UI/ScreenSafeArea";
import Text from "../UI/Text";
import useStyles from "./LoginScreen.styles";

export default function LoginScreen() {
  const styles = useStyles();

  return (
    <ScreenSafeArea style={styles.container}>
      <LoginCard />
    </ScreenSafeArea>
  )
};