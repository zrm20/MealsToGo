import React from "react";
import { View } from "react-native"
import { Formik } from "formik";

import { Button, SubmitButton, TextInput } from "../../../UI";

export default function LoginForm() {
  const initialValues = {
    username: "",
    password: ""
  };

  function handleSubmit(values, actions) {
    console.log("SUBMITTING:", values); // TODO change this
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
    >
      <View>
        <TextInput
          name="username"
          label="Username"
          autoComplete="username" //android only
          textContentType="username" // iOS only
          autoCapitalize="none"
          autoCorrect={false}
        />
        <TextInput
          name="password"
          label="Password"
          autoComplete="password" //android only
          textContentType="password" // iOS only
          autoCapitalize="none"
          secureTextEntry
          autoCorrect={false}
        />

        <SubmitButton>Login</SubmitButton>
      </View>

    </Formik>
  )
};