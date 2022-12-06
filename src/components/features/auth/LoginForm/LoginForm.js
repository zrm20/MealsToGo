import React from "react";
import { View } from "react-native"
import { Formik } from "formik";

import { SubmitButton, TextInput } from "../../../UI";

export default function LoginForm() {
  const initialValues = {
    email: "",
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
          name="email"
          label="Email"
        />
        <TextInput
          name="password"
          label="Password"
          secureTextEntry
        />

        <SubmitButton>Login</SubmitButton>
      </View>

    </Formik>
  )
};