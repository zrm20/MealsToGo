import React from "react";
import { Surface } from "react-native-paper";

import useStyles from "./LoginCard.styles";
import LoginForm from "../LoginForm/LoginForm";

export default function LoginCard(props) {
  const styles = useStyles();

  return (
    <Surface style={styles.container}>
      <LoginForm />
    </Surface>
  );
};
