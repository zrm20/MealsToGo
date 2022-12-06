import React, { useState } from "react";
import { Surface } from "react-native-paper";

import useStyles from "./LoginCard.styles";
import { Button } from "../../../UI";
import LoginForm from "../LoginForm/LoginForm";

export default function LoginCard(props) {
  const [isLoginMode, setIsLoginMode] = useState(true);
  const styles = useStyles();

  function handleToggleMode() {
    setIsLoginMode(!isLoginMode);
  };

  const toggleModeText =
    isLoginMode ?
      "Switch to Sign Up" :
      "Switch to Log In";

  return (
    <Surface style={styles.container}>
      <LoginForm />
      <Button onPress={handleToggleMode}>
        {toggleModeText}
      </Button>
    </Surface>
  );
};
