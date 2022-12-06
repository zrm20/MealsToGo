import React from "react";

import { LoginCard } from "../features/auth";
import ScreenSafeArea from "../UI/ScreenSafeArea";
import useStyles from "./LoginScreen.styles";

export default function LoginScreen() {
  const styles = useStyles();

  return (
    <ScreenSafeArea style={styles.container}>
      <LoginCard />
    </ScreenSafeArea>
  )
};